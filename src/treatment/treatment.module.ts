import { Module } from '@nestjs/common';
import { TreatmentService } from './treatment.service';
import { TreatmentController } from './treatment.controller';

@Module({
  providers: [TreatmentService],
  controllers: [TreatmentController]
})
export class TreatmentModule {}
