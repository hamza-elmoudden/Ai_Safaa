"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationsModule = void 0;
const common_1 = require("@nestjs/common");
const conversations_service_1 = require("./conversations.service");
const conversations_controller_1 = require("./conversations.controller");
const get_conversation_handler_1 = require("./Query/handler/get-conversation.handler");
const prisma_module_1 = require("../prisma/prisma.module");
const redis_module_1 = require("../redis/redis.module");
let ConversationsModule = class ConversationsModule {
};
exports.ConversationsModule = ConversationsModule;
exports.ConversationsModule = ConversationsModule = __decorate([
    (0, common_1.Module)({
        providers: [
            conversations_service_1.ConversationsService,
            get_conversation_handler_1.GetConversationsHandler,
        ],
        controllers: [conversations_controller_1.ConversationsController],
        exports: [conversations_service_1.ConversationsService],
        imports: [
            prisma_module_1.PrismaModule,
            redis_module_1.RedisModule
        ]
    })
], ConversationsModule);
//# sourceMappingURL=conversations.module.js.map