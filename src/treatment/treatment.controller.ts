import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/decorators';
import { GetAllTreatmentByUserIdQuery } from './Query/impl/get-all-treatmentuser.impl';
import { GetTreatmentByIdQuery } from './Query/impl/get-treatmentbyid.impl';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
import { DeleteTreatmentQuery } from './Query/impl/delete-treatment.impl';
import { CreateTreatmentCommand } from './Command/impl/create-treatment.command';

@Controller('treatment')
export class TreatmentController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) { }



    @Post()
    @UseGuards(AuthGuard('jwt'))
    @Roles('user')
    async CreateTreatment(
        @Body() data: CreateTreatmentDto,
        @Req() req: any
    ) {
        const user = req.user
        return await this.commandBus.execute(
            new CreateTreatmentCommand(
                user.id,
                data.title || `${user.id} ${Date.now()}`,
                data.concern_type,
                data.status,
                data.areas_treated,
                '',
                ''
            )
        )
    }


    @Get('all')
    @UseGuards(AuthGuard('jwt'))
    @Roles('user')
    async GetAllTreatment(@Req() req: any) {
        const user = req.user
        return this.queryBus.execute(
            new GetAllTreatmentByUserIdQuery(user.id)
        )
    }

    @Get('my/:id')
    @UseGuards(AuthGuard('jwt'))
    @Roles('user')
    async GetMyTreatment(@Req() req: any, @Param('id') id: string) {
        const user = req.user
        return this.queryBus.execute(
            new GetTreatmentByIdQuery(user.id, id)
        )
    }

    @Delete(":id")
    @UseGuards(AuthGuard('jwt'))
    @Roles('user')
    async DeleteTreatment(
        @Req() req: any,
        @Param("id") id:string
    ) {
        const user = req.user

        return this.queryBus.execute(
            new DeleteTreatmentQuery(id,user.id)
        )
    }


}
