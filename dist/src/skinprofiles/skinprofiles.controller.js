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
exports.SkinprofilesController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const passport_1 = require("@nestjs/passport");
const decorators_1 = require("../auth/decorators/decorators");
const create_skinprofile_dto_1 = require("./dto/create.skinprofile.dto");
const create_profile_command_1 = require("./Command/impl/create.profile.command");
const update_profile_command_1 = require("./Command/impl/update.profile.command");
const getskin_profile_query_1 = require("./Query/impl/getskin.profile.query");
let SkinprofilesController = class SkinprofilesController {
    commandBus;
    queryBus;
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async getSkinProfiles(req) {
        const user = req.user;
        return await this.queryBus.execute(new getskin_profile_query_1.GetSkinProfileQuery(user.id));
    }
    async createSkinProfile(data, req) {
        const user = req.user;
        return await this.commandBus.execute(new create_profile_command_1.CreateProfileCommand(user.id, data.skin_type, data.concerns, data.allergies, data.notes));
    }
    async updateSkinProfile(data, req) {
        const user = req.user;
        return await this.commandBus.execute(new update_profile_command_1.UpdateProfileCommand(user.id, data.skin_type, data.concerns, data.allergies, data.notes));
    }
};
exports.SkinprofilesController = SkinprofilesController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, decorators_1.Roles)('user'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SkinprofilesController.prototype, "getSkinProfiles", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, decorators_1.Roles)('user'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_skinprofile_dto_1.CreateSkinProfileDto, Object]),
    __metadata("design:returntype", Promise)
], SkinprofilesController.prototype, "createSkinProfile", null);
__decorate([
    (0, common_1.Put)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, decorators_1.Roles)('user'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_skinprofile_dto_1.CreateSkinProfileDto, Object]),
    __metadata("design:returntype", Promise)
], SkinprofilesController.prototype, "updateSkinProfile", null);
exports.SkinprofilesController = SkinprofilesController = __decorate([
    (0, common_1.Controller)('skinprofiles'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], SkinprofilesController);
//# sourceMappingURL=skinprofiles.controller.js.map