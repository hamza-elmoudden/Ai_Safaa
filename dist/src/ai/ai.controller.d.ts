import { CommandBus } from '@nestjs/cqrs';
import { AiDto } from './dto/ai.dto';
import type { Response } from 'express';
export declare class AiController {
    private readonly commandbus;
    constructor(commandbus: CommandBus);
    generatetext(prompt: AiDto, file: Express.Multer.File, res: Response, req: any): Promise<void>;
    treatmentChat(prompt: AiDto, file: Express.Multer.File, res: Response, req: any, treatmentId: string, limit?: number, page?: number): Promise<void>;
}
