import { PrismaService } from 'src/prisma/prisma.service';
import { Treatment } from './Schema/treatment.schema';
export declare class TreatmentService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    mapTreatment(treatment: any): Treatment;
    createTreatment(data: Treatment): Promise<Treatment>;
    findTreatmentById(id: string, user_id: string): Promise<Treatment | null>;
    findTreatmentsByUserId(user_id: string): Promise<Treatment[] | []>;
    findTreatmentByIdAndUserId(user_id: string, id: string): Promise<Treatment | null>;
    deleteTreatment(id: string): Promise<void>;
    countActiveTreatments(user_id: string): Promise<number>;
    countTreatmentsInCurrentPeriod(user_id: string, periodStart: Date, periodEnd: Date): Promise<number>;
    addPhoto(Photo_url: string, Photo_key: string, treatment_id: string, user_id: string): Promise<string | null>;
    getPhotoInitial(user_id: string, treatment_id: string): Promise<string | null>;
    updateDiagnosis(id: string, data: {
        ai_diagnosis: string;
        day_0_acne_count: number;
        ai_model: string;
        next_checkin_at: Date;
    }): Promise<{
        path: import("@prisma/client/runtime/client").JsonValue | null;
        id: string;
        created_at: Date;
        user_id: string;
        status: import("../../generated/prisma/enums").plan_status;
        updated_at: Date;
        title: string;
        improvement_pct: import("@prisma/client-runtime-utils").Decimal | null;
        areas_treated: import("../../generated/prisma/enums").areas_treated;
        initial_photo_url: string | null;
        initial_photo_key: string | null;
        ai_diagnosis: string | null;
        ai_model: string | null;
        next_checkin_at: Date | null;
        started_at: Date;
        completed_at: Date | null;
        duration_days: number;
    }>;
    updateProgress(id: string, data: {
        improvement_pct: number;
        next_checkin_at: Date;
    }): Promise<{
        path: import("@prisma/client/runtime/client").JsonValue | null;
        id: string;
        created_at: Date;
        user_id: string;
        status: import("../../generated/prisma/enums").plan_status;
        updated_at: Date;
        title: string;
        improvement_pct: import("@prisma/client-runtime-utils").Decimal | null;
        areas_treated: import("../../generated/prisma/enums").areas_treated;
        initial_photo_url: string | null;
        initial_photo_key: string | null;
        ai_diagnosis: string | null;
        ai_model: string | null;
        next_checkin_at: Date | null;
        started_at: Date;
        completed_at: Date | null;
        duration_days: number;
    }>;
    addPathTreatment(user_id: string, treatment_id: string, path: any): Promise<{
        path: import("@prisma/client/runtime/client").JsonValue;
    }>;
    getPathTreatment(user_id: string, treatment_id: string): Promise<string | number | true | import("@prisma/client/runtime/client").JsonObject | import("@prisma/client/runtime/client").JsonArray | null>;
    addDurationDays(user_id: string, treatment_id: string, duration: number): Promise<{
        duration_days: number;
    }>;
    getDurationAndStart(user_id: string, treatment_id: string): Promise<{
        duration_days: number;
        started_at: Date;
    } | null>;
    addCompletedAt(user_id: string, treatment_id: string, completed_at: Date): Promise<{
        status: import("../../generated/prisma/enums").plan_status;
        completed_at: Date | null;
    }>;
    addTitle(user_id: string, treatment_id: string, title: string): Promise<{
        title: string;
    }>;
    getTitle(user_id: string, treatment_id: string): Promise<string | null>;
}
