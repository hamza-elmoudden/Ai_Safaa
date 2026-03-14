import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetTreatmentByIdQuery } from "../impl/get-treatmentbyid.impl";
import { Treatment } from "src/treatment/Schema/treatment.schema";
import { TreatmentService } from "src/treatment/treatment.service";


@QueryHandler(GetTreatmentByIdQuery)
export class GetTreatmentByIdHandler implements IQueryHandler<GetTreatmentByIdQuery>{
    constructor(
        private readonly treatmentService:TreatmentService
    ){}
    async execute(query: GetTreatmentByIdQuery): Promise<any> {
        let userTreatment:Treatment | null

        try {
            userTreatment = await this.treatmentService.findTreatmentById(query.id)
        } catch (error) {
            console.error('Error In Get Treatment by id',error)
            throw new Error('Error In Get Treatment')
        }

        return userTreatment
    }
}