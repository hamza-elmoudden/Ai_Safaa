import { payment_method, payment_status } from "generated/prisma/client";


export class Payment {
    constructor(
        public id:string,
        public user_id:string,
        public amount_mad:number,
        public method:payment_method,
        public status:payment_status,
        public created_at:Date,
        public provider_ref?:string,
        public provider_meta?:object,
        public subscription_id?:string,
        public paid_at?:Date,
        public starts_at?:Date,
        public expires_at?:Date,
    ){}
}