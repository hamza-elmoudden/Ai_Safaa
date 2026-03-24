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

@Module({


  imports: [
    ImageModule,
    TreatmentModule,
    TokenusageModule
  ],
  providers:
    [
      AiService,
      analyzefacehandler,
      generatetexthandler,
      ChatMemoryService,
      AiProductsService

    ],
  controllers: [AiController],

  exports: [AiService,generatetexthandler]
})
export class AiModule { }
