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
exports.CompleteLoginHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const users_service_1 = require("../../users.service");
const common_1 = require("@nestjs/common");
const user_schema_1 = require("../../Schema/user.schema");
const complete_login_command_1 = require("../impl/complete-login.command");
const inspector_1 = require("inspector");
let CompleteLoginHandler = class CompleteLoginHandler {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    async execute(command) {
        const { id, full_name, phone, country_code, city, date_of_birth } = command;
        let findUser;
        try {
            findUser = await this.usersService.findOneId(id);
        }
        catch (error) {
            inspector_1.console.error('Error finding user:', error);
            throw new Error('Error finding user: ');
        }
        if (!findUser) {
            throw new common_1.NotFoundException('User not found');
        }
        const user = new user_schema_1.User(id, findUser.email, phone, country_code, city, date_of_birth, findUser.password_hash, findUser.google_provider, findUser.google_id, full_name, findUser.role, findUser.is_verified, '', new Date(), new Date(), new Date(), new Date(), findUser.refresh_token, findUser.is_complete_login);
        if (!user.is_complete_login) {
            throw new common_1.NotFoundException('User already completed login');
        }
        try {
            return await this.usersService.completeUser(user);
        }
        catch (error) {
            inspector_1.console.error('Error completing user login:', error);
            throw new Error('Error completing user login: ' + error.message);
        }
    }
};
exports.CompleteLoginHandler = CompleteLoginHandler;
exports.CompleteLoginHandler = CompleteLoginHandler = __decorate([
    (0, cqrs_1.CommandHandler)(complete_login_command_1.CompleteLoginCommand),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], CompleteLoginHandler);
//# sourceMappingURL=complete-login.handler.js.map