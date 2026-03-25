import { Module } from '@nestjs/common';
import { TreatmentService } from './treatment.service';
import { TreatmentController } from './treatment.controller';
import { SubscriptionsModule } from 'src/subscriptions/subscriptions.module';
import { PaymentsModule } from 'src/payments/payments.module';
import { UsersModule } from 'src/users/users.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreateTreatmentHandler } from './Command/handler/create-treatment.handler';
import { DeleteTreatmentHandler } from './Query/handler/delete-treatment.handler';
import { GetAllTreatmentByUserId } from './Query/handler/get-all-treatmentuser.handler';
import { GetTreatmentByIdHandler } from './Query/handler/get-treatmentbyid.handler';

@Module({
  providers: [
    TreatmentService,
    CreateTreatmentHandler,
    DeleteTreatmentHandler,
    GetAllTreatmentByUserId,
    GetTreatmentByIdHandler
  ],
  controllers: [TreatmentController],
  imports: [
    SubscriptionsModule,
    PaymentsModule,
    UsersModule,
    PrismaModule
  ],
  exports:[TreatmentService]
})
export class TreatmentModule {}
