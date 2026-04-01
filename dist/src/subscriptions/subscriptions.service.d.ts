import { PrismaService } from 'src/prisma/prisma.service';
import { Subscription } from './Schema/subscriptions.schema';
import { plan_name } from 'generated/prisma/enums';
export declare class SubscriptionsService {
    private readonly prisma;
    getSubscriptions(): void;
    constructor(prisma: PrismaService);
    mapToSubscription(data: any): Subscription;
    FindAll(): Promise<Subscription[] | []>;
    FindOne(id: string): Promise<Subscription | null>;
    FindName(name: plan_name): Promise<string>;
}
