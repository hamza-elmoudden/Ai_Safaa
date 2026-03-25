import { Module } from '@nestjs/common';
import { TokenusageService } from './tokenusage.service';
import { TokenusageController } from './tokenusage.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PaymentsModule } from 'src/payments/payments.module';

@Module({
  providers: [TokenusageService],
  controllers: [TokenusageController],
  exports:[TokenusageService],
  imports:[
    PaymentsModule,
    PrismaModule
  ]
})
export class TokenusageModule {}
