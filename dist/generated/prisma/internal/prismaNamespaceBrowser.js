"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.JsonNullValueInput = exports.NullableJsonNullValueInput = exports.SortOrder = exports.Token_usageScalarFieldEnum = exports.UsersScalarFieldEnum = exports.Treatment_plansScalarFieldEnum = exports.SubscriptionsScalarFieldEnum = exports.Skin_profilesScalarFieldEnum = exports.PaymentsScalarFieldEnum = exports.ConversationsScalarFieldEnum = exports.Chat_treatmentScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    chat_treatment: 'chat_treatment',
    conversations: 'conversations',
    payments: 'payments',
    skin_profiles: 'skin_profiles',
    subscriptions: 'subscriptions',
    treatment_plans: 'treatment_plans',
    users: 'users',
    token_usage: 'token_usage'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.Chat_treatmentScalarFieldEnum = {
    id: 'id',
    plan_id: 'plan_id',
    user_message: 'user_message',
    ai_response: 'ai_response',
    have_photo: 'have_photo',
    day_number: 'day_number',
    image_url: 'image_url',
    image_key: 'image_key',
    created_at: 'created_at'
};
exports.ConversationsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    message_user: 'message_user',
    user_photo_url: 'user_photo_url',
    user_photo_key: 'user_photo_key',
    analysis_photo: 'analysis_photo',
    message_ai: 'message_ai',
    created_at: 'created_at'
};
exports.PaymentsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    subscription_id: 'subscription_id',
    amount_mad: 'amount_mad',
    method: 'method',
    status: 'status',
    provider_ref: 'provider_ref',
    provider_meta: 'provider_meta',
    starts_at: 'starts_at',
    expires_at: 'expires_at'
};
exports.Skin_profilesScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    skin_type: 'skin_type',
    concerns: 'concerns',
    allergies: 'allergies',
    notes: 'notes',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.SubscriptionsScalarFieldEnum = {
    id: 'id',
    name: 'name',
    price_mad: 'price_mad',
    limit_photo_treatment: 'limit_photo_treatment',
    treatment_plans: 'treatment_plans',
    limit_photo_check: 'limit_photo_check',
    progress_tracking: 'progress_tracking',
    vip_consultation: 'vip_consultation',
    features: 'features',
    is_active: 'is_active',
    created_at: 'created_at'
};
exports.Treatment_plansScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    status: 'status',
    improvement_pct: 'improvement_pct',
    areas_treated: 'areas_treated',
    initial_photo_url: 'initial_photo_url',
    initial_photo_key: 'initial_photo_key',
    ai_diagnosis: 'ai_diagnosis',
    ai_model: 'ai_model',
    next_checkin_at: 'next_checkin_at',
    started_at: 'started_at',
    completed_at: 'completed_at',
    created_at: 'created_at',
    updated_at: 'updated_at',
    path: 'path',
    duration_days: 'duration_days'
};
exports.UsersScalarFieldEnum = {
    id: 'id',
    email: 'email',
    phone: 'phone',
    country_code: 'country_code',
    city: 'city',
    date_of_birth: 'date_of_birth',
    password_hash: 'password_hash',
    google_provider: 'google_provider',
    google_id: 'google_id',
    full_name: 'full_name',
    role: 'role',
    is_verified: 'is_verified',
    otp_code: 'otp_code',
    otp_expires_at: 'otp_expires_at',
    last_login: 'last_login',
    created_at: 'created_at',
    updated_at: 'updated_at',
    refresh_token: 'refresh_token',
    is_complete_login: 'is_complete_login'
};
exports.Token_usageScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    source: 'source',
    ref_id: 'ref_id',
    tokens_input: 'tokens_input',
    tokens_output: 'tokens_output',
    tokens_total: 'tokens_total',
    ai_model: 'ai_model',
    cost_usd: 'cost_usd',
    created_at: 'created_at',
    plan_id: 'plan_id'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map