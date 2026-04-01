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
exports.ConversationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const conversation_schema_1 = require("./Schema/conversation.schema");
let ConversationsService = class ConversationsService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    mapToConversations(data) {
        return new conversation_schema_1.Conversation(data.id, data.user_id, data.message_user, data.user_photo_url, data.user_photo_key, data.analysis_photo, data.message_ai, data.created_at);
    }
    async addConversation(user_id, user_text, ai_text, photo_url, photo_kay) {
        return await this.prismaService.conversations.create({
            data: {
                user_id,
                message_ai: ai_text,
                message_user: user_text,
                user_photo_url: photo_url,
                user_photo_key: photo_kay
            }
        });
    }
    async getUserConversation(user_id, limit = 200, page = 1, sort = 'asc') {
        const skip = (page - 1) * limit;
        return await this.prismaService.conversations.findMany({
            where: {
                user_id
            },
            orderBy: {
                created_at: sort
            },
            take: limit,
            skip: skip
        });
    }
    async getFormattedMessages(user_id, limit = 20, page = 1) {
        const skip = (page - 1) * limit;
        const conversations = await this.prismaService.conversations.findMany({
            where: { user_id },
            orderBy: { created_at: 'asc' },
            take: limit,
            skip: skip,
        });
        const messages = conversations.flatMap(conv => {
            const result = [];
            if (conv.message_user) {
                result.push({
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: conv.message_user
                        }
                    ]
                });
            }
            if (conv.message_ai && conv.message_ai.trim() !== "") {
                result.push({
                    role: "assistant",
                    content: [
                        {
                            type: "text",
                            text: conv.message_ai
                        }
                    ]
                });
            }
            return result;
        });
        return messages;
    }
};
exports.ConversationsService = ConversationsService;
exports.ConversationsService = ConversationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConversationsService);
//# sourceMappingURL=conversations.service.js.map