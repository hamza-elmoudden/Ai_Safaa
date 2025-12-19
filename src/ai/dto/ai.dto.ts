import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

 


export class AiDto{

    @IsString()
    @MaxLength(2000,{message:'The message is very long'})
    text:string

    @IsOptional()
    image?: string | any

}