import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/decorators';
import { GetAllTreatmentByUserIdQuery } from './Query/impl/get-all-treatmentuser.impl';
import { GetTreatmentByIdQuery } from './Query/impl/get-treatmentbyid.impl';

@Controller('treatment')
export class TreatmentController {
    constructor(
        private readonly commandBus:CommandBus,
        private readonly queryBus:QueryBus
    ){}



    @Get('all')
    @UseGuards(AuthGuard('jwt'))
    @Roles('user')
    async GetAllTreatment(@Req() req:any){
        const user = req.user
        return this.queryBus.execute(
            new GetAllTreatmentByUserIdQuery(user.id)
        )
    }

    @Get('my/:id')
    @UseGuards(AuthGuard('jwt'))
    @Roles('user')
    async GetMyTreatment(@Req() req:any,@Param('id') id:string){
        const user = req.user 
        return this.queryBus.execute(
            new GetTreatmentByIdQuery(user.id,id)
        )
    }


}
