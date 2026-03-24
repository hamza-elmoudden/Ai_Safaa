import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { TreatmentAiCommand } from "../impl/treatmentai.command";
import { AiService } from "src/ai/ai.service";
import { TreatmentService } from "src/treatment/treatment.service";


@CommandHandler(TreatmentAiCommand)
export class TreatmentAiHandler implements ICommandHandler<TreatmentAiCommand>{
    constructor(
        private readonly aiService:AiService,
        private readonly treatmentService:TreatmentService
    ){}
    execute(command: TreatmentAiCommand): Promise<any> {
        throw new Error("Method not implemented.");
    }
}