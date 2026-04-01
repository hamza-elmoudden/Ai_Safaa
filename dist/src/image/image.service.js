"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageService = void 0;
const common_1 = require("@nestjs/common");
const client_s3_1 = require("@aws-sdk/client-s3");
const lib_storage_1 = require("@aws-sdk/lib-storage");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
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
        const uuidModule = await Promise.resolve().then(() => __importStar(require('uuid')));
        const uuidv4 = uuidModule.v4;
        const key = `images/${uuidv4()}-${filename}`;
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