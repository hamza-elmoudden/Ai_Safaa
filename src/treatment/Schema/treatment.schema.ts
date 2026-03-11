import { Decimal } from "@prisma/client/runtime/index-browser";

enum concern_type {
  acne="acne",
  dryness="dryness",
  oiliness="oiliness",
  pigmentation="pigmentation",
  wrinkles="wrinkles",
  sensitivity="sensitivity",
  pores="pores"
}


enum plan_status {
  active="active",
  completed="completed",
  paused="paused",
  cancelled="cancelled"
}


enum areas_treated {
  Face="Face",
  Neck="Neck",
  Back="Back",
  Scalp="Scalp",
  Hair="Hair",
  Nails="Nails"
}



export class Treatment {
    constructor(
        public id: string,
        public user_id: string,
        public title: string,
        public concern_type: concern_type,
        public duration_days: number,
        public checkin_interval: number,
        public day_0_acne_count: number | null,
        public status: plan_status,
        public improvement_pct: Decimal | null,
        public areas_treated: areas_treated,
        public initial_photo_url: string,
        public initial_photo_key: string,
        public ai_diagnosis: string | null,
        public ai_model: string | null,
        public next_checkin_at: Date | null,
        public started_at: Date,
        public completed_at: Date | null,
        public created_at: Date,
        public updated_at: Date,
    ){}
}