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
exports.generatetexthandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const generatechat_command_1 = require("../impl/generatechat.command");
const ai_service_1 = require("../../ai.service");
const cqrs_2 = require("@nestjs/cqrs");
const conversations_service_1 = require("../../../conversations/conversations.service");
const tokenusage_service_1 = require("../../../tokenusage/tokenusage.service");
const image_service_1 = require("../../../image/image.service");
const common_1 = require("@nestjs/common");
const payments_service_1 = require("../../../payments/payments.service");
const redis_service_1 = require("../../../redis/redis.service");
let generatetexthandler = class generatetexthandler {
    Aiservice;
    commandbus;
    conversationsService;
    tokenusageService;
    imageService;
    paymentsService;
    redisService;
    constructor(Aiservice, commandbus, conversationsService, tokenusageService, imageService, paymentsService, redisService) {
        this.Aiservice = Aiservice;
        this.commandbus = commandbus;
        this.conversationsService = conversationsService;
        this.tokenusageService = tokenusageService;
        this.imageService = imageService;
        this.paymentsService = paymentsService;
        this.redisService = redisService;
    }
    async execute(command) {
        let text_ai;
        let photo_url;
        let photo_key;
        let payments;
        let history;
        const userId = command.user_id;
        payments = await this.paymentsService.getActivePayment(userId);
        if (!payments) {
            throw new common_1.BadRequestException('Your subscription has expired or is not active. Please renew to continue.');
        }
        if (command.file) {
            await this.tokenusageService.checkPhotoLimit(userId);
            text_ai = await this.Aiservice.analyzeFromBuffer(command.file.buffer, command.file.mimetype, command.text);
            if (text_ai.trim() === 'image_low_quality') {
                throw new common_1.BadRequestException('The image is unclear. Please send a clearer photo.');
            }
            const uploaded = await this.imageService.uploadFile(command.file.buffer, command.file.originalname, command.file.mimetype);
            photo_url = uploaded.url;
            photo_key = uploaded.key;
            text_ai = await this.Aiservice.analyzeFaceFromUrl(command.text, photo_url);
        }
        history = await this.conversationsService.getFormattedMessages(userId, 50, 1);
        const result = await this.Aiservice.generatetext(command.text, text_ai, userId, history);
        return result.toUIMessageStream({
            onFinish: async ({ responseMessage }) => {
                const textPart = responseMessage.parts?.find(p => p.type === 'text');
                if (photo_url) {
                    await this.tokenusageService.addTokenUsage({
                        user_id: userId,
                        source: 'conversation_photo',
                        tokens_input: 0,
                        tokens_output: 0,
                        ai_model: 'openai/gpt-4.1',
                    });
                }
                await this.conversationsService.addConversation(userId, command.text, textPart?.text ?? '', photo_url, photo_key);
            }
        });
    }
};
exports.generatetexthandler = generatetexthandler;
exports.generatetexthandler = generatetexthandler = __decorate([
    (0, cqrs_1.CommandHandler)(generatechat_command_1.generatetextcommand),
    __metadata("design:paramtypes", [ai_service_1.AiService,
        cqrs_2.CommandBus,
        conversations_service_1.ConversationsService,
        tokenusage_service_1.TokenusageService,
        image_service_1.ImageService,
        payments_service_1.PaymentsService,
        redis_service_1.RedisService])
], generatetexthandler);
//# sourceMappingURL=generatechat.handler.js.map