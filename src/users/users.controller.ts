import { Body, Controller, Put, Req, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport'
import { Roles } from 'src/auth/decorators/decorators';
import { UpdateUserCommand } from './Command/impl/updateuser.command';

@Controller('users')
export class UsersController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) { }



    @Put()
    @UseGuards(AuthGuard('jwt'))
    @Roles('user')
    async updateUser(@Body() updateUserDto: UpdateUserDto, @Req() req: any) {
        const user = req.user

        return await this.commandBus.execute(new UpdateUserCommand(
            user.id,
            updateUserDto.full_name,
            updateUserDto.phone,
            updateUserDto.country_code,
            updateUserDto.city,
            updateUserDto.date_of_birth,
        ));
    }
}


