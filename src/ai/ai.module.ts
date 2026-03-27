import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiController } from './ai.controller';
import { analyzefacehandler } from './Command/handler/analyzeface.handler';
import { generatetexthandler } from './Command/handler/generatechat.handler';
import { ImageModule } from 'src/image/image.module';
import { ChatMemoryService } from './chat-memory.service';
import { AiProductsService } from './ai.products.service';
import { TreatmentModule } from 'src/treatment/treatment.module';
import { TokenusageModule } from 'src/tokenusage/tokenusage.module';
import { ConversationsModule } from 'src/conversations/conversations.module';
import { ChattreatmentModule } from 'src/chattreatment/chattreatment.module';
import { SkinprofilesModule } from 'src/skinprofiles/skinprofiles.module';
import { TreatmentAiHandler } from './Command/handler/treatmentai.handler';
import { PaymentsModule } from 'src/payments/payments.module';
import { UsersModule } from 'src/users/users.module';

@Module({


  imports: [
    ImageModule,
    TreatmentModule,
    TokenusageModule,
    ConversationsModule,
    ChattreatmentModule,
    SkinprofilesModule,
    PaymentsModule,
    UsersModule
  ],
  providers:
    [
      AiService,
      analyzefacehandler,
      generatetexthandler,
      ChatMemoryService,
      TreatmentAiHandler,
      AiProductsService,
      

    ],
  controllers: [AiController],

  exports: [AiService,generatetexthandler]
})
export class AiModule { }
