import { ICommandHandler } from "@nestjs/cqrs";
import { generatetextcommand } from "../impl/generatechat.command";
import { AiService } from "src/ai/ai.service";
import { CommandBus } from "@nestjs/cqrs";
import { ConversationsService } from "src/conversations/conversations.service";
import { TokenusageService } from "src/tokenusage/tokenusage.service";
import { ImageService } from "src/image/image.service";
import { PaymentsService } from "src/payments/payments.service";
import { RedisService } from "src/redis/redis.service";
export declare class generatetexthandler implements ICommandHandler<generatetextcommand> {
    private readonly Aiservice;
    private readonly commandbus;
    private readonly conversationsService;
    private readonly tokenusageService;
    private readonly imageService;
    private readonly paymentsService;
    private readonly redisService;
    constructor(Aiservice: AiService, commandbus: CommandBus, conversationsService: ConversationsService, tokenusageService: TokenusageService, imageService: ImageService, paymentsService: PaymentsService, redisService: RedisService);
    execute(command: generatetextcommand): Promise<any>;
}
