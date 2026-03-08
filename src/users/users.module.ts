import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FindByIdQuery } from './Query/impl/findbyid.query';

@Module({
  providers: [
    UsersService,

    // Query
    FindByIdQuery,
  ]
    ,
  controllers: [UsersController],
  imports:[PrismaModule],
  exports:[UsersService]
})
export class UsersModule {}
