"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const updateuser_command_1 = require("../impl/updateuser.command");
const users_service_1 = require("../../users.service");
const user_schema_1 = require("../../Schema/user.schema");
const common_1 = require("@nestjs/common");
let UpdateUserHandler = class UpdateUserHandler {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    async execute(command) {
        const { id, full_name, phone, country_code, city, date_of_birth } = command;
        const findUser = await this.usersService.findOneId(id);
        if (!findUser) {
            throw new common_1.NotFoundException('User not found');
        }
        const user = new user_schema_1.User(id, findUser.email, phone, country_code, city, date_of_birth, findUser.password_hash, findUser.google_provider, findUser.google_id, full_name, findUser.role, findUser.is_verified, '', new Date(), new Date(), new Date(), new Date(), findUser.refresh_token, findUser.is_complete_login);
        if (!user.is_complete_login) {
            throw new common_1.NotFoundException('User Not completed login');
        }
        try {
            const updatedUser = await this.usersService.update(user);
            return updatedUser;
        }
        catch (error) {
            throw new Error('Error updating user: ' + error.message);
        }
    }
};
exports.UpdateUserHandler = UpdateUserHandler;
exports.UpdateUserHandler = UpdateUserHandler = __decorate([
    (0, cqrs_1.CommandHandler)(updateuser_command_1.UpdateUserCommand),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UpdateUserHandler);
//# sourceMappingURL=updateuser.handler.js.map