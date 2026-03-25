import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Subscription } from './Schema/subscriptions.schema';

@Injectable()
export class SubscriptionsService {
    constructor(
        private readonly prisma: PrismaService,
    ) {}

    mapToSubscription(data:any){
        return new Subscription(
            data.id,
            data.name,
            data.price_number,
            data.analyses_limit,
            data.treatment_plans,
            data.product_checks,
            data.progress_tracking,
            data.vip_consultation,
            data.features,
            data.is_active,
            data.created_at
        )
    }

    async FindAll():Promise<Subscription[] | []>  {
        const data = await this.prisma.subscriptions.findMany();
        return data.map((item) => this.mapToSubscription(item));
    }

    async FindOne(id: string):Promise<Subscription | null>  {
        const data = await this.prisma.subscriptions.findUnique({
            where: { id },
        });
        return data ? this.mapToSubscription(data) : null;
    }


    
}
