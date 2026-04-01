import { ConfigService } from '@nestjs/config';
export declare class ImageService {
    private configService;
    private s3Client;
    private bucketName;
    constructor(configService: ConfigService);
    uploadFile(buffer: Buffer, filename: string, mimetype: string): Promise<{
        url: string;
        key: string;
    }>;
    getSignedUrl(key: string, expiresIn?: number): Promise<string>;
}
