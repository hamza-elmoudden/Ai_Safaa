import { Type } from "class-transformer"
import {  IsDate, IsNotEmpty, isNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator"



export class UpdateUserDto {

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    @IsOptional()
    full_name: string

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    @IsOptional()
    phone: string

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    @IsOptional()
    country_code: string

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    @IsOptional()
    city: string

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    @IsOptional()
    address: string

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    @IsOptional()
    date_of_birth: Date
}