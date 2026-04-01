import { SubscriptionsService } from './subscriptions.service';
export declare class SubscriptionsController {
    private readonly subscriptionsService;
    constructor(subscriptionsService: SubscriptionsService);
    getSubscriptions(): Promise<[] | import("./Schema/subscriptions.schema").Subscription[]>;
}
