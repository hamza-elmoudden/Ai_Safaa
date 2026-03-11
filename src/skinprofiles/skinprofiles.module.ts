import { Module } from '@nestjs/common';
import { SkinprofilesService } from './skinprofiles.service';
import { SkinprofilesController } from './skinprofiles.controller';
import { CreateProfileHandler } from './Command/handler/create.profile.handler';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  providers: [
    SkinprofilesService,
    CreateProfileHandler,

  ],
  controllers: [SkinprofilesController],
  exports:[SkinprofilesService]
})
export class SkinprofilesModule {}
