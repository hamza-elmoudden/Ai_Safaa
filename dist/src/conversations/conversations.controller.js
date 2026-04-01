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
exports.ConversationsController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const passport_1 = require("@nestjs/passport");
const decorators_1 = require("../auth/decorators/decorators");
const get_conversations_impl_1 = require("./Query/impl/get-conversations.impl");
const redis_service_1 = require("../redis/redis.service");
let ConversationsController = class ConversationsController {
    commandBus;
    queryBus;
    redisService;
    constructor(commandBus, queryBus, redisService) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
        this.redisService = redisService;
    }
    async GetConversations(req, limit, page) {
        const user = req.user;
        return await this.queryBus.execute(new get_conversations_impl_1.GetConversationsQuery(user.id, page, limit));
    }
};
exports.ConversationsController = ConversationsController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, decorators_1.Roles)('user'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number]),
    __metadata("design:returntype", Promise)
], ConversationsController.prototype, "GetConversations", null);
exports.ConversationsController = ConversationsController = __decorate([
    (0, common_1.Controller)('conversations'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus,
        redis_service_1.RedisService])
], ConversationsController);
//# sourceMappingURL=conversations.controller.js.map