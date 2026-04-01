import { ICommandHandler } from "@nestjs/cqrs";
import { TreatmentAiCommand } from "../impl/treatmentai.command";
import { AiService } from "src/ai/ai.service";
import { TreatmentService } from "src/treatment/treatment.service";
import { ChattreatmentService } from "src/chattreatment/chattreatment.service";
import { TokenusageService } from "src/tokenusage/tokenusage.service";
import { PaymentsService } from "src/payments/payments.service";
export declare class TreatmentAiHandler implements ICommandHandler<TreatmentAiCommand> {
    private readonly aiService;
    private readonly treatmentService;
    private readonly chatTreatmentService;
    private readonly tokenusageService;
    private readonly paymentsService;
    constructor(aiService: AiService, treatmentService: TreatmentService, chatTreatmentService: ChattreatmentService, tokenusageService: TokenusageService, paymentsService: PaymentsService);
    execute(command: TreatmentAiCommand): Promise<any>;
}
