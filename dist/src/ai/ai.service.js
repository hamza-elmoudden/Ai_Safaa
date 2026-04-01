"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiService = void 0;
const common_1 = require("@nestjs/common");
const ai_sdk_provider_1 = require("@openrouter/ai-sdk-provider");
const ai_1 = require("ai");
const config_1 = require("@nestjs/config");
const ai_tools_1 = require("./ai.tools");
const treatment_service_1 = require("../treatment/treatment.service");
const skinprofiles_service_1 = require("../skinprofiles/skinprofiles.service");
const image_service_1 = require("../image/image.service");
const users_service_1 = require("../users/users.service");
const ai_prompt_1 = require("./ai.prompt");
let AiService = class AiService {
    configService;
    treatmentService;
    skinProfileService;
    imageService;
    userService;
    chat;
    faceImage;
    treatment;
    constructor(configService, treatmentService, skinProfileService, imageService, userService) {
        this.configService = configService;
        this.treatmentService = treatmentService;
        this.skinProfileService = skinProfileService;
        this.imageService = imageService;
        this.userService = userService;
        this.chat = (0, ai_sdk_provider_1.createOpenRouter)({
            apiKey: this.configService.get('GEMINI_KEY')
        });
        this.treatment = (0, ai_sdk_provider_1.createOpenRouter)({
            apiKey: this.configService.get('CLAUDIA_KEY')
        });
        this.faceImage = (0, ai_sdk_provider_1.createOpenRouter)({
            apiKey: this.configService.get('OPENROUTER_IMAGE_API_KEY')
        });
    }
    buildUserPrompt(userMessage, analysis) {
        const analysisBlock = analysis
            ? `Image analysis:\n${analysis}\n`
            : '';
        return ` ${analysisBlock} User message: ${userMessage}`;
    }
    async urlToDataUrl(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch image: ${response.statusText}`);
            }
            const blob = await response.blob();
            const arrayBuffer = await blob.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const base64 = buffer.toString('base64');
            const contentType = response.headers.get('content-type') || 'image/jpeg';
            return `data:${contentType};base64,${base64}`;
        }
        catch (error) {
            console.error('Error converting URL to Data URL:', error);
            throw new Error('Failed to convert image URL to base64');
        }
    }
    async generatetext(text, text_ai, userId, history = []) {
        const analysisBlock = this.buildUserPrompt(text, text_ai);
        try {
            const systemWithUserId = `${ai_prompt_1.SYSTEM_PROMPT} CURRENT USER ID (use this for all tool calls): ${userId}`;
            const result = (0, ai_1.streamText)({
                model: this.chat.chat('google/gemini-3-flash-preview'),
                system: systemWithUserId,
                tools: (0, ai_tools_1.CreateToolsTwo)(this.skinProfileService, this.userService),
                maxRetries: 9,
                stopWhen: (0, ai_1.stepCountIs)(5),
                messages: [
                    ...history,
                    {
                        role: 'user',
                        content: [{ type: 'text', text: `${analysisBlock}` }],
                    },
                ],
                toolChoice: 'auto',
                maxOutputTokens: 1000,
            });
            return result;
        }
        catch (error) {
            console.error('Error Generate Text', error);
            throw new Error('Error generating recommendation');
        }
    }
    async analyzeFromBuffer(buffer, mimetype, userText) {
        try {
            const result = await (0, ai_1.generateText)({
                model: this.faceImage.chat('openai/gpt-4.1-mini'),
                system: `
        Examine the image to ensure it is clear for analysis. 
        return only image_good_quality and 
        if not return only image_low_quality

        Example response:
          if the image clear for analysis response is : image_good_quality
          not response : image_low_quality
        `,
                messages: [{
                        role: 'user',
                        content: [
                            { type: 'text', text: userText },
                            { type: 'image', image: buffer },
                        ],
                    }],
                maxOutputTokens: 1000
            });
            return result.text?.trim() ?? 'image_low_quality';
        }
        catch (error) {
            console.error('Error analyzeFromBuffer:', error);
            throw new Error('Failed to analyze image');
        }
    }
    async analyzeFaceFromUrl(prompt = 'Analyze this image', imageUrl) {
        try {
            if (!imageUrl)
                throw new Error('No image URL provided');
            const imgBase64 = await this.urlToDataUrl(imageUrl);
            const base64Data = imgBase64.split(',')[1];
            const result = await (0, ai_1.generateText)({
                model: this.faceImage.chat('openai/gpt-4.1-mini'),
                system: ai_prompt_1.AnalysisPrompt,
                messages: [{
                        role: 'user',
                        content: [
                            { type: 'text', text: prompt },
                            { type: 'image', image: Buffer.from(base64Data, 'base64') },
                        ],
                    }],
                maxOutputTokens: 100
            });
            return result.text;
        }
        catch (error) {
            console.error('Error Ai Service Analyze Face', error);
            throw new Error('Error analyzing face from URL');
        }
    }
    async treatmentAnalysis(history, user_text, user_image, user_id, treatment_id) {
        const content = [
            { type: 'text', text: user_text },
        ];
        if (user_image) {
            content.push({
                type: 'image',
                image: user_image,
            });
        }
        const systemWithUserId = `${ai_prompt_1.TREATMENT_SYSTEM_PROMPT} (use this for all tool calls) : CURRENT USER ID: ${user_id} and TREATMENT ID: ${treatment_id}`;
        const result = (0, ai_1.streamText)({
            model: this.treatment.chat('anthropic/claude-sonnet-4.6'),
            system: systemWithUserId,
            stopWhen: (0, ai_1.stepCountIs)(8),
            toolChoice: 'auto',
            tools: (0, ai_tools_1.CreateTools)(this.treatmentService, this.skinProfileService, this.imageService, this.userService),
            messages: [
                ...history,
                { role: 'user', content },
            ],
            maxOutputTokens: 2000
        });
        return result;
    }
};
exports.AiService = AiService;
exports.AiService = AiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        treatment_service_1.TreatmentService,
        skinprofiles_service_1.SkinprofilesService,
        image_service_1.ImageService,
        users_service_1.UsersService])
], AiService);
//# sourceMappingURL=ai.service.js.map