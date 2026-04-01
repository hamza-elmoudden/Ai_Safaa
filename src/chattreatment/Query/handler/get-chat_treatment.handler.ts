import { BadGatewayException, Query } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetChatTreatmentQuery } from "../impl/get-chat_treatment.query";
import { ChattreatmentService } from "src/chattreatment/chattreatment.service";
import { TreatmentService } from "src/treatment/treatment.service";
import { Treatment } from "src/treatment/Schema/treatment.schema";



@QueryHandler(GetChatTreatmentQuery)
export class GetChatTreatmentHandler implements IQueryHandler<GetChatTreatmentQuery>{
    constructor(
        private readonly chatTreatmentService:ChattreatmentService,
        private readonly treatmentService:TreatmentService
    ){}

    async execute(query: GetChatTreatmentQuery): Promise<any> {
        let treatment: Treatment | null

        
        treatment = await this.treatmentService.findTreatmentByIdAndUserId(query.user_id,query.plan_id)


        if(!treatment){
            throw new BadGatewayException("You dent have In Treatment chat")
        }


        const chats = await this.chatTreatmentService.getChat(treatment.id,query.limit,query.page)


        return chats
    }

}