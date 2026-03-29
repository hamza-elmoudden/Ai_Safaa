import { Controller, Get, Req, UseGuards,Post, Body, Put } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/decorators';
import { CreateSkinProfileDto } from './dto/create.skinprofile.dto';
import { CreateProfileCommand } from './Command/impl/create.profile.command';
import { UpdateProfileCommand } from './Command/impl/update.profile.command';
import { GetSkinProfileQuery } from './Query/impl/getskin.profile.query';

@Controller('skinprofiles')
export class SkinprofilesController {

    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}



    @Get()
    @UseGuards(AuthGuard('jwt'))
    @Roles('user')
    async getSkinProfiles(@Req()req:any) {
        const user = req.user
        return await this.queryBus.execute(new GetSkinProfileQuery(user.id));
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    @Roles('user')
    async createSkinProfile(@Body()data :CreateSkinProfileDto,@Req() req:any) {
        const user = req.user
        return await this.commandBus.execute(new CreateProfileCommand(user.id,data.skin_type,data.concerns,data.allergies,data.notes));
    }


    @Put()
    @UseGuards(AuthGuard('jwt'))
    @Roles('user')
    async updateSkinProfile(
        @Body()data:CreateSkinProfileDto,
        @Req() req:any
    ){
        const user = req.user
        return await this.commandBus.execute(new UpdateProfileCommand(user.id,data.skin_type,data.concerns,data.allergies,data.notes))
    }
}
