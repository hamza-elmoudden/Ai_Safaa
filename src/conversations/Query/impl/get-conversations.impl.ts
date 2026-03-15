

export class GetConversationsQuery{
    constructor(
       public readonly user_id:string,
       public readonly page:number,
       public readonly limit:number
        
    ){}
}