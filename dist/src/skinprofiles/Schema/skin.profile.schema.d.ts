export declare enum Skin_type {
    dry = "dry",
    oily = "oily",
    combination = "combination",
    normal = "normal",
    sensitive = "sensitive"
}
export declare class SkinProfile {
    readonly id: string;
    readonly user_id: string;
    readonly skin_type: Skin_type;
    readonly concerns: string[];
    readonly allergies: string[];
    readonly notes: string;
    readonly created_at: Date;
    readonly updated_at: Date;
    constructor(id: string, user_id: string, skin_type: Skin_type, concerns: string[], allergies: string[], notes: string, created_at: Date, updated_at: Date);
}
