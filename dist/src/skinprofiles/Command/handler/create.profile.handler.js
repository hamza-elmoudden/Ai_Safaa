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
exports.CreateProfileHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const create_profile_command_1 = require("../impl/create.profile.command");
const skin_profile_schema_1 = require("../../Schema/skin.profile.schema");
const skinprofiles_service_1 = require("../../skinprofiles.service");
const users_service_1 = require("../../../users/users.service");
const common_1 = require("@nestjs/common");
let CreateProfileHandler = class CreateProfileHandler {
    service;
    UsersService;
    constructor(service, UsersService) {
        this.service = service;
        this.UsersService = UsersService;
    }
    async execute(command) {
        const { user_id, skin_type, concerns, allergies, notes } = command;
        let user = await this.UsersService.findOneId(user_id);
        if (!user) {
            throw new common_1.NotFoundException(`User with id ${user_id} not found`);
        }
        const profile = new skin_profile_schema_1.SkinProfile(crypto.randomUUID(), user.id, skin_type, concerns, allergies, notes, new Date(), new Date());
        let skinprofile;
        try {
            skinprofile = await this.service.getProfileByUserId(command.user_id);
            if (skinprofile) {
                throw new common_1.BadRequestException("Profile is exist");
            }
            skinprofile = await this.service.createProfile(profile);
        }
        catch (error) {
            console.error('Error creating skin profile:', error);
            throw new Error('Failed to create skin profile');
        }
        return skinprofile.id;
    }
};
exports.CreateProfileHandler = CreateProfileHandler;
exports.CreateProfileHandler = CreateProfileHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_profile_command_1.CreateProfileCommand),
    __metadata("design:paramtypes", [skinprofiles_service_1.SkinprofilesService,
        users_service_1.UsersService])
], CreateProfileHandler);
//# sourceMappingURL=create.profile.handler.js.map