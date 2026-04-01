import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Subscription } from './Schema/subscriptions.schema';
import { plan_name } from 'generated/prisma/enums';

@Injectable()
export class SubscriptionsService {
    getSubscriptions() {
        throw new Error('Method not implemented.');
    }
    constructor(
        private readonly prisma: PrismaService,
    ) { }

    mapToSubscription(data: any) {
        return new Subscription(
            data.id,
            data.name,
            data.price_mad,
            data.limit_photo_treatment,
            data.treatment_plans,
            data.limit_photo_check,
            data.progress_tracking,
            data.vip_consultation,
            data.features,
            data.is_active,
            data.created_at
        )
    }

    async FindAll(): Promise<Subscription[] | []> {
        const data = await this.prisma.subscriptions.findMany();
        return data.map((item) => this.mapToSubscription(item));
    }

    async FindOne(id: string): Promise<Subscription | null> {
        const data = await this.prisma.subscriptions.findUnique({
            where: { id },
        });

        return data ? this.mapToSubscription(data) : null;
    }


    async FindName(name: plan_name): Promise<string> {
        const subscription = await this.prisma.subscriptions.findUnique({
            where: { name },
            select: { id: true },
        });

        if (!subscription) {
            throw new Error(`Subscription '${name}' not found`);
        }

        return subscription.id;
    }



}
