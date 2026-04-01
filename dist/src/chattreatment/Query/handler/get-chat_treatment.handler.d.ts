import { IQueryHandler } from "@nestjs/cqrs";
import { GetChatTreatmentQuery } from "../impl/get-chat_treatment.query";
import { ChattreatmentService } from "src/chattreatment/chattreatment.service";
import { TreatmentService } from "src/treatment/treatment.service";
export declare class GetChatTreatmentHandler implements IQueryHandler<GetChatTreatmentQuery> {
    private readonly chatTreatmentService;
    private readonly treatmentService;
    constructor(chatTreatmentService: ChattreatmentService, treatmentService: TreatmentService);
    execute(query: GetChatTreatmentQuery): Promise<any>;
}
