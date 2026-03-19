import { Decimal } from "@prisma/client/runtime/index-browser"


export enum token_source {
  conversation='conversation',
  treatment_chat='treatment_chat',
  photo_analysis='photo_analysis',
  conversation_photo='conversation_photo',
  treatment_photo='treatment_photo'
}


export class TokenUsage{
    constructor(
        public readonly id:string,
        public readonly user_id:string,
        public readonly source:token_source,
        public readonly ref_id:string,
        public readonly tokens_input:string,
        public readonly tokens_output:string,
        public readonly tokens_total:string,
        public readonly plan_id:string,
        public readonly ai_model:string,
        public readonly cost_usd:Decimal,
        public readonly created_at:Date,
    ){}
}