import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [PaymentsService],
  controllers: [PaymentsController],
  imports:[PrismaModule],
  exports:[PaymentsService]
})
export class PaymentsModule {}
