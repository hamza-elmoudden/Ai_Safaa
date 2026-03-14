import { Module } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionsController } from './subscriptions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreateSubscriptionHandler } from './Command/handler/create.subscription.handler';

@Module({
  providers: [
    SubscriptionsService,
    CreateSubscriptionHandler,
  ],
  controllers: [SubscriptionsController],
  imports: [PrismaModule],
  exports: [SubscriptionsService]
})
export class SubscriptionsModule {}
 