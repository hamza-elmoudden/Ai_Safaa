import { ConfigService } from '@nestjs/config';
import { TreatmentService } from 'src/treatment/treatment.service';
import { SkinprofilesService } from 'src/skinprofiles/skinprofiles.service';
import { ImageService } from 'src/image/image.service';
import { UsersService } from 'src/users/users.service';
export declare class AiService {
    private configService;
    private readonly treatmentService;
    private readonly skinProfileService;
    private readonly imageService;
    private readonly userService;
    private chat;
    private faceImage;
    private treatment;
    constructor(configService: ConfigService, treatmentService: TreatmentService, skinProfileService: SkinprofilesService, imageService: ImageService, userService: UsersService);
    private buildUserPrompt;
    private urlToDataUrl;
    generatetext(text: string, text_ai?: string, userId?: string, history?: any[]): Promise<import("ai").StreamTextResult<{
        getProfileSkin: import("ai").Tool<{
            userId: string;
        }, {
            error?: string;
            profileSkin?: {
                skin_type: string;
                concerns: string[];
                allergies: string[];
                notes: string;
            };
        }>;
        getUserCountry: import("ai").Tool<{
            userId: string;
        }, {
            error?: string;
            country?: string;
        }>;
    }, never>>;
    analyzeFromBuffer(buffer: Buffer, mimetype: string, userText: string): Promise<string>;
    analyzeFaceFromUrl(prompt: string | undefined, imageUrl: string | undefined): Promise<string>;
    treatmentAnalysis(history: any[], user_text: string, user_image?: string, user_id?: string, treatment_id?: string): Promise<import("ai").StreamTextResult<{
        getProfileSkin: import("ai").Tool<{
            userId: string;
        }, {
            error?: string;
            profileSkin?: {
                skin_type: string;
                concerns: string[];
                allergies: string[];
                notes: string;
            };
        }>;
        getPhotoInitial: import("ai").Tool<{
            treatmentId: string;
            userId: string;
        }, {
            url_initial_photo: string | null;
        }>;
        addPhotoInitial: import("ai").Tool<{
            image: any;
            userId: string;
            treatmentId: string;
        }, {
            url_initial_photo: string;
        }>;
        getUserCountry: import("ai").Tool<{
            userId: string;
        }, {
            error?: string;
            country?: string;
        }>;
        addPathTreatment: import("ai").Tool<{
            userId: string;
            treatmentId: string;
            path: any;
        }, {
            path?: any;
        }>;
        getTreatmentPath: import("ai").Tool<{
            userId: string;
            treatmentId: string;
        }, {
            path?: any;
        }>;
    }, never>>;
}
