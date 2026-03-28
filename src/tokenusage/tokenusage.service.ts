import { BadRequestException, Injectable } from '@nestjs/common';
import { PaymentsService } from 'src/payments/payments.service';
import { Payment } from 'src/payments/Schema/payments.schema';
import { PrismaService } from 'src/prisma/prisma.service';
import { token_source } from './Schema/tokenusage.schema';
import { SubscriptionsService } from 'src/subscriptions/subscriptions.service';

@Injectable()
export class TokenusageService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly paymentsService: PaymentsService,
        private readonly subscriptionsService:SubscriptionsService
    ) { } 

    async getUserPhotoUsage(userId: string) {
        const payment = await this.paymentsService.getActivePayment(userId);

        const { periodStart, periodEnd } = payment && payment.starts_at
            ? this.paymentsService.getCurrentPeriod(payment.starts_at)
            : this.paymentsService.getFreePeriod();

        if(!payment){
            throw new BadRequestException("You Dent Have Any Payment")
        }

        const subscription = await this.subscriptionsService.FindOne(payment.subscription_id);

        if(!subscription){
            throw new BadRequestException("No Subscriptions found")
        }
        
        
        const used = await this.prismaService.token_usage.count({
            where: {
                user_id: userId,
                source: 'conversation_photo',
                created_at: { gte: periodStart, lt: periodEnd },
            },
        });

        const limit = subscription.limit_photo_check

        return {
            used,
            limit,
        };
    }

 

    async checkPhotoLimit(userId: string): Promise<void> {
        const { used, limit } = await this.getUserPhotoUsage(userId);

        if (limit !== -1 && used >= limit) {
            throw new BadRequestException({
                code: 'PHOTO_LIMIT_EXCEEDED',
                message: `You have reached your monthly photo limit (${used}/${limit})`,
                used,
                limit,
            });
        }
    }



    async checkTreatmentPhotoLimit(userId: string,planId:string): Promise<void> {
        const { used, limit } = await this.countTreatmentPhotos(userId,planId);

        if (limit !== -1 && used >= limit) {
            throw new BadRequestException({
                code: 'PHOTO_LIMIT_EXCEEDED',
                message: `You have reached your monthly photo limit (${used}/${limit})`,
                used,
                limit,
            });
        }
    }

    async addTokenUsage(data: {
        user_id: string;
        source: token_source;
        ref_id?: string;
        plan_id?: string;
        tokens_input: number;
        tokens_output: number;
        ai_model?: string;
    }) {
        const tokens_total = data.tokens_input + data.tokens_output;

        const costPerToken: Record<string, number> = {
            'gpt-4o': 0.000005,
            'gpt-4o-mini': 0.000001,
            'gpt-4-vision-preview': 0.000005,
        };

        const cost_usd = tokens_total * (costPerToken[data.ai_model ?? ''] ?? 0.000005);

        return await this.prismaService.token_usage.create({
            data: {
                user_id: data.user_id,
                source: data.source,
                ref_id: data.ref_id ?? null,
                tokens_input: data.tokens_input,
                tokens_output: data.tokens_output,
                plan_id: data.plan_id ?? null,
                tokens_total,
                ai_model: data.ai_model ?? null,
                cost_usd,
            },
        });
    }




    // async countTreatmentPhotosByPlan(user_id: string, plan_id: string) {
    //     const count = await this.prismaService.token_usage.count({
    //         where: {
    //             user_id,
    //             plan_id,
    //             source: 'treatment_photo'
    //             ,
    //         },
    //     });

    //     return {
    //         plan_id,
    //         total_photos: count,
    //     };
    // }

    async countTreatmentPhotos(userId: string,planId:string) {
      const payment = await this.paymentsService.getActivePayment(userId);

        const { periodStart, periodEnd } = payment && payment.starts_at
            ? this.paymentsService.getCurrentPeriod(payment.starts_at)
            : this.paymentsService.getFreePeriod();

        if(!payment){
            throw new BadRequestException("You Dent Have Any Payment")
        }

        const subscription = await this.subscriptionsService.FindOne(payment.subscription_id);

        if(!subscription){
            throw new BadRequestException("No Subscriptions found")
        }
        

        const used = await this.prismaService.token_usage.count({
            where: {
                user_id:userId,
                plan_id:planId,
                source: 'treatment_photo',
                created_at: { gte: periodStart, lt: periodEnd },
            },
        });
        const limit = subscription.limit_photo_treatment

        return {
            used,
            limit,
        };
    };
}



