"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Role = void 0;
var Role;
(function (Role) {
    Role["user"] = "user";
    Role["admin"] = "admin";
    Role["tchker"] = "tchker";
})(Role || (exports.Role = Role = {}));
class User {
    id;
    email;
    phone;
    country_code;
    city;
    date_of_birth;
    password_hash;
    google_provider;
    google_id;
    full_name;
    role;
    is_verified;
    otp_code;
    otp_expires_at;
    last_login;
    created_at;
    updated_at;
    refresh_token;
    is_complete_login;
    constructor(id, email, phone, country_code, city, date_of_birth, password_hash, google_provider, google_id, full_name, role, is_verified, otp_code, otp_expires_at, last_login, created_at, updated_at, refresh_token, is_complete_login) {
        this.id = id;
        this.email = email;
        this.phone = phone;
        this.country_code = country_code;
        this.city = city;
        this.date_of_birth = date_of_birth;
        this.password_hash = password_hash;
        this.google_provider = google_provider;
        this.google_id = google_id;
        this.full_name = full_name;
        this.role = role;
        this.is_verified = is_verified;
        this.otp_code = otp_code;
        this.otp_expires_at = otp_expires_at;
        this.last_login = last_login;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.refresh_token = refresh_token;
        this.is_complete_login = is_complete_login;
    }
}
exports.User = User;
//# sourceMappingURL=user.schema.js.map