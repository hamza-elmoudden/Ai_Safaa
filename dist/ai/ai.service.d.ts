import { ChatMemoryService } from './chat-memory.service';
import { ConfigService } from '@nestjs/config';
import { AiProductsService } from './ai.products.service';
export declare class AiService {
    private readonly ChatMemory;
    private configService;
    private aiproductsservice;
    private chat;
    private faceImage;
    private Products;
    constructor(ChatMemory: ChatMemoryService, configService: ConfigService, aiproductsservice: AiProductsService);
    private SYSTEM_PROMPT;
    private AnalysisPrompt;
    private buildUserPrompt;
    private urlToDataUrl;
    generatetext(text: string, text_ai?: string, userId?: string): Promise<import("ai").AsyncIterableStream<import("ai").InferUIMessageChunk<import("ai").UIMessage<unknown, import("ai").UIDataTypes, import("ai").UITools>>>>;
    analyzeFaceFromUrl(prompt: string | undefined, imageUrl: string | undefined): Promise<string>;
}
