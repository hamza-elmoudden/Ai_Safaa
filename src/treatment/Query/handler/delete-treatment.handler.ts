import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { DeleteTreatmentQuery } from "../impl/delete-treatment.impl";
import { TreatmentService } from "src/treatment/treatment.service";
import { BadRequestException } from "@nestjs/common";
import { Treatment } from "src/treatment/Schema/treatment.schema";


@QueryHandler(DeleteTreatmentQuery)
export class DeleteTreatmentHandler implements IQueryHandler<DeleteTreatmentQuery>{
    constructor(
        private readonly treatmentService:TreatmentService
    ){}

    async execute(query: DeleteTreatmentQuery): Promise<void> {
        let treatmentuser:Treatment | any

        try {
            treatmentuser = await this.treatmentService.findTreatmentById(query.id,query.user_id)
            
            if(!treatmentuser){
                throw new BadRequestException("No Treatment found")
            }

            await this.treatmentService.deleteTreatment(treatmentuser.id)


        } catch (error) {
            console.error('Error In Delete Treatment',error)
            throw new Error("Error In Delete Treatment")
        }
    }
}