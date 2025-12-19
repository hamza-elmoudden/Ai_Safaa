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
exports.ImageService = void 0;
const common_1 = require("@nestjs/common");
const client_s3_1 = require("@aws-sdk/client-s3");
const lib_storage_1 = require("@aws-sdk/lib-storage");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const uuid_1 = require("uuid");
const config_1 = require("@nestjs/config");
let ImageService = class ImageService {
    configService;
    s3Client;
    bucketName;
    constructor(configService) {
        this.configService = configService;
        const region = this.configService.get('AWS_REGION');
        const accessKeyId = this.configService.get('AWS_ACCESS_KEY_ID');
        const secretAccessKey = this.configService.get('AWS_SECRET_ACCESS_KEY');
        const bucketName = this.configService.get('AWS_S3_BUCKET_NAME');
        if (!region || !accessKeyId || !secretAccessKey || !bucketName) {
            throw new Error('Missing required AWS configuration');
        }
        this.s3Client = new client_s3_1.S3Client({
            region,
            credentials: {
                accessKeyId,
                secretAccessKey,
            },
        });
        this.bucketName = bucketName;
    }
    async uploadFile(buffer, filename, mimetype) {
        const key = `images/${(0, uuid_1.v4)()}-${filename}`;
        const upload = new lib_storage_1.Upload({
            client: this.s3Client,
            params: {
                Bucket: this.bucketName,
                Key: key,
                Body: buffer,
                ContentType: mimetype,
            },
        });
        await upload.done();
        const url = `https://${this.bucketName}.s3.${this.configService.get('AWS_REGION')}.amazonaws.com/${key}`;
        return { url, key };
    }
    async getSignedUrl(key, expiresIn = 3600) {
        const command = new client_s3_1.GetObjectCommand({
            Bucket: this.bucketName,
            Key: key,
        });
        return (0, s3_request_presigner_1.getSignedUrl)(this.s3Client, command, { expiresIn });
    }
};
exports.ImageService = ImageService;
exports.ImageService = ImageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ImageService);
//# sourceMappingURL=image.service.js.map