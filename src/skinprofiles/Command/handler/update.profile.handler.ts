import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UpdateProfileCommand } from "../impl/update.profile.command";
import { SkinprofilesService } from "src/skinprofiles/skinprofiles.service";
import { SkinProfile } from "src/skinprofiles/Schema/skin.profile.schema";




@CommandHandler(UpdateProfileCommand)
export class UpdateProfileHandler implements ICommandHandler<UpdateProfileCommand> {
  constructor(
    private readonly service: SkinprofilesService, 
  ) {
  }

  async execute(command: UpdateProfileCommand): Promise<SkinProfile | null> {
    const {user_id,skin_type, concerns, allergies, notes } = command;
    
    let profile: SkinProfile | null = null;

    try {
        profile = await this.service.getProfileByUserId(user_id);
    } catch (error) {
        console.error('Error fetching skin profile:', error);
    }

    if (!profile) {
      throw new Error('Skin profile not found');
    }

    const skinProfile = new SkinProfile(
      profile.id,
      profile.user_id,
      skin_type || profile.skin_type,
      concerns || profile.concerns,
      allergies || profile.allergies,
      notes || profile.notes,
      profile.created_at,
      new Date() // Update the updated_at timestamp
    );

    try {
       return await this.service.updateProfile(skinProfile);
    } catch (error) {
      console.error('Error updating skin profile:', error);
      throw new Error('Failed to update skin profile');
    }
  }
}