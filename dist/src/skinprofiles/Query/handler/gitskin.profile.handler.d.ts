import { IQueryHandler } from "@nestjs/cqrs";
import { GetSkinProfileQuery } from "../impl/getskin.profile.query";
import { SkinprofilesService } from "src/skinprofiles/skinprofiles.service";
import { SkinProfile } from "src/skinprofiles/Schema/skin.profile.schema";
export declare class GetSkinProfileHandler implements IQueryHandler<GetSkinProfileQuery> {
    private readonly service;
    constructor(service: SkinprofilesService);
    execute(query: GetSkinProfileQuery): Promise<SkinProfile | null>;
}
