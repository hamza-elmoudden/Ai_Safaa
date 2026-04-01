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
exports.TokenusageService = void 0;
const common_1 = require("@nestjs/common");
const payments_service_1 = require("../payments/payments.service");
const prisma_service_1 = require("../prisma/prisma.service");
const subscriptions_service_1 = require("../subscriptions/subscriptions.service");
let TokenusageService = class TokenusageService {
    prismaService;
    paymentsService;
    subscriptionsService;
    constructor(prismaService, paymentsService, subscriptionsService) {
        this.prismaService = prismaService;
        this.paymentsService = paymentsService;
        this.subscriptionsService = subscriptionsService;
    }
    async getUserPhotoUsage(userId) {
        const payment = await this.paymentsService.getActivePayment(userId);
        const { periodStart, periodEnd } = payment && payment.starts_at
            ? this.paymentsService.getCurrentPeriod(payment.starts_at)
            : this.paymentsService.getFreePeriod();
        if (!payment) {
            throw new common_1.BadRequestException("You Dent Have Any Payment");
        }
        const subscription = await this.subscriptionsService.FindOne(payment.subscription_id);
        if (!subscription) {
            throw new common_1.BadRequestException("No Subscriptions found");
        }
        const used = await this.prismaService.token_usage.count({
            where: {
                user_id: userId,
                source: 'conversation_photo',
                created_at: { gte: periodStart, lt: periodEnd },
            },
        });
        const limit = subscription.limit_photo_check;
        return {
            used,
            limit,
        };
    }
    async checkPhotoLimit(userId) {
        const { used, limit } = await this.getUserPhotoUsage(userId);
        if (limit !== -1 && used >= limit) {
            throw new common_1.BadRequestException({
                code: 'PHOTO_LIMIT_EXCEEDED',
                message: `You have reached your monthly photo limit (${used}/${limit})`,
                used,
                limit,
            });
        }
    }
    async checkTreatmentPhotoLimit(userId, planId) {
        const { used, limit } = await this.countTreatmentPhotos(userId, planId);
        if (limit !== -1 && used >= limit) {
            throw new common_1.BadRequestException({
                code: 'PHOTO_LIMIT_EXCEEDED',
                message: `You have reached your monthly photo limit (${used}/${limit})`,
                used,
                limit,
            });
        }
    }
    async addTokenUsage(data) {
        const tokens_total = data.tokens_input + data.tokens_output;
        const costPerToken = {
            'gpt-4o': 0.000005,
            'gpt-4o-mini': 0.000001,
            'gpt-4-vision-preview': 0.000005,
        };
        const cost_usd = tokens_total * (costPerToken[data.ai_model ?? ''] ?? 0.000005);
        return await this.prismaService.token_usage.create({
            data: {
                user_id: data.user_id,
                source: data.source,
                ref_id: data.ref_id ?? null,
                tokens_input: data.tokens_input,
                tokens_output: data.tokens_output,
                plan_id: data.plan_id ?? null,
                tokens_total,
                ai_model: data.ai_model ?? null,
                cost_usd,
            },
        });
    }
    async countTreatmentPhotos(userId, planId) {
        const payment = await this.paymentsService.getActivePayment(userId);
        const { periodStart, periodEnd } = payment && payment.starts_at
            ? this.paymentsService.getCurrentPeriod(payment.starts_at)
            : this.paymentsService.getFreePeriod();
        if (!payment) {
            throw new common_1.BadRequestException("You Dent Have Any Payment");
        }
        const subscription = await this.subscriptionsService.FindOne(payment.subscription_id);
        if (!subscription) {
            throw new common_1.BadRequestException("No Subscriptions found");
        }
        const used = await this.prismaService.token_usage.count({
            where: {
                user_id: userId,
                plan_id: planId,
                source: 'treatment_photo',
                created_at: { gte: periodStart, lt: periodEnd },
            },
        });
        const limit = subscription.limit_photo_treatment;
        return {
            used,
            limit,
        };
    }
    ;
};
exports.TokenusageService = TokenusageService;
exports.TokenusageService = TokenusageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        payments_service_1.PaymentsService,
        subscriptions_service_1.SubscriptionsService])
], TokenusageService);
//# sourceMappingURL=tokenusage.service.js.map