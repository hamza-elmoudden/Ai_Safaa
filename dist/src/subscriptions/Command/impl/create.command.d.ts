export declare class CreateSubscriptionCommand {
    name: string;
    price_mad: number;
    analyses_limit: number;
    treatment_plans: boolean;
    product_checks: number;
    progress_tracking: boolean;
    vip_consultation: boolean;
    features: object;
    constructor(name: string, price_mad: number, analyses_limit: number, treatment_plans: boolean, product_checks: number, progress_tracking: boolean, vip_consultation: boolean, features: object);
}
