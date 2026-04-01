"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenUsage = exports.token_source = void 0;
var token_source;
(function (token_source) {
    token_source["conversation"] = "conversation";
    token_source["treatment_chat"] = "treatment_chat";
    token_source["photo_analysis"] = "photo_analysis";
    token_source["conversation_photo"] = "conversation_photo";
    token_source["treatment_photo"] = "treatment_photo";
})(token_source || (exports.token_source = token_source = {}));
class TokenUsage {
    id;
    user_id;
    source;
    ref_id;
    tokens_input;
    tokens_output;
    tokens_total;
    plan_id;
    ai_model;
    cost_usd;
    created_at;
    constructor(id, user_id, source, ref_id, tokens_input, tokens_output, tokens_total, plan_id, ai_model, cost_usd, created_at) {
        this.id = id;
        this.user_id = user_id;
        this.source = source;
        this.ref_id = ref_id;
        this.tokens_input = tokens_input;
        this.tokens_output = tokens_output;
        this.tokens_total = tokens_total;
        this.plan_id = plan_id;
        this.ai_model = ai_model;
        this.cost_usd = cost_usd;
        this.created_at = created_at;
    }
}
exports.TokenUsage = TokenUsage;
//# sourceMappingURL=tokenusage.schema.js.map