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
exports.ChattreatmentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ChattreatmentService = class ChattreatmentService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async addChat(data) {
        const chat = await this.prismaService.chat_treatment.create({
            data: {
                plan_id: data.plan_id,
                user_message: data.user_message,
                ai_response: data.ai_response,
                have_photo: data.have_photo,
                day_number: data.day_number,
                image_url: data.image_url,
                image_key: data.image_key
            }
        });
        return chat;
    }
    async getChat(treatment_id, limit = 10000, page = 1) {
        const skip = (page - 1) * limit;
        const chat = await this.prismaService.chat_treatment.findMany({
            where: {
                plan_id: treatment_id
            },
            orderBy: {
                created_at: "asc"
            },
            take: limit,
            skip
        });
        return chat;
    }
    async getFormattedMessages(treatment_id, limit = 1000, page = 1) {
        const skip = (page - 1) * limit;
        const chat = await this.prismaService.chat_treatment.findMany({
            where: {
                plan_id: treatment_id
            },
            orderBy: {
                created_at: 'asc'
            },
            take: limit,
            skip: skip
        });
        const messages = chat.flatMap(ch => {
            const result = [];
            if (ch.user_message) {
                result.push({
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: ch.user_message
                        }
                    ]
                });
            }
            if (ch.ai_response && ch.ai_response.trim() !== "") {
                result.push({
                    role: "assistant",
                    content: [
                        {
                            type: "text",
                            text: ch.ai_response
                        }
                    ]
                });
            }
            return result;
        });
        return messages;
    }
};
exports.ChattreatmentService = ChattreatmentService;
exports.ChattreatmentService = ChattreatmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChattreatmentService);
//# sourceMappingURL=chattreatment.service.js.map