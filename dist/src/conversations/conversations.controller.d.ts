import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { RedisService } from 'src/redis/redis.service';
export declare class ConversationsController {
    private readonly commandBus;
    private readonly queryBus;
    private readonly redisService;
    constructor(commandBus: CommandBus, queryBus: QueryBus, redisService: RedisService);
    GetConversations(req: any, limit: number, page: number): Promise<any>;
}
