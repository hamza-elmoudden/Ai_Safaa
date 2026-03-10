import { BadRequestException } from "@nestjs/common";


export enum Role{
    user = 'user',
    admin = 'admin',
    tchker = 'tchker'
}



export class User {
    constructor(
        public readonly id: string,
        public readonly email: string,
        public readonly phone:string,
        public readonly country_code: string,
        public readonly city: string,
        public readonly date_of_birth: Date,
        public readonly password_hash: string,
        public readonly google_provider: boolean,
        public readonly google_id: string,
        public readonly full_name: string,
        public readonly role: Role,
        public readonly is_verified: boolean,
        public readonly otp_code: string,
        public readonly otp_expires_at: Date,
        public readonly last_login: Date,
        public readonly created_at: Date,
        public readonly updated_at: Date,
        public readonly refresh_token: string,
        public readonly is_complete_login: boolean
    ) {}



}