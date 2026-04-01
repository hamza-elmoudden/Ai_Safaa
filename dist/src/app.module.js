"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const cqrs_1 = require("@nestjs/cqrs");
const ai_module_1 = require("./ai/ai.module");
const image_module_1 = require("./image/image.module");
const config_1 = require("@nestjs/config");
const throttler_1 = require("@nestjs/throttler");
const prisma_module_1 = require("./prisma/prisma.module");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const skinprofiles_module_1 = require("./skinprofiles/skinprofiles.module");
const treatment_module_1 = require("./treatment/treatment.module");
const payments_module_1 = require("./payments/payments.module");
const subscriptions_module_1 = require("./subscriptions/subscriptions.module");
const conversations_module_1 = require("./conversations/conversations.module");
const chattreatment_module_1 = require("./chattreatment/chattreatment.module");
const tokenusage_module_1 = require("./tokenusage/tokenusage.module");
const redis_module_1 = require("./redis/redis.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule.forRoot(),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            ai_module_1.AiModule,
            image_module_1.ImageModule,
            prisma_module_1.PrismaModule,
            throttler_1.ThrottlerModule.forRoot([
                {
                    name: 'default',
                    ttl: 2 * 60 * 60 * 1000,
                    limit: 20,
                },
            ]),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            skinprofiles_module_1.SkinprofilesModule,
            treatment_module_1.TreatmentModule,
            payments_module_1.PaymentsModule,
            subscriptions_module_1.SubscriptionsModule,
            conversations_module_1.ConversationsModule,
            chattreatment_module_1.ChattreatmentModule,
            tokenusage_module_1.TokenusageModule,
            redis_module_1.RedisModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map