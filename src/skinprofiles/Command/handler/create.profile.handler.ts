import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateProfileCommand } from "../impl/create.profile.command";
import { SkinProfile } from "src/skinprofiles/Schema/skin.profile.schema";
import { SkinprofilesService } from "src/skinprofiles/skinprofiles.service";
import { UsersService } from "src/users/users.service";
import { NotFound } from "@aws-sdk/client-s3";
import { NotFoundException } from "@nestjs/common";
import { User } from "src/users/Schema/user.schema";



@CommandHandler(CreateProfileCommand)
export class CreateProfileHandler implements ICommandHandler<CreateProfileCommand> {
    constructor(
        private readonly service: SkinprofilesService,
        private readonly UsersService: UsersService
    ) { }

    async execute(command: CreateProfileCommand): Promise<string> {
        const { user_id, skin_type, concerns, allergies, notes } = command;

        let user:User

        try {
            user = await this.UsersService.findOneId(user_id);

            if (!user) {

                throw new NotFoundException(`User with id ${user_id} not found`);
            }

        } catch (error) {
            console.error('Error fetching user:', error);
            throw new Error('Failed to fetch user');
        }

        const profile = new SkinProfile(crypto.randomUUID(), user.id, skin_type, concerns, allergies, notes, new Date(), new Date());

        let skinprofile;

        try {
            skinprofile = await this.service.createProfile(profile);
        } catch (error) {
            console.error('Error creating skin profile:', error);
            throw new Error('Failed to create skin profile');
        }

        return skinprofile.id;
    }


}