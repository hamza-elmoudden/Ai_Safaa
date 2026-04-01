import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
export declare class TreatmentController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    CreateTreatment(data: CreateTreatmentDto, req: any): Promise<any>;
    GetAllTreatment(req: any): Promise<any>;
    GetMyTreatment(req: any, id: string): Promise<any>;
    DeleteTreatment(req: any, id: string): Promise<any>;
}
