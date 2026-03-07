
CREATE TYPE user_role AS ENUM ('user', 'admin','tchker');
CREATE TYPE skin_type AS ENUM ('dry', 'oily', 'combination', 'normal', 'sensitive');
CREATE TYPE plan_name AS ENUM ('free', 'premium', 'vip');
CREATE TYPE payment_method AS ENUM ('credit_card', 'paypal', 'bank_transfer');
CREATE TYPE payment_status AS ENUM ('pending', 'completed', 'failed', 'refunded');
CREATE TYPE concern_type   AS ENUM ('acne', 'dryness', 'oiliness', 'pigmentation', 'wrinkles', 'sensitivity', 'pores');
CREATE TYPE plan_status    AS ENUM ('active', 'completed', 'paused', 'cancelled');
CREATE TYPE areas_treated  AS ENUM ('Face', 'Neck', 'Back', 'Scalp', 'Hair', 'Nails');


CREATE TABLE users (
  id               UUID         PRIMARY KEY DEFAULT uuid_generate_v4(),
  email            VARCHAR(255) UNIQUE,
  phone            VARCHAR(20)  UNIQUE,
  country_code     VARCHAR(5),
  city             VARCHAR(100),
  date_of_birth    DATE,
  password_hash    TEXT         NOT NULL,
  google_provider  BOOLEAN      NOT NULL DEFAULT FALSE,
  google_id        VARCHAR(255) UNIQUE,
  full_name        VARCHAR(100) NOT NULL,
  role             user_role    NOT NULL DEFAULT 'user',
  is_verified      BOOLEAN      NOT NULL DEFAULT FALSE,
  otp_code         VARCHAR(6),
  otp_expires_at   TIMESTAMP,
  last_login       TIMESTAMP,
  created_at       TIMESTAMP    NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMP    NOT NULL DEFAULT NOW(),

  CONSTRAINT chk_users_contact CHECK (email IS NOT NULL OR phone IS NOT NULL)
);

CREATE INDEX idx_users_email ON users(email) WHERE email IS NOT NULL;
CREATE INDEX idx_users_phone ON users(phone) WHERE phone IS NOT NULL;

CREATE TRIGGER trg_users_ts
  BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION fn_update_timestamp();




CREATE TABLE skin_profiles (
  id            UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id       UUID        NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  skin_type     skin_type   NOT NULL,
  concerns      TEXT[]      NOT NULL DEFAULT '{}',
  allergies     TEXT[]      NOT NULL DEFAULT '{}',
  notes         TEXT,
  created_at    TIMESTAMP   NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMP   NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_skin_profiles_user ON skin_profiles(user_id);

CREATE TRIGGER trg_skin_profiles_ts
  BEFORE UPDATE ON skin_profiles
  FOR EACH ROW EXECUTE FUNCTION fn_update_timestamp();


CREATE TABLE subscription_plans (
  id                  UUID      PRIMARY KEY DEFAULT uuid_generate_v4(),
  name                plan_name NOT NULL UNIQUE,
  price_mad           DECIMAL(8,2) NOT NULL DEFAULT 0,
  analyses_limit      INTEGER   NOT NULL DEFAULT 3,   -- -1 = unlimited
  treatment_plans     BOOLEAN   NOT NULL DEFAULT FALSE,
  product_checks      INTEGER   NOT NULL DEFAULT 5,   -- -1 = unlimited
  progress_tracking   BOOLEAN   NOT NULL DEFAULT FALSE,
  vip_consultation    BOOLEAN   NOT NULL DEFAULT FALSE,
  features            JSONB     NOT NULL DEFAULT '{}',
  is_active           BOOLEAN   NOT NULL DEFAULT TRUE,
  created_at          TIMESTAMP NOT NULL DEFAULT NOW()
);


CREATE TABLE payments (
  id               UUID           PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id          UUID           NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  subscription_id  UUID           REFERENCES subscriptions(id),
  amount_mad       DECIMAL(8,2)   NOT NULL,
  method           payment_method NOT NULL,
  status           payment_status NOT NULL DEFAULT 'pending',
  provider_ref     VARCHAR(255)   UNIQUE,
  provider_meta    JSONB          DEFAULT '{}',
  paid_at          TIMESTAMP,
  created_at       TIMESTAMP      NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_payments_user   ON payments(user_id, created_at DESC);
CREATE INDEX idx_payments_status ON payments(status) WHERE status = 'pending';



CREATE TABLE treatment_plans (
  id                 UUID         PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id            UUID         NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title              VARCHAR(200) NOT NULL,
  concern_type       concern_type NOT NULL,
  duration_days      INTEGER      NOT NULL DEFAULT 28,
  checkin_interval   INTEGER      NOT NULL DEFAULT 4,
  DAY_0_acne_count   INTEGER,     DEFAULT 0,
  status             plan_status  NOT NULL DEFAULT 'active',
  improvement_pct    DECIMAL(5,2) DEFAULT 0,
  areas_treated      areas_treated NOT NuLL,

  -- Day 0: initial photo + diagnosis (ONLY place photos are stored in plans)
  initial_photo_url  TEXT         NOT NULL,
  initial_photo_key  TEXT         NOT NULL,
  ai_diagnosis       TEXT,
  ai_model           VARCHAR(100) DEFAULT 'gpt-4-vision-preview',

  next_checkin_at    TIMESTAMP,
  started_at         TIMESTAMP    NOT NULL DEFAULT NOW(),
  completed_at       TIMESTAMP,
  created_at         TIMESTAMP    NOT NULL DEFAULT NOW(),
  updated_at         TIMESTAMP    NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_plans_user_active  ON treatment_plans(user_id, status) WHERE status = 'active';
CREATE INDEX idx_plans_next_checkin ON treatment_plans(next_checkin_at)  WHERE status = 'active';

CREATE TRIGGER trg_treatment_plans_ts
  BEFORE UPDATE ON treatment_plans
  FOR EACH ROW EXECUTE FUNCTION fn_update_timestamp();

CREATE TABLE chat_treatment (
  id              UUID         PRIMARY KEY DEFAULT uuid_generate_v4(),
  plan_id         UUID         NOT NULL REFERENCES treatment_plans(id) ON DELETE CASCADE,
  user_message    TEXT         NOT NULL,
  ai_response     TEXT         NOT NULL,
  have_photo      BOOLEAN      NOT NULL DEFAULT FALSE,
  day_number      INTEGER,
  image_url       TEXT,
  image_key       TEXT,
  created_at      TIMESTAMP    NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_chat_logs_plan ON chat_treatment(plan_id, created_at DESC);
CREATE INDEX idx_chat_logs_have_photo ON chat_treatment(have_photo) WHERE have_photo = TRUE;

CREATE TABLE conversations (
  id              UUID         PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id         UUID         NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  message_user    TEXT         NOT NULL,
  user_photo_url  TEXT,
  user_photo_key  TEXT,
  analysis_photo  TEXT,
  message_ai      TEXT         NOT NULL,
  created_at      TIMESTAMP    NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_conversations_user ON conversations(user_id, created_at DESC);
CREATE INDEX idx_conversations_have_photo ON conversations(user_photo_url) WHERE user_photo_url IS NOT NULL;


CREATE VIEW v_checkin_progress AS
SELECT
  c.id,
  c.plan_id,
  c.user_id,
  c.day_number,
  c.acne_count,
  prev.acne_count                  AS prev_acne_count,
  (prev.acne_count - c.acne_count) AS acne_reduced,
  c.redness_level,
  c.glow_score,
  c.improvement_pct,
  c.ai_summary,                    -- text only — no photo URL exposed here
  c.checked_at
FROM treatment_checkins c
LEFT JOIN treatment_checkins prev
  ON  prev.plan_id    = c.plan_id
  AND prev.day_number = c.day_number - 4;



CREATE VIEW v_user_active_plan AS
SELECT
  u.id                    AS user_id,
  u.full_name,
  s.status                AS sub_status,
  s.expires_at,
  p.name                  AS plan_name,
  p.analyses_limit,
  p.treatment_plans,
  p.product_checks        AS product_checks_limit,
  p.progress_tracking,
  p.vip_consultation,
  COALESCE(uq.analyses_used, 0)       AS analyses_used,
  COALESCE(uq.product_checks_used, 0) AS product_checks_used
FROM users u
LEFT JOIN subscriptions s
  ON  s.user_id    = u.id
  AND s.status     = 'active'
  AND s.expires_at > NOW()
LEFT JOIN subscription_plans p ON p.id = s.plan_id
LEFT JOIN usage_quotas uq
  ON  uq.user_id      = u.id
  AND uq.period_start = DATE_TRUNC('month', NOW())::DATE;
