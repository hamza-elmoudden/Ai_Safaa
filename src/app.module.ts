import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CqrsModule } from '@nestjs/cqrs';
import { AiModule } from './ai/ai.module';
import { ImageModule } from './image/image.module';
import { ConfigModule } from '@nestjs/config';
import {  ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    CqrsModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AiModule,
    ImageModule,
     ThrottlerModule.forRoot([
      {
        name: 'default',
        ttl: 2 * 60 * 60 * 1000,  // 2 h
        limit: 20,   // 10 requests
        
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
