import { IsEnum, IsString } from "class-validator"
import { Skin_type } from "../Schema/skin.profile.schema"


export class CreateSkinProfileDto {

    @IsEnum(Skin_type)
    skin_type: Skin_type

    @IsString({ each: true })
    concerns: string[]

    @IsString({ each: true })
    allergies: string[]

    @IsString()
    notes: string


}