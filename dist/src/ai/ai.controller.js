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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const generatechat_command_1 = require("./Command/impl/generatechat.command");
const platform_express_1 = require("@nestjs/platform-express");
const ai_dto_1 = require("./dto/ai.dto");
const common_2 = require("@nestjs/common");
const treatmentai_command_1 = require("./Command/impl/treatmentai.command");
const passport_1 = require("@nestjs/passport");
let AiController = class AiController {
    commandbus;
    constructor(commandbus) {
        this.commandbus = commandbus;
    }
    async generatetext(prompt, file, res, req) {
        try {
            const userId = req.user.id;
            if (file) {
                const maxSize = 5 * 1024 * 1024;
                if (file.size > maxSize)
                    throw new common_1.BadRequestException('Image too large');
                const allowed = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
                if (!allowed.includes(file.mimetype))
                    throw new common_1.BadRequestException('Only image files allowed');
            }
            const stream = await this.commandbus.execute(new generatechat_command_1.generatetextcommand(prompt.text, userId, file));
            res.status(200);
            res.setHeader('Content-Type', 'text/event-stream');
            res.setHeader('Cache-Control', 'no-cache');
            res.setHeader('Connection', 'keep-alive');
            for await (const chunk of stream) {
                if (chunk.type === 'text-delta' && chunk.delta) {
                    res.write(chunk.delta);
                }
            }
            res.end();
        }
        catch (error) {
            console.error('Stream error:', error);
            if (!res.headersSent) {
                res.status(error.status ?? 500).json({
                    success: false,
                    error: error.message ?? 'An error occurred',
                });
            }
            else {
                res.end();
            }
        }
    }
    async treatmentChat(prompt, file, res, req, treatmentId, limit, page) {
        try {
            const userId = req.user.id;
            if (!treatmentId)
                throw new common_1.BadRequestException('treatmentId is required');
            const stream = await this.commandbus.execute(new treatmentai_command_1.TreatmentAiCommand(userId, treatmentId, prompt.text, file, limit, page));
            res.status(200);
            res.setHeader('Content-Type', 'text/event-stream');
            res.setHeader('Cache-Control', 'no-cache');
            res.setHeader('Connection', 'keep-alive');
            for await (const chunk of stream) {
                if (chunk.type === 'text-delta' && chunk.delta) {
                    res.write(chunk.delta);
                }
            }
            res.end();
        }
        catch (error) {
            console.error('Treatment stream error:', error);
            if (!res.headersSent) {
                res.status(error.status ?? 500).json({
                    success: false,
                    error: error.message ?? 'An error occurred',
                });
            }
            else {
                res.end();
            }
        }
    }
};
exports.AiController = AiController;
__decorate([
    (0, common_1.Post)('chat'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_2.Res)()),
    __param(3, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ai_dto_1.AiDto, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "generatetext", null);
__decorate([
    (0, common_1.Post)('treatment'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_2.Res)()),
    __param(3, (0, common_1.Req)()),
    __param(4, (0, common_1.Query)('treatmentId')),
    __param(5, (0, common_1.Query)('limit')),
    __param(6, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ai_dto_1.AiDto, Object, Object, Object, String, Number, Number]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "treatmentChat", null);
exports.AiController = AiController = __decorate([
    (0, common_1.Controller)('ai'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus])
], AiController);
//# sourceMappingURL=ai.controller.js.map