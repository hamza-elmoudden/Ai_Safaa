import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Conversation } from './Schema/conversation.schema';
import { Prisma } from 'generated/prisma/browser';

@Injectable()
export class ConversationsService {
    constructor(
        private readonly prismaService: PrismaService
    ) { }


    mapToConversations(data: any) {
        return new Conversation(
            data.id,
            data.user_id,
            data.message_user,
            data.user_photo_url,
            data.user_photo_key,
            data.analysis_photo,
            data.message_ai,
            data.created_at
        )
    }

    async addConversation(user_id: string, user_text: string, ai_text: string, photo_url?: string, photo_kay?: string) {
        return await this.prismaService.conversations.create({
            data: {
                user_id,
                message_ai: ai_text,
                message_user: user_text,
                user_photo_url: photo_url,
                user_photo_key: photo_kay
            }
        })
    }


    async getUserConversation(user_id: string, limit: number = 200, page: number = 1, sort: Prisma.SortOrder = 'asc') {
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

    async getFormattedMessages(user_id: string,limit=20,page=1) {

        const skip = (page - 1 )* limit

        const conversations = await this.prismaService.conversations.findMany({
            where: { user_id },
            orderBy: { created_at: 'asc' },
            take:limit,
            skip:skip,
            
        });

        const messages = conversations.flatMap(conv => {
            const result:any[] = [];

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


    
}
