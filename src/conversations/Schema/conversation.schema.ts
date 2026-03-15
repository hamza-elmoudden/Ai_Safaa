

export class Conversation{
    constructor(
        public readonly id:string,
        public readonly user_id:string,
        public readonly message_user:string,
        public readonly message_ai:string,
        public readonly created_at:string,
        public readonly user_photo_url?:string,
        public readonly user_photo_key?:string,
        public readonly analysis_photo?:string
    ){}
}