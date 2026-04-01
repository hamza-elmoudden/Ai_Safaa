import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly chat_treatment: "chat_treatment";
    readonly conversations: "conversations";
    readonly payments: "payments";
    readonly skin_profiles: "skin_profiles";
    readonly subscriptions: "subscriptions";
    readonly treatment_plans: "treatment_plans";
    readonly users: "users";
    readonly token_usage: "token_usage";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const Chat_treatmentScalarFieldEnum: {
    readonly id: "id";
    readonly plan_id: "plan_id";
    readonly user_message: "user_message";
    readonly ai_response: "ai_response";
    readonly have_photo: "have_photo";
    readonly day_number: "day_number";
    readonly image_url: "image_url";
    readonly image_key: "image_key";
    readonly created_at: "created_at";
};
export type Chat_treatmentScalarFieldEnum = (typeof Chat_treatmentScalarFieldEnum)[keyof typeof Chat_treatmentScalarFieldEnum];
export declare const ConversationsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly message_user: "message_user";
    readonly user_photo_url: "user_photo_url";
    readonly user_photo_key: "user_photo_key";
    readonly analysis_photo: "analysis_photo";
    readonly message_ai: "message_ai";
    readonly created_at: "created_at";
};
export type ConversationsScalarFieldEnum = (typeof ConversationsScalarFieldEnum)[keyof typeof ConversationsScalarFieldEnum];
export declare const PaymentsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly subscription_id: "subscription_id";
    readonly amount_mad: "amount_mad";
    readonly method: "method";
    readonly status: "status";
    readonly provider_ref: "provider_ref";
    readonly provider_meta: "provider_meta";
    readonly starts_at: "starts_at";
    readonly expires_at: "expires_at";
};
export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum];
export declare const Skin_profilesScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly skin_type: "skin_type";
    readonly concerns: "concerns";
    readonly allergies: "allergies";
    readonly notes: "notes";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Skin_profilesScalarFieldEnum = (typeof Skin_profilesScalarFieldEnum)[keyof typeof Skin_profilesScalarFieldEnum];
export declare const SubscriptionsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly price_mad: "price_mad";
    readonly limit_photo_treatment: "limit_photo_treatment";
    readonly treatment_plans: "treatment_plans";
    readonly limit_photo_check: "limit_photo_check";
    readonly progress_tracking: "progress_tracking";
    readonly vip_consultation: "vip_consultation";
    readonly features: "features";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
};
export type SubscriptionsScalarFieldEnum = (typeof SubscriptionsScalarFieldEnum)[keyof typeof SubscriptionsScalarFieldEnum];
export declare const Treatment_plansScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly title: "title";
    readonly status: "status";
    readonly improvement_pct: "improvement_pct";
    readonly areas_treated: "areas_treated";
    readonly initial_photo_url: "initial_photo_url";
    readonly initial_photo_key: "initial_photo_key";
    readonly ai_diagnosis: "ai_diagnosis";
    readonly ai_model: "ai_model";
    readonly next_checkin_at: "next_checkin_at";
    readonly started_at: "started_at";
    readonly completed_at: "completed_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly path: "path";
    readonly duration_days: "duration_days";
};
export type Treatment_plansScalarFieldEnum = (typeof Treatment_plansScalarFieldEnum)[keyof typeof Treatment_plansScalarFieldEnum];
export declare const UsersScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly phone: "phone";
    readonly country_code: "country_code";
    readonly city: "city";
    readonly date_of_birth: "date_of_birth";
    readonly password_hash: "password_hash";
    readonly google_provider: "google_provider";
    readonly google_id: "google_id";
    readonly full_name: "full_name";
    readonly role: "role";
    readonly is_verified: "is_verified";
    readonly otp_code: "otp_code";
    readonly otp_expires_at: "otp_expires_at";
    readonly last_login: "last_login";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly refresh_token: "refresh_token";
    readonly is_complete_login: "is_complete_login";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const Token_usageScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly source: "source";
    readonly ref_id: "ref_id";
    readonly tokens_input: "tokens_input";
    readonly tokens_output: "tokens_output";
    readonly tokens_total: "tokens_total";
    readonly ai_model: "ai_model";
    readonly cost_usd: "cost_usd";
    readonly created_at: "created_at";
    readonly plan_id: "plan_id";
};
export type Token_usageScalarFieldEnum = (typeof Token_usageScalarFieldEnum)[keyof typeof Token_usageScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
