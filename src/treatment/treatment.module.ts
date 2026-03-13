import { Module } from '@nestjs/common';
import { TreatmentService } from './treatment.service';
import { TreatmentController } from './treatment.controller';
import { SubscriptionsModule } from 'src/subscriptions/subscriptions.module';
import { PaymentsModule } from 'src/payments/payments.module';
import { UsersModule } from 'src/users/users.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [TreatmentService],
  controllers: [TreatmentController],
  imports: [
    SubscriptionsModule,
    TreatmentModule,
    PaymentsModule,
    UsersModule,
    PrismaModule
  ]
})
export class TreatmentModule {}
