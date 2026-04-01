import { QueryBus } from '@nestjs/cqrs';
export declare class ChattreatmentController {
    private readonly queryBus;
    constructor(queryBus: QueryBus);
    GetChat(req: any, limit: number, page: number, id: string): Promise<any>;
}
