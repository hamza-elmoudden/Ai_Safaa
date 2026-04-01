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
exports.SubscriptionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const subscriptions_schema_1 = require("./Schema/subscriptions.schema");
let SubscriptionsService = class SubscriptionsService {
    prisma;
    getSubscriptions() {
        throw new Error('Method not implemented.');
    }
    constructor(prisma) {
        this.prisma = prisma;
    }
    mapToSubscription(data) {
        return new subscriptions_schema_1.Subscription(data.id, data.name, data.price_mad, data.limit_photo_treatment, data.treatment_plans, data.limit_photo_check, data.progress_tracking, data.vip_consultation, data.features, data.is_active, data.created_at);
    }
    async FindAll() {
        const data = await this.prisma.subscriptions.findMany();
        return data.map((item) => this.mapToSubscription(item));
    }
    async FindOne(id) {
        const data = await this.prisma.subscriptions.findUnique({
            where: { id },
        });
        return data ? this.mapToSubscription(data) : null;
    }
    async FindName(name) {
        const subscription = await this.prisma.subscriptions.findUnique({
            where: { name },
            select: { id: true },
        });
        if (!subscription) {
            throw new Error(`Subscription '${name}' not found`);
        }
        return subscription.id;
    }
};
exports.SubscriptionsService = SubscriptionsService;
exports.SubscriptionsService = SubscriptionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SubscriptionsService);
//# sourceMappingURL=subscriptions.service.js.map