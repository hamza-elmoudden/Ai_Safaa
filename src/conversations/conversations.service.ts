import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Conversation } from './Schema/conversation.schema';

@Injectable()
export class ConversationsService {
    constructor(
        private readonly prismaService: PrismaService
    ) { }


    mapToConversations(data:any){
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

    async addMessage(user_id: string, user_text: string, ai_text: string, photo_url?: string, photo_kay?: string) {
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



    async getUserMessage(user_id: string, limit: number, page: number) {
        const skip = (page - 1) * limit;
        return await this.prismaService.conversations.findMany({
            where: {
                user_id
            },
            orderBy: {
                created_at: "desc"
            },
            take: limit,
            skip: skip
        });
    }
}
