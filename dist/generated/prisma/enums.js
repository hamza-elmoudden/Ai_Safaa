"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.token_source = exports.user_role = exports.skin_type = exports.plan_status = exports.plan_name = exports.payment_status = exports.payment_method = exports.concern_type = exports.areas_treated = void 0;
exports.areas_treated = {
    Face: 'Face',
    Neck: 'Neck',
    Back: 'Back',
    Scalp: 'Scalp',
    Hair: 'Hair',
    Nails: 'Nails'
};
exports.concern_type = {
    acne: 'acne',
    dryness: 'dryness',
    oiliness: 'oiliness',
    pigmentation: 'pigmentation',
    wrinkles: 'wrinkles',
    sensitivity: 'sensitivity',
    pores: 'pores'
};
exports.payment_method = {
    credit_card: 'credit_card',
    paypal: 'paypal',
    bank_transfer: 'bank_transfer'
};
exports.payment_status = {
    pending: 'pending',
    completed: 'completed',
    failed: 'failed',
    refunded: 'refunded',
    active: 'active'
};
exports.plan_name = {
    free: 'free',
    premium: 'premium',
    vip: 'vip'
};
exports.plan_status = {
    active: 'active',
    completed: 'completed',
    paused: 'paused',
    cancelled: 'cancelled'
};
exports.skin_type = {
    dry: 'dry',
    oily: 'oily',
    combination: 'combination',
    normal: 'normal',
    sensitive: 'sensitive'
};
exports.user_role = {
    user: 'user',
    admin: 'admin',
    tchker: 'tchker'
};
exports.token_source = {
    conversation: 'conversation',
    treatment_chat: 'treatment_chat',
    photo_analysis: 'photo_analysis',
    conversation_photo: 'conversation_photo',
    treatment_photo: 'treatment_photo'
};
//# sourceMappingURL=enums.js.map