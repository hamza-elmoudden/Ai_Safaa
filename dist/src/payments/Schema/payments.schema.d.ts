import { payment_method, payment_status } from "generated/prisma/client";
export declare class Payment {
    id: string;
    user_id: string;
    amount_mad: number;
    method: payment_method;
    status: payment_status;
    created_at: Date;
    starts_at: Date;
    subscription_id: string;
    provider_ref?: string | undefined;
    provider_meta?: object | undefined;
    expires_at?: Date | undefined;
    constructor(id: string, user_id: string, amount_mad: number, method: payment_method, status: payment_status, created_at: Date, starts_at: Date, subscription_id: string, provider_ref?: string | undefined, provider_meta?: object | undefined, expires_at?: Date | undefined);
}
