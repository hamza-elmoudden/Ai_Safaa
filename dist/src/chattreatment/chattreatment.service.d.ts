import { PrismaService } from 'src/prisma/prisma.service';
import { ChatTreatment } from './Schema/chattreatment.schema';
export declare class ChattreatmentService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    addChat(data: ChatTreatment): Promise<{
        id: string;
        plan_id: string;
        user_message: string;
        ai_response: string;
        have_photo: boolean;
        day_number: number | null;
        image_url: string | null;
        image_key: string | null;
        created_at: Date;
    }>;
    getChat(treatment_id: string, limit?: number, page?: number): Promise<{
        id: string;
        plan_id: string;
        user_message: string;
        ai_response: string;
        have_photo: boolean;
        day_number: number | null;
        image_url: string | null;
        image_key: string | null;
        created_at: Date;
    }[]>;
    getFormattedMessages(treatment_id: string, limit?: number, page?: number): Promise<any[]>;
}
