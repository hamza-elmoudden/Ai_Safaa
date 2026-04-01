import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { TreatmentAiCommand } from "../impl/treatmentai.command";
import { AiService } from "src/ai/ai.service";
import { TreatmentService } from "src/treatment/treatment.service";
import { BadRequestException } from "@nestjs/common";
import { ChattreatmentService } from "src/chattreatment/chattreatment.service";
import { TokenusageService } from "src/tokenusage/tokenusage.service";
import { PaymentsService } from "src/payments/payments.service";


@CommandHandler(TreatmentAiCommand)
export class TreatmentAiHandler implements ICommandHandler<TreatmentAiCommand> {
    constructor(
        private readonly aiService: AiService,
        private readonly treatmentService: TreatmentService,
        private readonly chatTreatmentService: ChattreatmentService,
        private readonly tokenusageService: TokenusageService,
        private readonly paymentsService: PaymentsService
        
    ) { }


    async execute(command: TreatmentAiCommand): Promise<any> {

        let history: any[]
        let payments

        const userId = command.user_id as string

        payments = await this.paymentsService.getActivePayment(userId)
        
                if (
                    !payments
                ) {
                    throw new BadRequestException(
                        'Your subscription has expired or is not active. Please renew to continue.'
                    );
                }
        

        const treatment = await this.treatmentService.findTreatmentByIdAndUserId(
            command.user_id,
            command.treatment_id
        );

        if (!treatment) {
            throw new BadRequestException("Treatment plan not found");
        }

        if (command.user_image) {
            await this.tokenusageService.checkTreatmentPhotoLimit(command.user_id,command.treatment_id);
        }

        history = await this.chatTreatmentService.getFormattedMessages(
            command.treatment_id,
            command.limit ?? 10000,
            command.page ?? 1
        );

        const stream = await this.aiService.treatmentAnalysis(
            history,
            command.user_message,
            command.user_image,
            command.user_id,
            command.treatment_id
        );

        let fullResponse = '';

        const uiStream = stream.toUIMessageStream({
            onFinish: async ({ responseMessage }) => {
                const textPart = responseMessage.parts?.find(p => p.type === 'text');
                fullResponse = textPart?.text ?? '';

                await this.chatTreatmentService.addChat({
                    plan_id: command.treatment_id,
                    user_message: command.user_message,
                    ai_response: fullResponse,
                    have_photo: !!command.user_image,
                    image_url: command.user_image ?? null,
                    image_key: null,
                    day_number: null,
                } as any);

                if (command.user_image) {
                    await this.tokenusageService.addTokenUsage({
                        user_id: command.user_id,
                        source: 'conversation_photo' as any,
                        ref_id: command.treatment_id,
                        plan_id: command.treatment_id,
                        tokens_input: 0,
                        tokens_output: 0,
                        ai_model: 'openai/gpt-4.1',
                    });
                }
            }
        });

        return uiStream;
    }
}