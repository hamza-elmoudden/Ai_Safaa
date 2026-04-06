"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const payments_schema_1 = require("./Schema/payments.schema");
const browser_1 = require("../../generated/prisma/browser");
let PaymentsService = class PaymentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    mapToPayment(data) {
        return new payments_schema_1.Payment(data.id, data.user_id, data.amount_mad, data.method, data.status, data.created_at, data.starts_at, data.subscription_id, data.provider_ref, data.provider_meta, data.expires_at);
    }
    async createPayment(data) {
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
    async findPaymentById(id) {
        const payment = await this.prisma.payments.findUnique({
            where: { id },
            include: { subscriptions: true },
        });
        return payment ? this.mapToPayment(payment) : null;
    }
    async findPaymentsByUserId(user_id) {
        const payments = await this.prisma.payments.findMany({
            where: {
                user_id,
                status: 'active',
            },
            orderBy: { starts_at: 'desc' },
        });
        return payments.map((p) => this.mapToPayment(p));
    }
    async getActivePayment(user_id) {
        const now = new Date();
        const [paymentRow] = await this.prisma.$queryRaw `
                  SELECT *
                  FROM payments
                  WHERE user_id = ${user_id}
                    AND status = 'active'
                    AND starts_at <= NOW()
                    AND expires_at > NOW()
                  ORDER BY expires_at DESC
                  LIMIT 1;
`;
        if (!paymentRow)
            return null;
        const payment = this.mapToPayment(paymentRow);
        return payment;
    }
    getCurrentPeriod(startsAt) {
        const now = new Date();
        const start = new Date(startsAt);
        const monthsElapsed = (now.getFullYear() - start.getFullYear()) * 12 +
            (now.getMonth() - start.getMonth());
        const periodStart = new Date(start);
        periodStart.setMonth(periodStart.getMonth() + monthsElapsed);
        if (periodStart > now) {
            periodStart.setMonth(periodStart.getMonth() - 1);
        }
        const periodEnd = new Date(periodStart);
        periodEnd.setMonth(periodEnd.getMonth() + 1);
        return { periodStart, periodEnd };
    }
    getFreePeriod() {
        const now = new Date();
        const periodStart = new Date(now.getFullYear(), now.getMonth(), 1);
        const periodEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1);
        return { periodStart, periodEnd };
    }
    async deletePayment(id) {
        await this.prisma.payments.delete({ where: { id } });
    }
    async createFree(user_id, subscription_id) {
        const now = new Date();
        const expires = new Date();
        expires.setMonth(expires.getMonth() + 1);
        const result = await this.prisma.payments.create({
            data: {
                user_id,
                subscription_id,
                amount_mad: 0,
                method: browser_1.payment_method.credit_card,
                status: browser_1.payment_status.active,
                starts_at: now,
                expires_at: expires
            }
        });
    }
    async getPlaneName(user_id) {
        const active = await this.getActivePayment(user_id);
        if (!active) {
            return null;
        }
        const sub = await this.prisma.subscriptions.findUnique({
            where: {
                id: active.id
            }
        });
        return sub ? sub.name : null;
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map