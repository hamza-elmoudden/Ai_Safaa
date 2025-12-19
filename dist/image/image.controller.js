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
exports.ImageController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const cqrs_1 = require("@nestjs/cqrs");
const upload_image_command_1 = require("./commands/impl/upload-image.command");
const common_2 = require("@nestjs/common");
const get_image_url_query_1 = require("./commands/impl/get-image-url.query");
let ImageController = class ImageController {
    commandBus;
    queryBus;
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async uploadImage(file) {
        if (!file) {
            throw new common_1.BadRequestException('No file uploaded');
        }
        const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        if (!allowedMimeTypes.includes(file.mimetype)) {
            throw new common_1.BadRequestException('Only image files are allowed');
        }
        const command = new upload_image_command_1.UploadImageCommand(file.originalname, file.buffer, file.mimetype);
        const result = await this.commandBus.execute(command);
        return {
            message: 'Image uploaded successfully',
            data: result,
        };
    }
    async getImageUrl(key) {
        if (!key) {
            throw new common_1.BadRequestException('Key is required');
        }
        const query = new get_image_url_query_1.GetImageUrlQuery(key);
        const url = await this.queryBus.execute(query);
        return {
            url,
        };
    }
};
exports.ImageController = ImageController;
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Get)('url'),
    __param(0, (0, common_1.Query)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "getImageUrl", null);
exports.ImageController = ImageController = __decorate([
    (0, common_2.Controller)('image'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], ImageController);
//# sourceMappingURL=image.controller.js.map