import { PaymentsService } from './payments.service';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    getMyStatus(req: any): Promise<{
        hasActivePlan: boolean;
        expiresAt: Date | null;
        subscriptionId: string | null;
    }>;
}
