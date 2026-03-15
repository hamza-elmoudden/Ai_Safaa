import { Module } from '@nestjs/common';
import { ChattreatmentService } from './chattreatment.service';
import { ChattreatmentController } from './chattreatment.controller';

@Module({
  providers: [ChattreatmentService],
  controllers: [ChattreatmentController]
})
export class ChattreatmentModule {}
