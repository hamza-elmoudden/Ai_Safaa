import { Module } from '@nestjs/common';
import { SkinprofilesService } from './skinprofiles.service';
import { SkinprofilesController } from './skinprofiles.controller';
import { CreateProfileHandler } from './Command/handler/create.profile.handler';
import { UsersModule } from 'src/users/users.module';
import { UpdateProfileHandler } from './Command/handler/update.profile.handler';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GetSkinProfileHandler } from './Query/handler/gitskin.profile.handler';



@Module({
  imports: [UsersModule,PrismaModule],
  providers: [
    SkinprofilesService,
    CreateProfileHandler,
    UpdateProfileHandler,
    GetSkinProfileHandler
  ],
  controllers: [SkinprofilesController],
  exports:[SkinprofilesService]
})
export class SkinprofilesModule {}
