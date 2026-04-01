import { Skin_type } from "../Schema/skin.profile.schema";
export declare class CreateSkinProfileDto {
    skin_type: Skin_type;
    concerns: string[];
    allergies: string[];
    notes: string;
}
