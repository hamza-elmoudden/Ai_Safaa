





export class ChatTreatment{
    constructor(
        public readonly id:string,
        public readonly plan_id:string,
        public readonly user_message:string,
        public readonly ai_response:string,
        public readonly have_photo:boolean,
        public readonly day_number?:number,
        public readonly image_url?:string,
        public readonly image_key?:string
        ){}
}