import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateSkinProfileDto } from './dto/create.skinprofile.dto';
export declare class SkinprofilesController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    getSkinProfiles(req: any): Promise<any>;
    createSkinProfile(data: CreateSkinProfileDto, req: any): Promise<any>;
    updateSkinProfile(data: CreateSkinProfileDto, req: any): Promise<any>;
}
