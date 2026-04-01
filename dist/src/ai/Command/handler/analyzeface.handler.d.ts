import { ICommandHandler } from "@nestjs/cqrs";
import { analyzefacecommend } from "../impl/analyzeface.commend";
import { AiService } from "src/ai/ai.service";
export declare class analyzefacehandler implements ICommandHandler<analyzefacecommend> {
    private readonly Aiservice;
    constructor(Aiservice: AiService);
    execute(command: analyzefacecommend): Promise<any>;
}
