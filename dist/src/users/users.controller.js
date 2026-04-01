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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const update_user_dto_1 = require("./dto/update-user.dto");
const passport_1 = require("@nestjs/passport");
const decorators_1 = require("../auth/decorators/decorators");
const updateuser_command_1 = require("./Command/impl/updateuser.command");
const complete_login_command_1 = require("./Command/impl/complete-login.command");
const findbyid_query_1 = require("./Query/impl/findbyid.query");
const roles_guard_1 = require("../auth/guards/roles.guard");
let UsersController = class UsersController {
    commandBus;
    queryBus;
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async updateUser(updateUserDto, req) {
        const user = req.user;
        const data = await this.commandBus.execute(new updateuser_command_1.UpdateUserCommand(user.id, updateUserDto.full_name, updateUserDto.phone, updateUserDto.country_code, updateUserDto.city, updateUserDto.date_of_birth));
        return {
            message: 'User updated successfully',
            data: {
                name: data.full_name,
                phone: data.phone,
                country_code: data.country_code,
                city: data.city,
                date_of_birth: data.date_of_birth
            }
        };
    }
    async completeProfile(updateUserDto, req) {
        const user = req.user;
        const data = await this.commandBus.execute(new complete_login_command_1.CompleteLoginCommand(user.id, updateUserDto.full_name, updateUserDto.phone, updateUserDto.country_code, updateUserDto.city, updateUserDto.date_of_birth));
        return {
            message: 'Profile completed successfully',
            data: {
                name: data.full_name,
                phone: data.phone,
                country_code: data.country_code,
                city: data.city,
                date_of_birth: data.date_of_birth
            }
        };
    }
    async me(req) {
        const user = req.user;
        const result = await this.queryBus.execute(new findbyid_query_1.FindByIdQuery(user.id));
        return {
            message: 'User retrieved successfully',
            data: {
                full_name: result.full_name,
                phone: result.phone,
                email: result.email,
                country_code: result.country_code,
                city: result.city,
                date_of_birth: result.date_of_birth
            }
        };
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Patch)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, decorators_1.Roles)('user'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Put)('complete'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, decorators_1.Roles)('user'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "completeProfile", null);
__decorate([
    (0, common_1.Get)("me"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, decorators_1.Roles)(decorators_1.UserRole.USER),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "me", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], UsersController);
//# sourceMappingURL=users.controller.js.map