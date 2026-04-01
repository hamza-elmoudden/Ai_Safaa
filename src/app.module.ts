import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CqrsModule } from '@nestjs/cqrs';
import { AiModule } from './ai/ai.module';
import { ImageModule } from './image/image.module';
import { ConfigModule } from '@nestjs/config';
import {  ThrottlerModule } from '@nestjs/throttler';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SkinprofilesModule } from './skinprofiles/skinprofiles.module';
import { TreatmentModule } from './treatment/treatment.module';
import { PaymentsModule } from './payments/payments.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { ConversationsModule } from './conversations/conversations.module';
import { ChattreatmentModule } from './chattreatment/chattreatment.module';
import { TokenusageModule } from './tokenusage/tokenusage.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/guards/roles.guard';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    CqrsModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AiModule,
    ImageModule,
    PrismaModule,
     ThrottlerModule.forRoot([
      {
        name: 'default',
        ttl: 2 * 60 * 60 * 1000,  // 2 h
        limit: 20,   // 10 requests
        
      },
    ]),
     UsersModule,
     AuthModule,
     SkinprofilesModule,
     TreatmentModule,
     PaymentsModule,
     SubscriptionsModule,
     ConversationsModule,
     ChattreatmentModule,
     TokenusageModule,
     RedisModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // { provide: APP_GUARD, useClass: RolesGuard }
  ],
})
export class AppModule {}
