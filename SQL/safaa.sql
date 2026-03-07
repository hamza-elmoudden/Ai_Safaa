
CREATE TYPE user_role AS ENUM ('user', 'admin');
CREATE TYPE skin_type AS ENUM ('dry', 'oily', 'combination', 'normal', 'sensitive');
CREATE TYPE plan_name AS ENUM ('free', 'premium', 'vip');
CREATE TYPE payment_method AS ENUM ('credit_card', 'paypal', 'bank_transfer');
CREATE TYPE payment_status AS ENUM ('pending', 'completed', 'failed', 'refunded');

CREATE TABLE users (
  id               UUID         PRIMARY KEY DEFAULT uuid_generate_v4(),
  email            VARCHAR(255) UNIQUE,
  phone            VARCHAR(20)  UNIQUE,
  country_code     VARCHAR(5),
  city             VARCHAR(100),
  data_of_birth    DATE,
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



