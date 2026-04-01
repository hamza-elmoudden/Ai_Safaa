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
exports.UploadImageHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const upload_image_command_1 = require("../impl/upload-image.command");
const image_service_1 = require("../../image.service");
let UploadImageHandler = class UploadImageHandler {
    s3Service;
    constructor(s3Service) {
        this.s3Service = s3Service;
    }
    async execute(command) {
        const { filename, buffer, mimetype } = command;
        const result = await this.s3Service.uploadFile(buffer, filename, mimetype);
        return {
            url: result.url,
            key: result.key,
        };
    }
};
exports.UploadImageHandler = UploadImageHandler;
exports.UploadImageHandler = UploadImageHandler = __decorate([
    (0, cqrs_1.CommandHandler)(upload_image_command_1.UploadImageCommand),
    __metadata("design:paramtypes", [image_service_1.ImageService])
], UploadImageHandler);
//# sourceMappingURL=upload-image.handler.js.map