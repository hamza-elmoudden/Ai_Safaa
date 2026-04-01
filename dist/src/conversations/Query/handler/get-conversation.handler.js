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
exports.GetConversationsHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const get_conversations_impl_1 = require("../impl/get-conversations.impl");
const conversations_service_1 = require("../../conversations.service");
let GetConversationsHandler = class GetConversationsHandler {
    conversationService;
    constructor(conversationService) {
        this.conversationService = conversationService;
    }
    async execute(query) {
        let conversation;
        try {
            conversation = await this.conversationService.getUserConversation(query.user_id, query.limit, query.page);
        }
        catch (error) {
            throw new Error("Error In Get Conversation");
        }
        return conversation;
    }
};
exports.GetConversationsHandler = GetConversationsHandler;
exports.GetConversationsHandler = GetConversationsHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_conversations_impl_1.GetConversationsQuery),
    __metadata("design:paramtypes", [conversations_service_1.ConversationsService])
], GetConversationsHandler);
//# sourceMappingURL=get-conversation.handler.js.map