"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubscriptionCommand = void 0;
class CreateSubscriptionCommand {
    name;
    price_mad;
    analyses_limit;
    treatment_plans;
    product_checks;
    progress_tracking;
    vip_consultation;
    features;
    constructor(name, price_mad, analyses_limit, treatment_plans, product_checks, progress_tracking, vip_consultation, features) {
        this.name = name;
        this.price_mad = price_mad;
        this.analyses_limit = analyses_limit;
        this.treatment_plans = treatment_plans;
        this.product_checks = product_checks;
        this.progress_tracking = progress_tracking;
        this.vip_consultation = vip_consultation;
        this.features = features;
    }
}
exports.CreateSubscriptionCommand = CreateSubscriptionCommand;
//# sourceMappingURL=create.command.js.map