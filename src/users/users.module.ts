import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FindByIdQuery } from './Query/impl/findbyid.query';
import { CompleteLoginHandler } from './Command/handler/complete-login.handler';
import { UpdateUserHandler } from './Command/handler/updateuser.handler';
import { FindByIdHandler } from './Query/handler/findbyid.handler';

@Module({
  providers: [
    UsersService,
    // Query
    FindByIdHandler,
    CompleteLoginHandler,
    UpdateUserHandler,
  ] 
    ,
  controllers: [UsersController],
  imports:[PrismaModule],
  exports:[UsersService]
})
export class UsersModule {}
