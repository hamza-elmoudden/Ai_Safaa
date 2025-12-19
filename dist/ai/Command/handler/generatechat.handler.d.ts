import { ICommandHandler } from "@nestjs/cqrs";
import { generatetextcommand } from "../impl/generatechat.command";
import { AiService } from "src/ai/ai.service";
import { CommandBus } from "@nestjs/cqrs";
export declare class generatetexthandler implements ICommandHandler<generatetextcommand> {
    private readonly Aiservice;
    private readonly commandbus;
    constructor(Aiservice: AiService, commandbus: CommandBus);
    execute(command: generatetextcommand): Promise<any>;
}
