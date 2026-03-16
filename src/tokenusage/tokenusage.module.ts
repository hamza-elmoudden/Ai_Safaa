import { Module } from '@nestjs/common';
import { TokenusageService } from './tokenusage.service';
import { TokenusageController } from './tokenusage.controller';

@Module({
  providers: [TokenusageService],
  controllers: [TokenusageController]
})
export class TokenusageModule {}
