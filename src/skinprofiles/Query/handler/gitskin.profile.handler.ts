import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetSkinProfileQuery } from "../impl/getskin.profile.query";
import { SkinprofilesService } from "src/skinprofiles/skinprofiles.service";
import { SkinProfile } from "src/skinprofiles/Schema/skin.profile.schema";


@QueryHandler(GetSkinProfileQuery)
export class GetSkinProfileHandler implements IQueryHandler<GetSkinProfileQuery> {
    constructor(
        private readonly service: SkinprofilesService
    ) { }

    async execute(query: GetSkinProfileQuery): Promise<SkinProfile | null> {

        try {
            return this.service.getProfileByUserId(query.user_id);
        } catch (error) {
            console.error('Error fetching skin profile:', error);
            throw new Error('Failed to fetch skin profile');
        }
    }
}