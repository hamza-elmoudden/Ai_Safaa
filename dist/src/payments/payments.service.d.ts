import { PrismaService } from 'src/prisma/prisma.service';
import { Payment } from './Schema/payments.schema';
import { payment_method, payment_status } from 'generated/prisma/browser';
export declare class PaymentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    mapToPayment(data: any): Payment;
    createPayment(data: Payment): Promise<{
        id: string;
        user_id: string;
        subscription_id: string | null;
        amount_mad: import("@prisma/client-runtime-utils").Decimal;
        method: payment_method;
        status: payment_status;
        provider_ref: string | null;
        provider_meta: import("@prisma/client/runtime/client").JsonValue | null;
        starts_at: Date | null;
        expires_at: Date | null;
    }>;
    findPaymentById(id: string): Promise<Payment | null>;
    findPaymentsByUserId(user_id: string): Promise<Payment[]>;
    getActivePayment(user_id: string): Promise<Payment | null>;
    getCurrentPeriod(startsAt: Date): {
        periodStart: Date;
        periodEnd: Date;
    };
    getFreePeriod(): {
        periodStart: Date;
        periodEnd: Date;
    };
    deletePayment(id: string): Promise<void>;
    createFree(user_id: string, subscription_id: string): Promise<void>;
    getPlaneName(user_id: string): Promise<String | null>;
}
