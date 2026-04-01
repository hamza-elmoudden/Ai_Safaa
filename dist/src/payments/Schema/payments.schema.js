"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    id;
    user_id;
    amount_mad;
    method;
    status;
    created_at;
    starts_at;
    subscription_id;
    provider_ref;
    provider_meta;
    expires_at;
    constructor(id, user_id, amount_mad, method, status, created_at, starts_at, subscription_id, provider_ref, provider_meta, expires_at) {
        this.id = id;
        this.user_id = user_id;
        this.amount_mad = amount_mad;
        this.method = method;
        this.status = status;
        this.created_at = created_at;
        this.starts_at = starts_at;
        this.subscription_id = subscription_id;
        this.provider_ref = provider_ref;
        this.provider_meta = provider_meta;
        this.expires_at = expires_at;
    }
}
exports.Payment = Payment;
//# sourceMappingURL=payments.schema.js.map