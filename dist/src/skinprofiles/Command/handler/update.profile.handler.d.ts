import { ICommandHandler } from "@nestjs/cqrs";
import { UpdateProfileCommand } from "../impl/update.profile.command";
import { SkinprofilesService } from "src/skinprofiles/skinprofiles.service";
import { SkinProfile } from "src/skinprofiles/Schema/skin.profile.schema";
export declare class UpdateProfileHandler implements ICommandHandler<UpdateProfileCommand> {
    private readonly service;
    constructor(service: SkinprofilesService);
    execute(command: UpdateProfileCommand): Promise<SkinProfile | null>;
}
