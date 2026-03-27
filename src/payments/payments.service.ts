import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Payment } from './Schema/payments.schema';

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService) { }

  mapToPayment(data: any): Payment {
    return new Payment(
      data.id,
      data.user_id,
      data.amount_mad,
      data.method,
      data.status,
      data.created_at,
      data.starts_at,
      data.provider_ref,
      data.provider_meta,
      data.subscription_id,
      data.expires_at,
    );
  }

  async createPayment(data: Payment) {
    return await this.prisma.payments.create({
      data: {
        user_id: data.user_id,
        amount_mad: data.amount_mad,
        method: data.method,
        status: data.status,
        provider_ref: data.provider_ref,
        provider_meta: data.provider_meta,
        subscription_id: data.subscription_id,
        starts_at: data.starts_at,
        expires_at: data.expires_at,
      },
    });
  }

  async findPaymentById(id: string): Promise<Payment | null> {
    const payment = await this.prisma.payments.findUnique({
      where: { id },
      include: { subscriptions: true },
    });
    return payment ? this.mapToPayment(payment) : null;
  }

  async findPaymentsByUserId(user_id: string): Promise<Payment[]> {
    const payments = await this.prisma.payments.findMany({
      where: {
        user_id,
        status: 'active',
      },
      orderBy: { starts_at: 'desc' },
    });
    return payments.map((p) => this.mapToPayment(p));
  }

  async getActivePayment(user_id: string):Promise<Payment| null> {
     const payments = await this.prisma.payments.findFirst({
      where: {
        user_id,
        status: 'active',
        starts_at: { lte: new Date() },
        expires_at: { gt: new Date() },
      },
      include: { subscriptions: true},
      orderBy: { expires_at: 'desc' },
    });

    return payments ? this.mapToPayment(payments) : null
  }

  
  getCurrentPeriod(startsAt: Date): { periodStart: Date; periodEnd: Date } {
    const now = new Date();
    const start = new Date(startsAt);

    // حساب الأشهر المنقضية بدقة
    const monthsElapsed =
      (now.getFullYear() - start.getFullYear()) * 12 +
      (now.getMonth() - start.getMonth());

    const periodStart = new Date(start);
    periodStart.setMonth(periodStart.getMonth() + monthsElapsed);

    // إذا تجاوزنا يوم اليوم، ارجع شهراً للوراء
    if (periodStart > now) {
      periodStart.setMonth(periodStart.getMonth() - 1);
    }

    const periodEnd = new Date(periodStart);
    periodEnd.setMonth(periodEnd.getMonth() + 1);

    return { periodStart, periodEnd };
  }

  getFreePeriod(): { periodStart: Date; periodEnd: Date } {
    const now = new Date();
    const periodStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const periodEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    return { periodStart, periodEnd };
  }

  async deletePayment(id: string) {
    await this.prisma.payments.delete({ where: { id } });
  }
}