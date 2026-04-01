import { Injectable } from '@nestjs/common';
import { createOpenRouter, OpenRouterProvider } from '@openrouter/ai-sdk-provider';
import { generateText, stepCountIs, streamText } from 'ai';
import { ConfigService } from '@nestjs/config';
import { CreateTools, CreateToolsTwo } from './ai.tools';
import { TreatmentService } from 'src/treatment/treatment.service';
import { SkinprofilesService } from 'src/skinprofiles/skinprofiles.service';
import { ImageService } from 'src/image/image.service';
import { UsersService } from 'src/users/users.service';
import { AnalysisPrompt, SYSTEM_PROMPT, TREATMENT_SYSTEM_PROMPT } from './ai.prompt';


@Injectable()
export class AiService {

  private chat: OpenRouterProvider
  private faceImage: OpenRouterProvider
  private treatment: OpenRouterProvider

  constructor(
    private configService: ConfigService,
    private readonly treatmentService: TreatmentService,
    private readonly skinProfileService: SkinprofilesService,
    private readonly imageService: ImageService,
    private readonly userService: UsersService
  ) {


    this.chat = createOpenRouter({
      apiKey: this.configService.get<string>('GEMINI_KEY')
    })

    this.treatment = createOpenRouter({
      apiKey: this.configService.get<string>('CLAUDIA_KEY')
    })

    this.faceImage = createOpenRouter({
      apiKey: this.configService.get<string>('OPENROUTER_IMAGE_API_KEY')
    })

  }





  private buildUserPrompt(userMessage: string, analysis?: string) {
    const analysisBlock = analysis
      ? `Image analysis:\n${analysis}\n`
      : '';

    return ` ${analysisBlock} User message: ${userMessage}`;
  }

  private async urlToDataUrl(url: string): Promise<string> {
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

    } catch (error) {
      console.error('Error converting URL to Data URL:', error);
      throw new Error('Failed to convert image URL to base64');
    }
  }


  async generatetext(
    text: string,
    text_ai?: string,
    userId?: string,
    history: any[] = [],
  ) {
    const analysisBlock = this.buildUserPrompt(text, text_ai);
    try {

      const systemWithUserId = `${SYSTEM_PROMPT} CURRENT USER ID (use this for all tool calls): ${userId}`;
      const result = streamText({
        model: this.chat.chat('google/gemini-3-flash-preview'),
        system: systemWithUserId,
        tools: CreateToolsTwo(
          this.skinProfileService,
          this.userService,
        ),
        maxRetries: 9,
        stopWhen: stepCountIs(5),
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

    } catch (error) {
      console.error('Error Generate Text', error);
      throw new Error('Error generating recommendation');
    }
  }


  async analyzeFromBuffer(
    buffer: Buffer,
    mimetype: string,
    userText: string,
  ): Promise<string> {
    try {
      const result = await generateText({
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

    } catch (error) {
      console.error('Error analyzeFromBuffer:', error);
      throw new Error('Failed to analyze image');
    }
  }


  async analyzeFaceFromUrl(prompt: string = 'Analyze this image', imageUrl: string | undefined) {
    try {
      if (!imageUrl) throw new Error('No image URL provided');

      const imgBase64 = await this.urlToDataUrl(imageUrl);
      const base64Data = imgBase64.split(',')[1];

      const result = await generateText({
        model: this.faceImage.chat('openai/gpt-4.1-mini'),
        system: AnalysisPrompt,
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

    } catch (error) {
      console.error('Error Ai Service Analyze Face', error);
      throw new Error('Error analyzing face from URL');
    }
  }


  async treatmentAnalysis(
    history: any[],
    user_text: string,
    user_image?: string,
    user_id?: string,
    treatment_id?: string,
  ) {
    const content: any[] = [
      { type: 'text', text: user_text },
    ];

    if (user_image) {
      content.push({
        type: 'image',
        image: user_image,
      });
    }

    const systemWithUserId = `${TREATMENT_SYSTEM_PROMPT} (use this for all tool calls) : CURRENT USER ID: ${user_id} and TREATMENT ID: ${treatment_id}`;
    
    const result = streamText({
      model: this.treatment.chat('anthropic/claude-sonnet-4.6'),

      system: systemWithUserId,

      stopWhen: stepCountIs(8),

      toolChoice: 'auto',

      tools: CreateTools(
        this.treatmentService,
        this.skinProfileService,
        this.imageService,
        this.userService
      ),

      messages: [
        ...history,
        { role: 'user', content },
      ],
      
      maxOutputTokens: 2000
    });

    return result;
  }

}
