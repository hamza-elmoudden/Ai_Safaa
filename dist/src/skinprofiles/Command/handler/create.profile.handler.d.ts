import { ICommandHandler } from "@nestjs/cqrs";
import { CreateProfileCommand } from "../impl/create.profile.command";
import { SkinprofilesService } from "src/skinprofiles/skinprofiles.service";
import { UsersService } from "src/users/users.service";
export declare class CreateProfileHandler implements ICommandHandler<CreateProfileCommand> {
    private readonly service;
    private readonly UsersService;
    constructor(service: SkinprofilesService, UsersService: UsersService);
    execute(command: CreateProfileCommand): Promise<string>;
}
