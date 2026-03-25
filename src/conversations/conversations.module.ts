import { Module } from '@nestjs/common';
import { ConversationsService } from './conversations.service';
import { ConversationsController } from './conversations.controller';
import { GetConversationsHandler } from './Query/handler/get-conversation.handler';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [
    ConversationsService,
    GetConversationsHandler,
  ],
  controllers: [ConversationsController],
  exports:[ConversationsService],
  imports:[
    PrismaModule
  ]
})
export class ConversationsModule {}
