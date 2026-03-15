import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetConversationsQuery } from "../impl/get-conversations.impl";
import { ConversationsService } from "src/conversations/conversations.service";



@QueryHandler(GetConversationsQuery)
export class GetConversationsHandler implements IQueryHandler<GetConversationsQuery>{

    constructor(
        private readonly conversationService:ConversationsService,
    ){}

    async execute(query: GetConversationsQuery): Promise<any> {
        let conversation

        try {
            conversation = await this.conversationService.getUserConversation(query.user_id,query.limit,query.page)
            

        } catch (error) {
            throw new Error("Error In Get Conversation")
        }
        
        return conversation
    }
}