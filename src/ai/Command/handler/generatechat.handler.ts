import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { generatetextcommand } from "../impl/generatechat.command";
import { AiService } from "src/ai/ai.service";
import { CommandBus } from "@nestjs/cqrs";
import { ConversationsService } from "src/conversations/conversations.service";
import { TokenusageService } from "src/tokenusage/tokenusage.service";
import { ImageService } from "src/image/image.service";
import { BadRequestException } from "@nestjs/common";
import { PaymentsService } from "src/payments/payments.service";


@CommandHandler(generatetextcommand)
export class generatetexthandler implements ICommandHandler<generatetextcommand> {

    constructor(
        private readonly Aiservice: AiService,
        private readonly commandbus: CommandBus,
        private readonly conversationsService: ConversationsService,
        private readonly tokenusageService: TokenusageService,
        private readonly imageService: ImageService,
        private readonly paymentsService: PaymentsService
    ) { }

    async execute(command: generatetextcommand): Promise<any> {

        let text_ai: string | undefined;
        let photo_url: string | undefined;
        let photo_key: string | undefined;
        let payments

        const userId = command.user_id as string;

        payments = await this.paymentsService.getActivePayment(userId)

        if (
            !payments
        ) {
            throw new BadRequestException(
                'Your subscription has expired or is not active. Please renew to continue.'
            );
        }

        if (command.file) {

            await this.tokenusageService.checkPhotoLimit(userId);

            text_ai = await this.Aiservice.analyzeFromBuffer(
                command.file.buffer,
                command.file.mimetype,
                command.text,
            );

            if (text_ai === 'image_low_quality') {
                throw new BadRequestException(
                    'The image is unclear. Please send a clearer photo.'
                );
            }

            const uploaded = await this.imageService.uploadFile(
                command.file.buffer,
                command.file.originalname,
                command.file.mimetype,
            );
            photo_url = uploaded.url;
            photo_key = uploaded.key;
        }

        const history = await this.conversationsService.getFormattedMessages(
            userId,
            50,
            1,
        );

        const result = await this.Aiservice.generatetext(
            command.text,
            text_ai,
            userId,
            history,
        );

        return result.toUIMessageStream({
            onFinish: async ({ responseMessage }) => {
                const textPart = responseMessage.parts?.find(p => p.type === 'text');

                if (photo_url) {
                    await this.tokenusageService.addTokenUsage({
                        user_id: userId,
                        source: 'conversation_photo' as any,
                        tokens_input: 0,
                        tokens_output: 0,
                        ai_model: 'openai/gpt-4.1',
                    });
                }

                await this.conversationsService.addConversation(
                    userId,
                    command.text,
                    textPart?.text ?? '',
                    photo_url,
                    photo_key,
                );
            }
        });
    }
}