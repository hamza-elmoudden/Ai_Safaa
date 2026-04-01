import { Skin_type } from "src/skinprofiles/Schema/skin.profile.schema";
export declare class UpdateProfileCommand {
    readonly user_id: string;
    readonly skin_type: Skin_type;
    readonly concerns: string[];
    readonly allergies: string[];
    readonly notes: string;
    constructor(user_id: string, skin_type: Skin_type, concerns: string[], allergies: string[], notes: string);
}
