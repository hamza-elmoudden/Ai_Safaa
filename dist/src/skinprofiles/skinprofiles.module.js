"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkinprofilesModule = void 0;
const common_1 = require("@nestjs/common");
const skinprofiles_service_1 = require("./skinprofiles.service");
const skinprofiles_controller_1 = require("./skinprofiles.controller");
const create_profile_handler_1 = require("./Command/handler/create.profile.handler");
const users_module_1 = require("../users/users.module");
const update_profile_handler_1 = require("./Command/handler/update.profile.handler");
const prisma_module_1 = require("../prisma/prisma.module");
const gitskin_profile_handler_1 = require("./Query/handler/gitskin.profile.handler");
let SkinprofilesModule = class SkinprofilesModule {
};
exports.SkinprofilesModule = SkinprofilesModule;
exports.SkinprofilesModule = SkinprofilesModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, prisma_module_1.PrismaModule],
        providers: [
            skinprofiles_service_1.SkinprofilesService,
            create_profile_handler_1.CreateProfileHandler,
            update_profile_handler_1.UpdateProfileHandler,
            gitskin_profile_handler_1.GetSkinProfileHandler
        ],
        controllers: [skinprofiles_controller_1.SkinprofilesController],
        exports: [skinprofiles_service_1.SkinprofilesService]
    })
], SkinprofilesModule);
//# sourceMappingURL=skinprofiles.module.js.map