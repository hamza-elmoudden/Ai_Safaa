import { CommandBus } from '@nestjs/cqrs';
import { AiDto } from './dto/ai.dto';
import type { Response } from 'express';
export declare class AiController {
    private readonly commandbus;
    constructor(commandbus: CommandBus);
    generatetext(prompt: AiDto, file: Express.Multer.File, res: Response, userId: string): Promise<void>;
}
