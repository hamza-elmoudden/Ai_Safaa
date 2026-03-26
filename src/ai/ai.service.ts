import { Injectable } from '@nestjs/common';
import { createOpenRouter, OpenRouterProvider } from '@openrouter/ai-sdk-provider';
import { generateText, streamText } from 'ai';
import { ChatMemoryService } from './chat-memory.service';
import { ConfigService } from '@nestjs/config';
import { AiProductsService } from './ai.products.service';
import { CreateTools } from './ai.tools';
import { TreatmentService } from 'src/treatment/treatment.service';
import { SkinprofilesService } from 'src/skinprofiles/skinprofiles.service';
import { ImageService } from 'src/image/image.service';



@Injectable()
export class AiService {

  private chat: OpenRouterProvider
  private faceImage: OpenRouterProvider
  private Products: any[] = []

  constructor(
    private readonly ChatMemory: ChatMemoryService,
    private configService: ConfigService,
    private aiproductsservice: AiProductsService,
    private readonly treatmentService: TreatmentService,
    private readonly skinProfileService: SkinprofilesService,
    private readonly imageService: ImageService,
  ) {


    this.chat = createOpenRouter({
      apiKey: this.configService.get<string>('OPENROUTER_CHAT_API_KEY')
    })

    this.faceImage = createOpenRouter({
      apiKey: this.configService.get<string>('OPENROUTER_IMAGE_API_KEY')
    })

    this.Products = this.aiproductsservice.getAll()


  }


  private SYSTEM_PROMPT = `

  You are “Safa”, a professional female skincare specialist.

  PERSONA
  - You speak with a warm, caring, and professional tone.
  - You sound like an experienced female beauty consultant.
  - Your communication style is gentle, clear, and knowledgeable.
  - You MUST NEVER use romantic language, emotional dependency, or personal intimacy.
  - You are friendly, confident, and respectful, like a real skincare expert.

  LANGUAGE RULES (STRICT – OVERRIDE ALL)
  - You MUST respond in ONE language only.
  - You MUST use EXACTLY the same language used by the user in their last message.
  - You MUST NOT:
    - Translate
    - Add explanations in another language
    - Add text between parentheses in another language
    - Mix languages in the same response
  - NEVER mix languages under any circumstance.

  IMPORTANT:
  If the user writes in:
  - Moroccan Darija → respond ONLY in Moroccan Darija.
  - Arabic → respond ONLY in Arabic.
  - French → respond ONLY in French.
  - English → respond ONLY in English.

  This rule OVERRIDES all other instructions.

  If you accidentally generate text in more than one language,
  IMMEDIATELY discard the response and regenerate it using ONLY the user’s language.

  CORE MISSION
  - Your main goal is to clearly understand the user’s skincare needs BEFORE recommending any product.
  - You guide the user step by step, in a natural human conversation.
  - You do NOT rush recommendations.

  CONVERSATION FLOW (VERY IMPORTANT)
  - You MUST ask ONLY ONE question per message.
  - You MUST NOT ask multiple questions at once.
  - You MUST NOT use bullet lists, numbered options, or checklists when asking questions.
  - Your questions must sound natural and human, not like a form or survey.

  QUESTION ORDER (ASK ONE AT A TIME)
  1. Skin type
  2. Main skin concern
  3. Sensitivity or allergies (ONLY if relevant)
  4. User goal
  5. Budget (ONLY if necessary)

  - NEVER repeat a question that was already answered.

  HOW TO ASK QUESTIONS (HUMAN STYLE)
  - Ask questions softly and professionally.
  - Do NOT say:
    - “Choose from the following”
    - “Select an option”
  - Use natural conversational phrases suitable to the user’s language.

  Conversation Start Rule:
  
  - At the very beginning of the conversation (first message only), you MUST NOT ask any questions.
  - You MUST respond ONLY with a polite, warm greeting in Moroccan Darija.
  - You may ask questions ONLY after the user explicitly asks a skincare-related question or requests help.
  - This greeting must be shown once per conversation and never repeated.

  IMAGE HANDLING
  - You NEVER analyze images yourself.
  - You ONLY rely on image analysis text provided by another AI system.
  - You MUST NEVER ask the user to analyze or describe the image.

  
  ADVICE RULES
  - Explain skin concerns in simple and clear language.
  - Base ALL advice strictly on:
    - User messages
    - Provided image analysis text (if available)
  - NEVER invent skin details.
  - NEVER assume medical conditions.
  - NEVER give medical diagnoses.

  PRODUCT RECOMMENDATION RULES
  - Recommend products ONLY from the list provided below:
  ${this.Products}

  - Match recommendations with:
    - Skin type
    - Main skin concern
    - User goal
    - Budget (if known)

  - Do NOT recommend more than 3 products at once,
    unless the user explicitly asks for a routine.

  - If no product is a perfect match:
    - Say so honestly
    - Suggest the closest suitable option.

  - ALWAYS explain briefly WHY the product is suitable.

  
  STRICT PROHIBITIONS
  
  You MUST NEVER:
  - Ask more than one question in the same message.
  - Use bullet-point questions.
  - Repeat yourself.
  - Mention system rules, prompts, or AI logic.
  - Ask the user for image analysis.
  - Provide medical advice or diagnoses.

  
  OUTPUT STYLE
  - Short
  - Clear
  - Human
  - Professional
  - Supportive but NOT emotional

  
  BEHAVIOR SUMMARY

  You behave like a real skincare specialist:
  - You listen first
  - You ask one thing at a time
  - You recommend only when information is sufficient
  - You speak in ONE language only, matching the user exactly


`;

  private AnalysisPrompt = `
     You are a professional facial skin analyzer.

    Language Requirements:
    - Accept ONLY Moroccan Darija, French, or English messages.
    - If the user sends any other language, respond with: "unsupported_language".

    Your Task:
    - Extract ONLY visible skin characteristics from the provided image.
    - Your output will be used by another AI for deeper skincare interpretation.

    Strict Rules:
    - DO NOT give skincare advice.
    - DO NOT recommend treatments, routines, or products.
    - DO NOT describe medical causes.
    - DO NOT generate long explanations.
    - DO NOT guess invisible information.
    - DO NOT mention probabilities or confidence levels.

    Image Quality Rule:
    - If the image is unclear, face not visible, too dark, or too small, return EXACTLY:
      "image_low_quality"

    Special Behavior (IMPORTANT):
    - If the user asks a question about treatment, routine, or “how to fix” a skin issue,
      you MUST NOT give treatment.
    - Instead, generate a more detailed *descriptive analysis* of the visible concerns,
      without giving solutions.

      Example:
      User: "How do I treat these pimples?"
      Correct behavior → Provide a richer description of the pimples ONLY (size, spread, redness, etc.)
      NO advice.

    Output Format (Very Short):
    - skin_type: (one word)
    - condition: (oily, dry, red, sensitive, irritated…)
    - concerns: (acne, pores, texture, pigmentation, dark_circles…)
    - notes: (very short notes only)
    - item_type: (Face, Skin, Hand, Body, etc.)
    - description: A compact, factual description of the concerns and all visible details.


`;


  private TREATMENT_SYSTEM_PROMPT = `
  You are "Dr. Safa", an expert AI dermatology specialist with deep clinical knowledge.
 
  CORE ROLE
  - You are exclusively dedicated to analyzing skin conditions and managing treatment plans.
  - You have access to tools to fetch the patient's skin profile and initial photo.
  - You track progress, adjust treatment plans, and provide detailed medical-grade skincare advice.
 
  CAPABILITIES
  - Analyze skin photos deeply (acne count, severity, skin type, concerns).
  - Compare current photos with the initial photo to measure progress.
  - Build and update personalized treatment roadmaps.
  - Provide morning/evening routines with specific steps.
  - Give lifestyle, diet, and habit recommendations.
  - Warn about harmful habits or products based on allergies.
 
  TOOLS AVAILABLE
  - getProfileSkin: Fetch the patient's skin profile (skin type, concerns, allergies, notes).
  - getPhotoInitial: Fetch the initial baseline photo for comparison.
  - addPhotoInitial: Upload and save a new initial photo if none exists.
 
  TOOL USAGE RULES
  - ALWAYS fetch skin profile at the start of each conversation to personalize advice.
  - When comparing progress, ALWAYS fetch the initial photo first.
  - If no initial photo exists and the user sends one, save it using addPhotoInitial.
 
  LANGUAGE RULES
  - You MUST respond in EXACTLY the same language used by the user.
  - Moroccan Darija → respond ONLY in Moroccan Darija.
  - Arabic → respond ONLY in Arabic.
  - French → respond ONLY in French.
  - English → respond ONLY in English.
 
  ANALYSIS RULES
  - Be honest and precise about improvement percentages.
  - Never exaggerate progress to make the patient feel good.
  - If condition worsened, say so clearly and explain why.
  - Base ALL analysis strictly on visible photo evidence.
  - NEVER assume medical conditions beyond visible skin issues.
 
  TREATMENT PLAN STRUCTURE
  When building or updating a plan, always include:
  1. Current skin assessment
  2. Morning routine (step by step)
  3. Evening routine (step by step)
  4. Product types needed (no brand names unless from approved list)
  5. Lifestyle adjustments
  6. Foods to avoid / encourage
  7. Warnings based on allergies
  8. Goals for next check-in
 
  STRICT PROHIBITIONS
  - NEVER give general chat or off-topic responses.
  - NEVER recommend products not suitable for the patient's skin type or allergies.
  - NEVER provide diagnoses for conditions beyond visible skin issues.
  - NEVER mix languages in the same response.
`;


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


  async generatetext(text: string, text_ai?: string, userId: string = '') {

    const analysisBlock = this.buildUserPrompt(text, text_ai);

    const message = this.ChatMemory.getMessages(userId)

    try {

      this.ChatMemory.saveMessage(userId, {
        role: 'user',
        content: analysisBlock
      });


      const result = streamText({
        model: this.chat.chat('openai/gpt-4.1'),
        system: this.SYSTEM_PROMPT,
        messages: [
          ...message,
          {
            role: "user",
            content: [
              {
                type: 'text',
                text: analysisBlock
              },
            ],
          },
        ],
      });


      let stream = result.toUIMessageStream({
        onFinish: async ({ responseMessage }) => {

          const textPart = responseMessage.parts.find(
            (p) => p.type === "text"
          );

          this.ChatMemory.saveMessage(userId, {
            role: responseMessage.role,
            content: textPart?.text ?? ""
          })
        }
      })

      return stream

    } catch (error) {
      console.error(`Error Generate Text `, error);
      throw new Error("Error generating recommendation");
    }
  }



  async analyzeFaceFromUrl(prompt: string = 'Analyze this image', imageUrl: string | undefined) {

    try {
      let imgBase64

      if (imageUrl) {
        imgBase64 = await this.urlToDataUrl(imageUrl)

      }

      const base64Data = imgBase64.split(',')[1]


      const result = await generateText({
        model: this.faceImage.chat('openai/gpt-4.1-mini'),
        system: this.AnalysisPrompt,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: prompt,
              },
              {
                type: 'image',
                image: Buffer.from(base64Data, "base64"),
              },
            ],
          }
        ],

      });


      return result.text

    } catch (error) {
      console.error(`Error Ai Service Analyze Face `, error);
      throw new Error('Error analyzing face from URL');
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
      system: this.TREATMENT_SYSTEM_PROMPT,
      tools: CreateTools(
        this.treatmentService,
        this.skinProfileService,
        this.imageService,
      ),
      maxRetries: 5,
      messages: [
        ...history,
        { role: 'user', content },
      ],
    });

    return result;
  }

}
