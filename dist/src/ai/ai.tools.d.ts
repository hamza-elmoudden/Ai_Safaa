import { ImageService } from "src/image/image.service";
import { SkinprofilesService } from "src/skinprofiles/skinprofiles.service";
import { TreatmentService } from "src/treatment/treatment.service";
import { UsersService } from "src/users/users.service";
type SkinProfileResult = {
    error?: string;
    profileSkin?: {
        skin_type: string;
        concerns: string[];
        allergies: string[];
        notes: string;
    };
};
type PathTreatment = {
    path?: any;
};
type GetPhotoInitial = {
    url_initial_photo: string | null;
};
type AddPhotoInitial = {
    url_initial_photo: string;
};
type GetCountry = {
    error?: string;
    country?: string;
};
export declare const CreateTools: (treatmentService: TreatmentService, profileSkinService: SkinprofilesService, imageService: ImageService, userService: UsersService) => {
    getProfileSkin: import("ai").Tool<{
        userId: string;
    }, SkinProfileResult>;
    getPhotoInitial: import("ai").Tool<{
        treatmentId: string;
        userId: string;
    }, GetPhotoInitial>;
    addPhotoInitial: import("ai").Tool<{
        image: any;
        userId: string;
        treatmentId: string;
    }, AddPhotoInitial>;
    getUserCountry: import("ai").Tool<{
        userId: string;
    }, GetCountry>;
    addPathTreatment: import("ai").Tool<{
        userId: string;
        treatmentId: string;
        path: any;
    }, PathTreatment>;
    getTreatmentPath: import("ai").Tool<{
        userId: string;
        treatmentId: string;
    }, PathTreatment>;
};
export declare const CreateToolsTwo: (profileSkinService: SkinprofilesService, userService: UsersService) => {
    getProfileSkin: import("ai").Tool<{
        userId: string;
    }, SkinProfileResult>;
    getUserCountry: import("ai").Tool<{
        userId: string;
    }, GetCountry>;
};
export {};
