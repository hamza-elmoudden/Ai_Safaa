import { Decimal } from "@prisma/client/runtime/index-browser";
export declare enum token_source {
    conversation = "conversation",
    treatment_chat = "treatment_chat",
    photo_analysis = "photo_analysis",
    conversation_photo = "conversation_photo",
    treatment_photo = "treatment_photo"
}
export declare class TokenUsage {
    readonly id: string;
    readonly user_id: string;
    readonly source: token_source;
    readonly ref_id: string;
    readonly tokens_input: string;
    readonly tokens_output: string;
    readonly tokens_total: string;
    readonly plan_id: string;
    readonly ai_model: string;
    readonly cost_usd: Decimal;
    readonly created_at: Date;
    constructor(id: string, user_id: string, source: token_source, ref_id: string, tokens_input: string, tokens_output: string, tokens_total: string, plan_id: string, ai_model: string, cost_usd: Decimal, created_at: Date);
}
