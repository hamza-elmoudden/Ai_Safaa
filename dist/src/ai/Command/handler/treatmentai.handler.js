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
exports.TreatmentAiHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const treatmentai_command_1 = require("../impl/treatmentai.command");
const ai_service_1 = require("../../ai.service");
const treatment_service_1 = require("../../../treatment/treatment.service");
const common_1 = require("@nestjs/common");
const chattreatment_service_1 = require("../../../chattreatment/chattreatment.service");
const tokenusage_service_1 = require("../../../tokenusage/tokenusage.service");
const payments_service_1 = require("../../../payments/payments.service");
let TreatmentAiHandler = class TreatmentAiHandler {
    aiService;
    treatmentService;
    chatTreatmentService;
    tokenusageService;
    paymentsService;
    constructor(aiService, treatmentService, chatTreatmentService, tokenusageService, paymentsService) {
        this.aiService = aiService;
        this.treatmentService = treatmentService;
        this.chatTreatmentService = chatTreatmentService;
        this.tokenusageService = tokenusageService;
        this.paymentsService = paymentsService;
    }
    async execute(command) {
        let history;
        let payments;
        const userId = command.user_id;
        payments = await this.paymentsService.getActivePayment(userId);
        if (!payments) {
            throw new common_1.BadRequestException('Your subscription has expired or is not active. Please renew to continue.');
        }
        const treatment = await this.treatmentService.findTreatmentByIdAndUserId(command.user_id, command.treatment_id);
        if (!treatment) {
            throw new common_1.BadRequestException("Treatment plan not found");
        }
        if (command.user_image) {
            await this.tokenusageService.checkTreatmentPhotoLimit(command.user_id, command.treatment_id);
        }
        history = await this.chatTreatmentService.getFormattedMessages(command.treatment_id, command.limit ?? 10000, command.page ?? 1);
        const stream = await this.aiService.treatmentAnalysis(history, command.user_message, command.user_image, command.user_id, command.treatment_id);
        let fullResponse = '';
        const uiStream = stream.toUIMessageStream({
            onFinish: async ({ responseMessage }) => {
                const textPart = responseMessage.parts?.find(p => p.type === 'text');
                fullResponse = textPart?.text ?? '';
                await this.chatTreatmentService.addChat({
                    plan_id: command.treatment_id,
                    user_message: command.user_message,
                    ai_response: fullResponse,
                    have_photo: !!command.user_image,
                    image_url: command.user_image ?? null,
                    image_key: null,
                    day_number: null,
                });
                if (command.user_image) {
                    await this.tokenusageService.addTokenUsage({
                        user_id: command.user_id,
                        source: 'conversation_photo',
                        ref_id: command.treatment_id,
                        plan_id: command.treatment_id,
                        tokens_input: 0,
                        tokens_output: 0,
                        ai_model: 'openai/gpt-4.1',
                    });
                }
            }
        });
        return uiStream;
    }
};
exports.TreatmentAiHandler = TreatmentAiHandler;
exports.TreatmentAiHandler = TreatmentAiHandler = __decorate([
    (0, cqrs_1.CommandHandler)(treatmentai_command_1.TreatmentAiCommand),
    __metadata("design:paramtypes", [ai_service_1.AiService,
        treatment_service_1.TreatmentService,
        chattreatment_service_1.ChattreatmentService,
        tokenusage_service_1.TokenusageService,
        payments_service_1.PaymentsService])
], TreatmentAiHandler);
//# sourceMappingURL=treatmentai.handler.js.map