import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { TreatmentAiCommand } from "../impl/treatmentai.command";
import { AiService } from "src/ai/ai.service";
import { TreatmentService } from "src/treatment/treatment.service";
import { BadRequestException } from "@nestjs/common";
import { ChattreatmentService } from "src/chattreatment/chattreatment.service";


@CommandHandler(TreatmentAiCommand)
export class TreatmentAiHandler implements ICommandHandler<TreatmentAiCommand> {
    constructor(
        private readonly aiService: AiService,
        private readonly treatmentService: TreatmentService,
        private readonly chatTreatmentService: ChattreatmentService,
    ) { }


    async execute(command: TreatmentAiCommand): Promise<any> {

        let message: any[]

        const treatment = await this.treatmentService.findTreatmentByIdAndUserId(command.user_id, command.treatment_id)

        if (treatment) {

            throw new BadRequestException("You Dent Have Any Treatment")

        }
 
        message = await this.chatTreatmentService.getFormattedMessages(command.treatment_id, command.limit = 10000, command.page = 1)


        return this.aiService.treatmentAnalysis(message,command.user_message,command.user_image)
    }
}