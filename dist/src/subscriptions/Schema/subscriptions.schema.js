"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
var plan_name;
(function (plan_name) {
    plan_name["free"] = "free";
    plan_name["premium"] = "premium";
    plan_name["vip"] = "vip";
})(plan_name || (plan_name = {}));
class Subscription {
    id;
    name;
    price_mad;
    limit_photo_treatment;
    treatment_plans;
    limit_photo_check;
    progress_tracking;
    vip_consultation;
    features;
    is_active;
    created_at;
    constructor(id, name, price_mad, limit_photo_treatment, treatment_plans, limit_photo_check, progress_tracking, vip_consultation, features, is_active, created_at) {
        this.id = id;
        this.name = name;
        this.price_mad = price_mad;
        this.limit_photo_treatment = limit_photo_treatment;
        this.treatment_plans = treatment_plans;
        this.limit_photo_check = limit_photo_check;
        this.progress_tracking = progress_tracking;
        this.vip_consultation = vip_consultation;
        this.features = features;
        this.is_active = is_active;
        this.created_at = created_at;
    }
}
exports.Subscription = Subscription;
//# sourceMappingURL=subscriptions.schema.js.map