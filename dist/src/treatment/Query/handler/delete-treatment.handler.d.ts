import { IQueryHandler } from "@nestjs/cqrs";
import { DeleteTreatmentQuery } from "../impl/delete-treatment.impl";
import { TreatmentService } from "src/treatment/treatment.service";
export declare class DeleteTreatmentHandler implements IQueryHandler<DeleteTreatmentQuery> {
    private readonly treatmentService;
    constructor(treatmentService: TreatmentService);
    execute(query: DeleteTreatmentQuery): Promise<void>;
}
