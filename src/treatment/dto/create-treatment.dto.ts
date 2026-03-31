import { IsEnum, IsOptional, IsString } from "class-validator";
import { areas_treated, plan_status } from "../Schema/treatment.schema";


export class CreateTreatmentDto{
    

    @IsEnum(areas_treated)
    areas_treated:areas_treated
}