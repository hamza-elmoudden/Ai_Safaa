"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenusageModule = void 0;
const common_1 = require("@nestjs/common");
const tokenusage_service_1 = require("./tokenusage.service");
const tokenusage_controller_1 = require("./tokenusage.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const payments_module_1 = require("../payments/payments.module");
const subscriptions_module_1 = require("../subscriptions/subscriptions.module");
let TokenusageModule = class TokenusageModule {
};
exports.TokenusageModule = TokenusageModule;
exports.TokenusageModule = TokenusageModule = __decorate([
    (0, common_1.Module)({
        providers: [tokenusage_service_1.TokenusageService],
        controllers: [tokenusage_controller_1.TokenusageController],
        exports: [tokenusage_service_1.TokenusageService],
        imports: [
            payments_module_1.PaymentsModule,
            prisma_module_1.PrismaModule,
            subscriptions_module_1.SubscriptionsModule
        ]
    })
], TokenusageModule);
//# sourceMappingURL=tokenusage.module.js.map