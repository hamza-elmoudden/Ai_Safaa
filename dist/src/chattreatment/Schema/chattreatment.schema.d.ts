export declare class ChatTreatment {
    readonly id: string;
    readonly plan_id: string;
    readonly user_message: string;
    readonly ai_response: string;
    readonly have_photo: boolean;
    readonly day_number?: number | undefined;
    readonly image_url?: string | undefined;
    readonly image_key?: string | undefined;
    constructor(id: string, plan_id: string, user_message: string, ai_response: string, have_photo: boolean, day_number?: number | undefined, image_url?: string | undefined, image_key?: string | undefined);
}
