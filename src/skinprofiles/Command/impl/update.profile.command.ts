import { Skin_type } from "src/skinprofiles/Schema/skin.profile.schema";




export class UpdateProfileCommand{
    constructor(
        public readonly id:string,
        public readonly user_id:string,
        public readonly skin_type:Skin_type,
        public readonly concerns:string[],
        public readonly allergies:string[],
        public readonly notes:string
    ){}
}