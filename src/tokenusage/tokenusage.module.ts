import { Module } from '@nestjs/common';
import { TokenusageService } from './tokenusage.service';
import { TokenusageController } from './tokenusage.controller';

@Module({
  providers: [TokenusageService],
  controllers: [TokenusageController],
  exports:[TokenusageService]
})
export class TokenusageModule {}
