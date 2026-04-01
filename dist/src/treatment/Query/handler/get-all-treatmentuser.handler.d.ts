import { IQueryHandler } from "@nestjs/cqrs";
import { GetAllTreatmentByUserIdQuery } from "../impl/get-all-treatmentuser.impl";
import { TreatmentService } from "src/treatment/treatment.service";
export declare class GetAllTreatmentByUserId implements IQueryHandler<GetAllTreatmentByUserIdQuery> {
    private readonly treatmentService;
    constructor(treatmentService: TreatmentService);
    execute(query: GetAllTreatmentByUserIdQuery): Promise<any>;
}
