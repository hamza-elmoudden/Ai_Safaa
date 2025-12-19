import { IQueryHandler } from '@nestjs/cqrs';
import { GetImageUrlQuery } from '../impl/get-image-url.query';
import { ImageService } from 'src/image/image.service';
export declare class GetImageUrlHandler implements IQueryHandler<GetImageUrlQuery> {
    private readonly s3Service;
    constructor(s3Service: ImageService);
    execute(query: GetImageUrlQuery): Promise<string>;
}
