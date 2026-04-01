import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/decorators';
import { GetConversationsQuery } from './Query/impl/get-conversations.impl';
import { RedisService } from 'src/redis/redis.service';

@Controller('conversations')
export class ConversationsController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
        private readonly redisService: RedisService
    ) { }



    @Get()
    @UseGuards(AuthGuard('jwt'))
    @Roles('user')
    async GetConversations(
        @Req() req: any, @Query('limit') limit: number, @Query('page') page: number
    ) {

        const user = req.user

        return await this.queryBus.execute(
            new GetConversationsQuery(
                user.id, page, limit
            ))

    }
}
