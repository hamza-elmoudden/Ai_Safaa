import { Module } from '@nestjs/common';
import { ChattreatmentService } from './chattreatment.service';
import { ChattreatmentController } from './chattreatment.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TreatmentModule } from 'src/treatment/treatment.module';
import { GetChatTreatmentHandler } from './Query/handler/get-chat_treatment.handler';

@Module({
  providers: [
    ChattreatmentService,
    GetChatTreatmentHandler
  ],
  controllers: [ChattreatmentController],
  imports:[PrismaModule,TreatmentModule],
  exports:[
    ChattreatmentService
  ]
})
export class ChattreatmentModule {}
