import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FindByIdQuery } from './Query/impl/findbyid.query';
import { CompleteLoginCommand } from './Command/impl/complete-login.command';
import { UpdateUserCommand } from './Command/impl/updateuser.command';

@Module({
  providers: [
    UsersService,
    // Query
    FindByIdQuery,
    CompleteLoginCommand,
    UpdateUserCommand,
  ] 
    ,
  controllers: [UsersController],
  imports:[PrismaModule],
  exports:[UsersService]
})
export class UsersModule {}
