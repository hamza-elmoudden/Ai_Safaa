import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateProfileCommand } from "../impl/create.profile.command";
import { SkinProfile } from "src/skinprofiles/Schema/skin.profile.schema";
import { SkinprofilesService } from "src/skinprofiles/skinprofiles.service";



@CommandHandler(CreateProfileCommand)
export class CreateProfileHandler implements ICommandHandler<CreateProfileCommand>{
    constructor(
        private readonly service:SkinprofilesService
    ){}

    async execute(command:CreateProfileCommand):Promise<string>{
        const {user_id,skin_type,concerns,allergies,notes} = command;
        //create a new profile using the service
        const profile = new SkinProfile(crypto.randomUUID(),user_id,skin_type,concerns,allergies,notes,new Date(),new Date());
        
        //save the profile to the database
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