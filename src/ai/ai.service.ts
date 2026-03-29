import { Injectable } from '@nestjs/common';
import { createOpenRouter, OpenRouterProvider } from '@openrouter/ai-sdk-provider';
import { generateText, streamText } from 'ai';
import { ConfigService } from '@nestjs/config';
import { AiProductsService } from './ai.products.service';
import { CreateTools,CreateToolsTwo } from './ai.tools';
import { TreatmentService } from 'src/treatment/treatment.service';
import { SkinprofilesService } from 'src/skinprofiles/skinprofiles.service';
import { ImageService } from 'src/image/image.service';
import { UsersService } from 'src/users/users.service';
import { AnalysisPrompt, SYSTEM_PROMPT, TREATMENT_SYSTEM_PROMPT } from './ai.prompt';



@Injectable()
export class AiService {

  private chat: OpenRouterProvider
  private faceImage: OpenRouterProvider
  private Products: any[] = []

  constructor(
    private configService: ConfigService,
    private aiproductsservice: AiProductsService,
    private readonly treatmentService: TreatmentService,
    private readonly skinProfileService: SkinprofilesService,
    private readonly imageService: ImageService,
    private readonly userService:UsersService
  ) {


    this.chat = createOpenRouter({
      apiKey: this.configService.get<string>('OPENROUTER_CHAT_API_KEY')
    })

    this.faceImage = createOpenRouter({
      apiKey: this.configService.get<string>('OPENROUTER_IMAGE_API_KEY')
    })

    this.Products = this.aiproductsservice.getAll()


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
    userId: string = '',
    history: any[] = [],  
  ) {
    const analysisBlock = this.buildUserPrompt(text, text_ai);
 
    try {
      const result = streamText({
        model: this.chat.chat('openai/gpt-4.1'),
        system: SYSTEM_PROMPT,
        tools: CreateToolsTwo(
            this.skinProfileService,
            this.userService
        ),
        maxRetries:2,
        messages: [
          ...history,  
          {
            role: 'user',
            content: [{ type: 'text', text: analysisBlock }],
          },
        ],
        maxOutputTokens:100
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
        maxOutputTokens: 10
      });
 
      return result.text?.trim() ?? 'image_low_quality';
 
    } catch (error) {
      console.error('Error analyzeFromBuffer:', error);
      throw new Error('Failed to analyze image');
    }
  }


  async treatmentAnalysis(
    history: any[],
    user_text: string,
    user_image?: string,
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

    const result = streamText({
      model: this.chat.chat('openai/gpt-4.1'),
      system: TREATMENT_SYSTEM_PROMPT,
      tools: CreateTools(
        this.treatmentService,
        this.skinProfileService,
        this.imageService,
        this.userService

      ),
      maxRetries: 5,
      messages: [
        ...history,
        { role: 'user', content },
      ],
      maxOutputTokens: 500
    });

    return result;
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

}
