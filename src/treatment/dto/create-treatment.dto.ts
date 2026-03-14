import { IsEnum, IsString } from "class-validator";
import { areas_treated, concern_type, plan_status } from "../Schema/treatment.schema";


export class CreateTreatmentDto{
    
    @IsString()
    title:string


    @IsEnum(concern_type)
    concern_type:concern_type


    @IsEnum(plan_status)
    status:plan_status

    @IsEnum(areas_treated)
    areas_treated:areas_treated
}