

export class GetChatTreatmentQuery{
    constructor(
        public readonly user_id:string,
       public readonly plan_id:string,
       public readonly page:number,
       public readonly limit:number
    ){}
}