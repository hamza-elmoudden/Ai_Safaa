import { ICommandHandler } from '@nestjs/cqrs';
import { UploadImageCommand } from '../impl/upload-image.command';
import { ImageService } from 'src/image/image.service';
export declare class UploadImageHandler implements ICommandHandler<UploadImageCommand> {
    private readonly s3Service;
    constructor(s3Service: ImageService);
    execute(command: UploadImageCommand): Promise<{
        url: string;
        key: string;
    }>;
}
