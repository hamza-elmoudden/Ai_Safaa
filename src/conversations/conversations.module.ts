import { Module } from '@nestjs/common';
import { ConversationsService } from './conversations.service';
import { ConversationsController } from './conversations.controller';
import { GetConversationsHandler } from './Query/handler/get-conversation.handler';

@Module({
  providers: [
    ConversationsService,
    GetConversationsHandler,
  ],
  controllers: [ConversationsController],
  exports:[ConversationsService]
})
export class ConversationsModule {}
