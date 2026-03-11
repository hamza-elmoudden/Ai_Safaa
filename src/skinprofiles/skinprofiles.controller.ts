import { Controller, Get, Req, UseGuards,Post, Body } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetSkinProfileHandler } from './Query/handler/gitskin.profile.handler';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/decorators';
import { CreateSkinProfileDto } from './dto/create.skinprofile.dto';
import { CreateProfileCommand } from './Command/impl/create.profile.command';

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
        return this.queryBus.execute(new GetSkinProfileHandler(user.id));
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    @Roles('user')
    async createSkinProfile(@Body()data :CreateSkinProfileDto,@Req() req:any) {
        const user = req.user
        return this.commandBus.execute(new CreateProfileCommand(user.id,data.kin_type,data.concerns,data.allergies,data.notes));
    }
}
