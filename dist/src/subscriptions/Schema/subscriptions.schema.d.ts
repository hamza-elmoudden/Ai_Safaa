declare enum plan_name {
    free = "free",
    premium = "premium",
    vip = "vip"
}
export declare class Subscription {
    id: string;
    name: plan_name;
    price_mad: number;
    limit_photo_treatment: number;
    treatment_plans: number;
    limit_photo_check: number;
    progress_tracking: boolean;
    vip_consultation: boolean;
    features: object;
    is_active: boolean;
    created_at: Date;
    constructor(id: string, name: plan_name, price_mad: number, limit_photo_treatment: number, treatment_plans: number, limit_photo_check: number, progress_tracking: boolean, vip_consultation: boolean, features: object, is_active: boolean, created_at: Date);
}
export {};
