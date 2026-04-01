export declare enum Role {
    user = "user",
    admin = "admin",
    tchker = "tchker"
}
export declare class User {
    readonly id: string;
    readonly email: string;
    readonly phone: string;
    readonly country_code: string;
    readonly city: string;
    readonly date_of_birth: Date;
    readonly password_hash: string;
    readonly google_provider: boolean;
    readonly google_id: string;
    readonly full_name: string;
    readonly role: Role;
    readonly is_verified: boolean;
    readonly otp_code: string;
    readonly otp_expires_at: Date;
    readonly last_login: Date;
    readonly created_at: Date;
    readonly updated_at: Date;
    readonly refresh_token: string;
    readonly is_complete_login: boolean;
    constructor(id: string, email: string, phone: string, country_code: string, city: string, date_of_birth: Date, password_hash: string, google_provider: boolean, google_id: string, full_name: string, role: Role, is_verified: boolean, otp_code: string, otp_expires_at: Date, last_login: Date, created_at: Date, updated_at: Date, refresh_token: string, is_complete_login: boolean);
}
