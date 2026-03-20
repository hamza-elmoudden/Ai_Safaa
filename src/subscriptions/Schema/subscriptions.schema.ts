




enum plan_name {
  free="free",
  premium="premium",
  vip="vip"
}

export class Subscription {
    constructor(
        public id: string,
        public name: plan_name,
        public price_mad: number,
        public limit_photo_treatment: number,
        public treatment_plans: boolean,
        public product_checks: number,
        public progress_tracking: boolean,
        public vip_consultation: boolean,
        public features: object,
        public is_active: boolean,
        public created_at: Date
    ) {}    
}