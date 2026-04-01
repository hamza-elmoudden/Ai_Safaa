export declare const areas_treated: {
    readonly Face: "Face";
    readonly Neck: "Neck";
    readonly Back: "Back";
    readonly Scalp: "Scalp";
    readonly Hair: "Hair";
    readonly Nails: "Nails";
};
export type areas_treated = (typeof areas_treated)[keyof typeof areas_treated];
export declare const concern_type: {
    readonly acne: "acne";
    readonly dryness: "dryness";
    readonly oiliness: "oiliness";
    readonly pigmentation: "pigmentation";
    readonly wrinkles: "wrinkles";
    readonly sensitivity: "sensitivity";
    readonly pores: "pores";
};
export type concern_type = (typeof concern_type)[keyof typeof concern_type];
export declare const payment_method: {
    readonly credit_card: "credit_card";
    readonly paypal: "paypal";
    readonly bank_transfer: "bank_transfer";
};
export type payment_method = (typeof payment_method)[keyof typeof payment_method];
export declare const payment_status: {
    readonly pending: "pending";
    readonly completed: "completed";
    readonly failed: "failed";
    readonly refunded: "refunded";
    readonly active: "active";
};
export type payment_status = (typeof payment_status)[keyof typeof payment_status];
export declare const plan_name: {
    readonly free: "free";
    readonly premium: "premium";
    readonly vip: "vip";
};
export type plan_name = (typeof plan_name)[keyof typeof plan_name];
export declare const plan_status: {
    readonly active: "active";
    readonly completed: "completed";
    readonly paused: "paused";
    readonly cancelled: "cancelled";
};
export type plan_status = (typeof plan_status)[keyof typeof plan_status];
export declare const skin_type: {
    readonly dry: "dry";
    readonly oily: "oily";
    readonly combination: "combination";
    readonly normal: "normal";
    readonly sensitive: "sensitive";
};
export type skin_type = (typeof skin_type)[keyof typeof skin_type];
export declare const user_role: {
    readonly user: "user";
    readonly admin: "admin";
    readonly tchker: "tchker";
};
export type user_role = (typeof user_role)[keyof typeof user_role];
export declare const token_source: {
    readonly conversation: "conversation";
    readonly treatment_chat: "treatment_chat";
    readonly photo_analysis: "photo_analysis";
    readonly conversation_photo: "conversation_photo";
    readonly treatment_photo: "treatment_photo";
};
export type token_source = (typeof token_source)[keyof typeof token_source];
