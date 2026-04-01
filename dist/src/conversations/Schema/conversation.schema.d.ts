export declare class Conversation {
    readonly id: string;
    readonly user_id: string;
    readonly message_user: string;
    readonly message_ai: string;
    readonly created_at: string;
    readonly user_photo_url?: string | undefined;
    readonly user_photo_key?: string | undefined;
    readonly analysis_photo?: string | undefined;
    constructor(id: string, user_id: string, message_user: string, message_ai: string, created_at: string, user_photo_url?: string | undefined, user_photo_key?: string | undefined, analysis_photo?: string | undefined);
}
