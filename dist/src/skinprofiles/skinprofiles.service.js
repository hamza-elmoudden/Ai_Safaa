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
exports.SkinprofilesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const skin_profile_schema_1 = require("./Schema/skin.profile.schema");
let SkinprofilesService = class SkinprofilesService {
    servicePrisma;
    constructor(servicePrisma) {
        this.servicePrisma = servicePrisma;
    }
    ToMap(profile) {
        return new skin_profile_schema_1.SkinProfile(profile.id, profile.user_id, profile.skin_type, profile.concerns, profile.allergies, profile.notes, profile.created_at, profile.updated_at);
    }
    async createProfile(data) {
        const profile = await this.servicePrisma.skin_profiles.create({
            data: {
                user_id: data.user_id,
                skin_type: data.skin_type,
                concerns: data.concerns,
                allergies: data.allergies,
                notes: data.notes
            }
        });
        return this.ToMap(profile);
    }
    async getProfileByUserId(user_id) {
        const profile = await this.servicePrisma.skin_profiles.findUnique({
            where: {
                user_id
            }
        });
        return profile ? this.ToMap(profile) : null;
    }
    async updateProfile(data) {
        const profile = await this.servicePrisma.skin_profiles.update({
            where: { user_id: data.user_id },
            data: {
                skin_type: data.skin_type,
                concerns: data.concerns,
                allergies: data.allergies,
                notes: data.notes,
                updated_at: new Date()
            }
        });
        return this.ToMap(profile);
    }
};
exports.SkinprofilesService = SkinprofilesService;
exports.SkinprofilesService = SkinprofilesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SkinprofilesService);
//# sourceMappingURL=skinprofiles.service.js.map