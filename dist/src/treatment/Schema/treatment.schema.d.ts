import { Decimal } from "@prisma/client/runtime/index-browser";
export declare enum plan_status {
    active = "active",
    completed = "completed",
    paused = "paused",
    cancelled = "cancelled"
}
export declare enum areas_treated {
    Face = "Face",
    Neck = "Neck",
    Back = "Back",
    Scalp = "Scalp",
    Hair = "Hair",
    Nails = "Nails"
}
export declare class Treatment {
    id: string;
    user_id: string;
    title: string;
    status: plan_status;
    improvement_pct: Decimal | null;
    areas_treated: areas_treated;
    duration_days: number;
    initial_photo_url: string;
    initial_photo_key: string;
    ai_diagnosis: string | null;
    ai_model: string | null;
    next_checkin_at: Date | null;
    started_at: Date;
    completed_at: Date | null;
    created_at: Date;
    updated_at: Date;
    path: any | null;
    constructor(id: string, user_id: string, title: string, status: plan_status, improvement_pct: Decimal | null, areas_treated: areas_treated, duration_days: number, initial_photo_url: string, initial_photo_key: string, ai_diagnosis: string | null, ai_model: string | null, next_checkin_at: Date | null, started_at: Date, completed_at: Date | null, created_at: Date, updated_at: Date, path: any | null);
}
