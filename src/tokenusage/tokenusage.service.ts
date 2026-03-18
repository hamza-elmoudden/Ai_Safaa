import { Injectable } from '@nestjs/common';
import { PaymentsService } from 'src/payments/payments.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TokenusageService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly paymentsService:PaymentsService
    ) { }

    async getUserPhotoUsage(userId: string) {
        const payment = await this.paymentsService.getActivePayment(userId);

        const { periodStart, periodEnd } = payment && payment.starts_at
            ? this.paymentsService.getCurrentPeriod(payment.starts_at)
            : this.paymentsService.getFreePeriod();

        const limit = payment?.subscriptions?.photos_per_month ?? 3;

        const used = await this.prismaService.token_usage.count({
            where: {
                user_id: userId,
                source: 'conversation_photo',
                created_at: { gte: periodStart, lt: periodEnd },
            },
        });

        return {
            used,
            limit,
            remaining: limit === -1 ? -1 : limit - used,
            resets_at: periodEnd,
            percentage: limit === -1 ? 0 : Math.round((used / limit) * 100),
        };
    }
}
