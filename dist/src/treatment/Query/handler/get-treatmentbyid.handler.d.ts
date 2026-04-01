import { IQueryHandler } from "@nestjs/cqrs";
import { GetTreatmentByIdQuery } from "../impl/get-treatmentbyid.impl";
import { TreatmentService } from "src/treatment/treatment.service";
export declare class GetTreatmentByIdHandler implements IQueryHandler<GetTreatmentByIdQuery> {
    private readonly treatmentService;
    constructor(treatmentService: TreatmentService);
    execute(query: GetTreatmentByIdQuery): Promise<any>;
}
