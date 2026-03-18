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

        try {
            treatment = await this.treatmentService.findTreatmentByIdAndUserId(query.user_id,query.plan_id)

        } catch (error) {
            console.error("Error in get treatment chat ",error)
            throw new Error("Error in get treatment chat ")
        }

        if(!treatment){
            throw new BadGatewayException("You dent have In Treatment chat")
        }


        return await this.chatTreatmentService.getChat(treatment.id,query.limit,query.page)
    }

}