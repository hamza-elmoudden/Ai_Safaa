export declare class TreatmentAiCommand {
    readonly user_id: string;
    readonly treatment_id: string;
    readonly user_message: string;
    readonly user_image: any;
    limit?: number | undefined;
    page?: number | undefined;
    constructor(user_id: string, treatment_id: string, user_message: string, user_image: any, limit?: number | undefined, page?: number | undefined);
}
