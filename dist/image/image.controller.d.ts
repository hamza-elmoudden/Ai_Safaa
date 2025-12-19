import { CommandBus, QueryBus } from '@nestjs/cqrs';
export declare class ImageController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    uploadImage(file: Express.Multer.File): Promise<{
        message: string;
        data: any;
    }>;
    getImageUrl(key: string): Promise<{
        url: any;
    }>;
}
