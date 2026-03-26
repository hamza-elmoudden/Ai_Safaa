import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { generatetextcommand } from "../impl/generatechat.command";
import { AiService } from "src/ai/ai.service";
import { CommandBus } from "@nestjs/cqrs";
import { analyzefacecommend } from "../impl/analyzeface.commend";
import { ConversationsService } from "src/conversations/conversations.service";
import { TokenusageService } from "src/tokenusage/tokenusage.service";


@CommandHandler(generatetextcommand)
export class generatetexthandler implements ICommandHandler<generatetextcommand> {

    constructor(
        private readonly Aiservice: AiService,
        private readonly commandbus: CommandBus,
        private readonly conversationsService: ConversationsService,
        private readonly tokenusageService: TokenusageService,
    ) { }

    async execute(command: generatetextcommand): Promise<any> {

        let text_ai: string | undefined;

        if (command.image_url) {
            await this.tokenusageService.checkPhotoLimit(command.user_id);

            text_ai = await this.commandbus.execute(
                new analyzefacecommend(command.image_url, command.text)
             );
        }

        const history = await this.conversationsService.getFormattedMessages(
            command.user_id,
            50,
            1
        );

        const result = await this.Aiservice.generatetext(
            command.text,
            text_ai,
            command.user_id,
            history,
        );

        return result.toUIMessageStream({
            onFinish: async ({ responseMessage }) => {

                const textPart = responseMessage.parts?.find(p => p.type === 'text');
                const aiText = textPart?.text ?? '';

                let photo_url: string | undefined;
                let photo_key: string | undefined;

                if (command.image_url) {
                    photo_url = command.image_url;

                    await this.tokenusageService.addTokenUsage({
                        user_id:       command.user_id,
                        source:        'conversation_photo' as any,
                        tokens_input:  0,
                        tokens_output: 0,
                        ai_model:      'openai/gpt-4.1',
                    });
                }

                await this.conversationsService.addConversation(
                    command.user_id,
                    command.text,
                    aiText,
                    photo_url,
                    photo_key,
                );
            }
        });
    }
}