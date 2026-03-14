import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetAllTreatmentByUserIdQuery } from "../impl/get-all-treatmentuser.impl";
import { Treatment } from "src/treatment/Schema/treatment.schema";
import { TreatmentService } from "src/treatment/treatment.service";


@QueryHandler(GetAllTreatmentByUserIdQuery)
export class GetAllTreatmentByUserId implements IQueryHandler<GetAllTreatmentByUserIdQuery>{
    constructor(
        private readonly treatmentService:TreatmentService
    ){}

    async execute(query: GetAllTreatmentByUserIdQuery): Promise<any> {
        let userTreatments:Treatment[] | []

        try {
            userTreatments = await this.treatmentService.findTreatmentsByUserId(query.user_id)
        } catch (error) {
            console.error('Error In Get All Treatment For User',error)
            throw new Error("Error In Get All Treatment For User")
        }

        return userTreatments
    }
}