import { Module } from '@nestjs/common';
import { SkinprofilesService } from './skinprofiles.service';
import { SkinprofilesController } from './skinprofiles.controller';

@Module({
  providers: [SkinprofilesService],
  controllers: [SkinprofilesController]
})
export class SkinprofilesModule {}
