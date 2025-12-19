import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { analyzefacecommend } from "../impl/analyzeface.commend";
import { AiService } from "src/ai/ai.service";




@CommandHandler(analyzefacecommend)
export class analyzefacehandler implements ICommandHandler<analyzefacecommend>{

    constructor(
        private readonly Aiservice:AiService
    ){}
    
    
    async execute(command: analyzefacecommend): Promise<any> {
        try {
            return await this.Aiservice.analyzeFaceFromUrl(
                command.text,
                command.image_url
            );
        } catch (error) {
            console.error(`Error Analyze Face Handler : `,error);
            throw new Error("Error analyzing face from URL");
        }
    }
}