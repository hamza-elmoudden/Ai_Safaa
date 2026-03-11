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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
