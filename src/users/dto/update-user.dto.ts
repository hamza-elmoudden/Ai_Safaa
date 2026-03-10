import { Type } from "class-transformer"
import {  IsDate, IsNotEmpty, isNotEmpty, IsString, MaxLength, MinLength } from "class-validator"



export class UpdateUserDto {

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    full_name: string

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    phone: string

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    country_code: string

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    city: string

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    address: string

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    date_of_birth: Date
}