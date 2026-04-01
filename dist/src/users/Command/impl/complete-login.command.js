"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompleteLoginCommand = void 0;
class CompleteLoginCommand {
    id;
    full_name;
    phone;
    country_code;
    city;
    date_of_birth;
    constructor(id, full_name, phone, country_code, city, date_of_birth) {
        this.id = id;
        this.full_name = full_name;
        this.phone = phone;
        this.country_code = country_code;
        this.city = city;
        this.date_of_birth = date_of_birth;
    }
}
exports.CompleteLoginCommand = CompleteLoginCommand;
//# sourceMappingURL=complete-login.command.js.map