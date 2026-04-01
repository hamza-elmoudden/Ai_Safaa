"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiModule = void 0;
const common_1 = require("@nestjs/common");
const ai_service_1 = require("./ai.service");
const ai_controller_1 = require("./ai.controller");
const analyzeface_handler_1 = require("./Command/handler/analyzeface.handler");
const generatechat_handler_1 = require("./Command/handler/generatechat.handler");
const image_module_1 = require("../image/image.module");
const treatment_module_1 = require("../treatment/treatment.module");
const tokenusage_module_1 = require("../tokenusage/tokenusage.module");
const conversations_module_1 = require("../conversations/conversations.module");
const chattreatment_module_1 = require("../chattreatment/chattreatment.module");
const skinprofiles_module_1 = require("../skinprofiles/skinprofiles.module");
const treatmentai_handler_1 = require("./Command/handler/treatmentai.handler");
const payments_module_1 = require("../payments/payments.module");
const users_module_1 = require("../users/users.module");
const redis_module_1 = require("../redis/redis.module");
let AiModule = class AiModule {
};
exports.AiModule = AiModule;
exports.AiModule = AiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            image_module_1.ImageModule,
            treatment_module_1.TreatmentModule,
            tokenusage_module_1.TokenusageModule,
            conversations_module_1.ConversationsModule,
            chattreatment_module_1.ChattreatmentModule,
            skinprofiles_module_1.SkinprofilesModule,
            payments_module_1.PaymentsModule,
            users_module_1.UsersModule,
            redis_module_1.RedisModule
        ],
        providers: [
            ai_service_1.AiService,
            analyzeface_handler_1.analyzefacehandler,
            generatechat_handler_1.generatetexthandler,
            treatmentai_handler_1.TreatmentAiHandler,
        ],
        controllers: [ai_controller_1.AiController],
        exports: [ai_service_1.AiService, generatechat_handler_1.generatetexthandler]
    })
], AiModule);
//# sourceMappingURL=ai.module.js.map