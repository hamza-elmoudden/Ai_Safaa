import { Controller, Get, Param, Query, Req, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetChatTreatmentQuery } from './Query/impl/get-chat_treatment.query';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/decorators';

@Controller('chattreatment')
export class ChattreatmentController {
    constructor(
        private readonly queryBus:QueryBus
    ){}


    @Get(":id")
    @UseGuards(AuthGuard('jwt'))
    @Roles('user')
    async GetChat(@Req() req:any,@Query('limit') limit:number,@Query('page') page:number,@Param('id')id:string){

        const user = req.user

        const chats = await this.queryBus.execute(
            new GetChatTreatmentQuery(
                user.id,id,page,limit
            )
        )
        return chats
    }
}
