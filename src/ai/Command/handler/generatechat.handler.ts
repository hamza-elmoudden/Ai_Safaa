import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { generatetextcommand } from "../impl/generatechat.command";
import { AiService } from "src/ai/ai.service";
import { CommandBus } from "@nestjs/cqrs";
import { analyzefacecommend } from "../impl/analyzeface.commend";
    

@CommandHandler(generatetextcommand)
export class generatetexthandler implements ICommandHandler<generatetextcommand> {

    constructor(
        private readonly Aiservice: AiService,
        private readonly commandbus: CommandBus
    ){}

    async execute(command: generatetextcommand): Promise<any> {
        try {

            let text_ai: string | undefined 

            if (command?.image_url) {
                text_ai = await this.commandbus.execute(new analyzefacecommend(
                    command.image_url,
                    command.text
                ))

            }

            return  this.Aiservice.generatetext(command.text, text_ai,command.user_id)

        } catch (error) {

            console.error(` Error Generate Text Handler `,error)

            throw new Error("Method not implemented.");
        }
    }
}