import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChatTreatment } from './Schema/chattreatment.schema';

@Injectable()
export class ChattreatmentService {
    constructor(
        private readonly prismaService: PrismaService
    ) { }


    async addChat(data: ChatTreatment) {
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
        })

        return chat
    }



    async getChat(treatment_id: string, limit: number = 10, page: number = 1) {

        const skip = (page - 1) * limit

        const chat = await this.prismaService.chat_treatment.findMany({
            where: {
                plan_id: treatment_id
            },
            orderBy: {
                created_at: "asc"
            },
            take: limit,
            skip
        })

        return chat
    }


    async getFormattedMessages(treatment_id: string, limit = 20, page = 1) {
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
            const result: any[] = [];

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

}
