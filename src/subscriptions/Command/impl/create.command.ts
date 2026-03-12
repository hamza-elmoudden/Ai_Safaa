

export class CreateSubscriptionCommand {
    constructor(
        public name: string,
        public price_mad: number,
        public analyses_limit: number,
        public treatment_plans: boolean,
        public product_checks: number,
        public progress_tracking: boolean,
        public vip_consultation: boolean,
        public features: object
    ) {}
}