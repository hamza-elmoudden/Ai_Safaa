import { IQueryHandler } from "@nestjs/cqrs";
import { GetConversationsQuery } from "../impl/get-conversations.impl";
import { ConversationsService } from "src/conversations/conversations.service";
export declare class GetConversationsHandler implements IQueryHandler<GetConversationsQuery> {
    private readonly conversationService;
    constructor(conversationService: ConversationsService);
    execute(query: GetConversationsQuery): Promise<any>;
}
