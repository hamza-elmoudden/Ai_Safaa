import { PrismaService } from 'src/prisma/prisma.service';
import { Conversation } from './Schema/conversation.schema';
import { Prisma } from 'generated/prisma/browser';
export declare class ConversationsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    mapToConversations(data: any): Conversation;
    addConversation(user_id: string, user_text: string, ai_text: string, photo_url?: string, photo_kay?: string): Promise<{
        id: string;
        created_at: Date;
        user_id: string;
        message_user: string;
        user_photo_url: string | null;
        user_photo_key: string | null;
        analysis_photo: string | null;
        message_ai: string;
    }>;
    getUserConversation(user_id: string, limit?: number, page?: number, sort?: Prisma.SortOrder): Promise<{
        id: string;
        created_at: Date;
        user_id: string;
        message_user: string;
        user_photo_url: string | null;
        user_photo_key: string | null;
        analysis_photo: string | null;
        message_ai: string;
    }[]>;
    getFormattedMessages(user_id: string, limit?: number, page?: number): Promise<any[]>;
}
