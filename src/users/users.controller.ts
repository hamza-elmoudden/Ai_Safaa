import { Body, Controller, Get, Patch, Put, Req, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport'
import { Roles, UserRole } from 'src/auth/decorators/decorators';
import { UpdateUserCommand } from './Command/impl/updateuser.command';
import { CompleteLoginCommand } from './Command/impl/complete-login.command';
import { FindByIdQuery } from './Query/impl/findbyid.query';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('users')
export class UsersController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) { }



    @Patch()
    @UseGuards(AuthGuard('jwt'))
    @Roles('user')
    async updateUser(@Body() updateUserDto: UpdateUserDto, @Req() req: any) {
        const user = req.user

        console.log("controller",user.role)


        const data = await this.commandBus.execute(new UpdateUserCommand(
            user.id,
            updateUserDto.full_name,
            updateUserDto.phone,
            updateUserDto.country_code,
            updateUserDto.city,
            updateUserDto.date_of_birth,
        ));

        console.log('Updated User Data:', data);
        return {
            message: 'User updated successfully',
            data: {
                name: data.full_name,
                phone: data.phone,
                country_code: data.country_code,
                city: data.city,
                date_of_birth: data.date_of_birth
            }
        }
    }


    @Put('complete')
    @UseGuards(AuthGuard('jwt'))
    @Roles('user')
    async completeProfile(@Body() updateUserDto: UpdateUserDto, @Req() req: any) {
        const user = req.user

        const data = await this.commandBus.execute(new CompleteLoginCommand(
            user.id,
            updateUserDto.full_name,
            updateUserDto.phone,
            updateUserDto.country_code,
            updateUserDto.city,
            updateUserDto.date_of_birth,
        ));

        return {
            message: 'Profile completed successfully',
            data: {
                name: data.full_name,
                phone: data.phone,
                country_code: data.country_code,
                city: data.city,
                date_of_birth: data.date_of_birth
            }
        }
    }
 
    @Get("me")
    @UseGuards(AuthGuard('jwt'),RolesGuard)
    @Roles(UserRole.USER)
    async me(@Req() req: any) {

        const user = req.user

        const result = await this.queryBus.execute(new FindByIdQuery(user.id))

        return {
            message: 'User retrieved successfully',
            data: {
                full_name: result.full_name,
                phone: result.phone,
                email: result.email,
                country_code: result.country_code,
                city: result.city,
                date_of_birth: result.date_of_birth
            }
        }
    }
}


