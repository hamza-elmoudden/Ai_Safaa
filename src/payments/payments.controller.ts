import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { AuthGuard } from '@nestjs/passport';
import { aw } from '@upstash/redis/error-8y4qG0W2';

@Controller('payments')
export class PaymentsController {
    constructor(
        private readonly paymentsService: PaymentsService
    ) { }




    @Get('status')
    @UseGuards(AuthGuard('jwt'))
    async getMyStatus(@Req() req: any) {
        const payment = await this.paymentsService.getActivePayment(req.user.id);
        return {
            hasActivePlan: !!payment,
            expiresAt: payment?.expires_at ?? null,
            subscriptionId: payment?.subscription_id ?? null,
        };
    }



    @Get('name')
    @UseGuards(AuthGuard('jwt'))
    async getNameSub(@Req() req:any){
        return await this.paymentsService.getPlaneName(req.user.id)
    }
}
