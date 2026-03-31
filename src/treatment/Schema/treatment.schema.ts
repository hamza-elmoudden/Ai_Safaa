import { Decimal } from "@prisma/client/runtime/index-browser";




export enum plan_status {
  active="active",
  completed="completed",
  paused="paused",
  cancelled="cancelled"
}
 

export enum areas_treated {
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
        public status: plan_status,

        public improvement_pct: Decimal | null, 

        public areas_treated: areas_treated,

        public duration_days: number, 

        public initial_photo_url: string,
        public initial_photo_key: string,

        public ai_diagnosis: string | null,
        public ai_model: string | null,

        public next_checkin_at: Date | null,

        public started_at: Date,
        public completed_at: Date | null,

        public created_at: Date,
        public updated_at: Date,

        public path: any | null 
    ){}
}