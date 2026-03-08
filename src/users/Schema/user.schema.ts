

export enum Role{
    user = 'user',
    admin = 'admin',
    tchker = 'tchker'
}



export class User {
    constructor(
        public id: string,
        public email: string,
        public phone:string,
        public country_code: string,
        public city: string,
        public date_of_birth: Date,
        public password_hash: string,
        public google_provider_id: boolean,
        public google_id:string,
        public full_name: string,
        public role: Role,
        public is_verified: boolean,
        public otp_code: string,
        public otp_expires_at: Date,
        public last_login: Date,
        public created_at: Date,
        public updated_at: Date
    ) {}
}