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
exports.CreateTreatmentHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const create_treatment_command_1 = require("../impl/create-treatment.command");
const treatment_schema_1 = require("../../Schema/treatment.schema");
const treatment_service_1 = require("../../treatment.service");
const payments_service_1 = require("../../../payments/payments.service");
const common_1 = require("@nestjs/common");
const subscriptions_service_1 = require("../../../subscriptions/subscriptions.service");
let CreateTreatmentHandler = class CreateTreatmentHandler {
    treatmentService;
    paymentService;
    subscriptionService;
    constructor(treatmentService, paymentService, subscriptionService) {
        this.treatmentService = treatmentService;
        this.paymentService = paymentService;
        this.subscriptionService = subscriptionService;
    }
    async execute(command) {
        const payment = await this.paymentService.getActivePayment(command.user_id);
        if (!payment) {
            throw new common_1.BadRequestException('No active subscription found');
        }
        if (!payment.subscription_id) {
            throw new common_1.BadRequestException('Subscription ID is missing');
        }
        const subscription = await this.subscriptionService.FindOne(payment.subscription_id);
        if (!subscription) {
            throw new common_1.BadRequestException('Subscription not found');
        }
        const { periodStart, periodEnd } = payment.starts_at
            ? this.paymentService.getCurrentPeriod(payment.starts_at)
            : this.paymentService.getFreePeriod();
        const countThisMonth = await this.treatmentService.countTreatmentsInCurrentPeriod(command.user_id, periodStart, periodEnd);
        if (countThisMonth >= +subscription.treatment_plans && !subscription.vip_consultation) {
            throw new common_1.BadRequestException(`You have reached the maximum number of treatments this month (${countThisMonth}/${subscription.treatment_plans})`);
        }
        try {
            const newTreatment = new treatment_schema_1.Treatment(crypto.randomUUID(), command.user_id, 'title', treatment_schema_1.plan_status.active, null, command.areas_treated, 0, '', '', '', '', null, new Date(), null, new Date(), new Date(), null);
            return await this.treatmentService.createTreatment(newTreatment);
        }
        catch {
            throw new Error('Failed to create treatment');
        }
    }
};
exports.CreateTreatmentHandler = CreateTreatmentHandler;
exports.CreateTreatmentHandler = CreateTreatmentHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_treatment_command_1.CreateTreatmentCommand),
    __metadata("design:paramtypes", [treatment_service_1.TreatmentService,
        payments_service_1.PaymentsService,
        subscriptions_service_1.SubscriptionsService])
], CreateTreatmentHandler);
//# sourceMappingURL=create-treatment.handler.js.map