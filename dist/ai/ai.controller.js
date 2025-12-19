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
const upload_image_command_1 = require("../image/commands/impl/upload-image.command");
const ai_dto_1 = require("./dto/ai.dto");
const common_2 = require("@nestjs/common");
let AiController = class AiController {
    commandbus;
    constructor(commandbus) {
        this.commandbus = commandbus;
    }
    async generatetext(prompt, file, res, userId) {
        try {
            if (file) {
                try {
                    const maxSize = 5 * 1024 * 1024;
                    if (file.size > maxSize)
                        throw new common_1.BadRequestException('Image too large');
                    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
                    if (!allowedMimeTypes.includes(file.mimetype))
                        throw new common_1.BadRequestException('Only image files allowed');
                    const url = await this.commandbus.execute(new upload_image_command_1.UploadImageCommand(file.originalname, file.buffer, file.mimetype));
                    prompt.image = typeof url.url === 'string' ? url.url : undefined;
                }
                catch (error) {
                    console.error('Error Upload Image ', error);
                    res.status(401).send('Error On Upload Image');
                }
            }
            const stream = await this.commandbus.execute(new generatechat_command_1.generatetextcommand(prompt.text, userId, prompt.image));
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
                res.status(500).json({
                    success: false,
                    error: 'An error occurred in processing the request',
                    message: process.env.NODE_ENV === 'development' ? error.message : undefined
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
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_2.Res)()),
    __param(3, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ai_dto_1.AiDto, Object, Object, String]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "generatetext", null);
exports.AiController = AiController = __decorate([
    (0, common_1.Controller)('ai'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus])
], AiController);
//# sourceMappingURL=ai.controller.js.map