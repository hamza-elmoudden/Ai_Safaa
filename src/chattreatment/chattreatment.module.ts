import { Module } from '@nestjs/common';
import { ChattreatmentService } from './chattreatment.service';
import { ChattreatmentController } from './chattreatment.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [ChattreatmentService],
  controllers: [ChattreatmentController],
  imports:[PrismaModule]
})
export class ChattreatmentModule {}
