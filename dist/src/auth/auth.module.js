"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const users_module_1 = require("../users/users.module");
const passport_1 = require("@nestjs/passport");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const Google_strategy_1 = require("./Google.strategy");
const Jwt_strategy_1 = require("./Jwt.strategy");
const Jwt_refresh_strategy_1 = require("./Jwt.refresh.strategy");
const payments_module_1 = require("../payments/payments.module");
const subscriptions_module_1 = require("../subscriptions/subscriptions.module");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        providers: [
            auth_service_1.AuthService,
            Google_strategy_1.GoogleStrategy,
            Jwt_strategy_1.JwtStrategy,
            Jwt_refresh_strategy_1.JwtRefreshStrategy,
        ],
        controllers: [auth_controller_1.AuthController],
        imports: [
            users_module_1.UsersModule,
            prisma_module_1.PrismaModule,
            passport_1.PassportModule,
            config_1.ConfigModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    secret: config.getOrThrow('JWT_SECRET'),
                    signOptions: { expiresIn: config.getOrThrow('JWT_EXPIRATION') },
                }),
            }),
            payments_module_1.PaymentsModule,
            subscriptions_module_1.SubscriptionsModule
        ],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map