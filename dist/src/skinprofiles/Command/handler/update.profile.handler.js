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
exports.UpdateProfileHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const update_profile_command_1 = require("../impl/update.profile.command");
const skinprofiles_service_1 = require("../../skinprofiles.service");
const skin_profile_schema_1 = require("../../Schema/skin.profile.schema");
const common_1 = require("@nestjs/common");
let UpdateProfileHandler = class UpdateProfileHandler {
    service;
    constructor(service) {
        this.service = service;
    }
    async execute(command) {
        const { user_id, skin_type, concerns, allergies, notes } = command;
        const profile = await this.service.getProfileByUserId(user_id);
        if (!profile) {
            throw new common_1.BadRequestException('Skin profile not found');
        }
        const skinProfile = new skin_profile_schema_1.SkinProfile(profile.id, profile.user_id, skin_type || profile.skin_type, concerns || profile.concerns, allergies || profile.allergies, notes || profile.notes, profile.created_at, new Date());
        try {
            return await this.service.updateProfile(skinProfile);
        }
        catch (error) {
            console.error('Error updating skin profile:', error);
            throw new Error('Failed to update skin profile');
        }
    }
};
exports.UpdateProfileHandler = UpdateProfileHandler;
exports.UpdateProfileHandler = UpdateProfileHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_profile_command_1.UpdateProfileCommand),
    __metadata("design:paramtypes", [skinprofiles_service_1.SkinprofilesService])
], UpdateProfileHandler);
//# sourceMappingURL=update.profile.handler.js.map