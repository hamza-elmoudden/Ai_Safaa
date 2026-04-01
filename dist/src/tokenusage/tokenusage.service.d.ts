import { PaymentsService } from 'src/payments/payments.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { token_source } from './Schema/tokenusage.schema';
import { SubscriptionsService } from 'src/subscriptions/subscriptions.service';
export declare class TokenusageService {
    private readonly prismaService;
    private readonly paymentsService;
    private readonly subscriptionsService;
    constructor(prismaService: PrismaService, paymentsService: PaymentsService, subscriptionsService: SubscriptionsService);
    getUserPhotoUsage(userId: string): Promise<{
        used: number;
        limit: number;
    }>;
    checkPhotoLimit(userId: string): Promise<void>;
    checkTreatmentPhotoLimit(userId: string, planId: string): Promise<void>;
    addTokenUsage(data: {
        user_id: string;
        source: token_source;
        ref_id?: string;
        plan_id?: string;
        tokens_input: number;
        tokens_output: number;
        ai_model?: string;
    }): Promise<{
        id: string;
        plan_id: string | null;
        created_at: Date | null;
        user_id: string;
        ai_model: string | null;
        source: import("../../generated/prisma/enums").token_source;
        ref_id: string | null;
        tokens_input: number | null;
        tokens_output: number | null;
        tokens_total: number | null;
        cost_usd: import("@prisma/client-runtime-utils").Decimal | null;
    }>;
    countTreatmentPhotos(userId: string, planId: string): Promise<{
        used: number;
        limit: number;
    }>;
}
