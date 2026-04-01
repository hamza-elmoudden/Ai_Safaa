"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreatmentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const treatment_schema_1 = require("./Schema/treatment.schema");
let TreatmentService = class TreatmentService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    mapTreatment(treatment) {
        return new treatment_schema_1.Treatment(treatment.id, treatment.user_id, treatment.title, treatment.status, treatment.improvement_pct ?? 0, treatment.areas_treated, treatment.duration_days ?? 0, treatment.initial_photo_url, treatment.initial_photo_key, treatment.ai_diagnosis ?? null, treatment.ai_model ?? "gpt-4-vision-preview", treatment.next_checkin_at ?? null, treatment.started_at, treatment.completed_at ?? null, treatment.created_at, treatment.updated_at, treatment.path ?? null);
    }
    async createTreatment(data) {
        const treatment = await this.prisma.treatment_plans.create({
            data: {
                id: data.id,
                user_id: data.user_id,
                title: `${data.areas_treated} - ${new Date().toLocaleDateString()}`,
                areas_treated: data.areas_treated,
                ai_model: data.ai_model,
            }
        });
        return this.mapTreatment(treatment);
    }
    async findTreatmentById(id, user_id) {
        const treatment = await this.prisma.treatment_plans.findUnique({
            where: {
                id: id,
                user_id
            }
        });
        return treatment ? this.mapTreatment(treatment) : null;
    }
    async findTreatmentsByUserId(user_id) {
        const treatments = await this.prisma.treatment_plans.findMany({
            where: {
                user_id: user_id
            }
        });
        return treatments.map(treatment => this.mapTreatment(treatment));
    }
    async findTreatmentByIdAndUserId(user_id, id) {
        const treatment = await this.prisma.treatment_plans.findUnique({
            where: {
                id,
                user_id
            }
        });
        return treatment ? this.mapTreatment(treatment) : null;
    }
    async deleteTreatment(id) {
        await this.prisma.treatment_plans.update({
            where: {
                id: id
            },
            data: {
                status: 'cancelled'
            }
        });
    }
    async countActiveTreatments(user_id) {
        return await this.prisma.treatment_plans.count({
            where: {
                user_id,
            },
        });
    }
    async countTreatmentsInCurrentPeriod(user_id, periodStart, periodEnd) {
        return await this.prisma.treatment_plans.count({
            where: {
                user_id,
                created_at: {
                    gte: periodStart,
                    lt: periodEnd,
                },
            },
        });
    }
    async addPhoto(Photo_url, Photo_key, treatment_id, user_id) {
        const photo = await this.prisma.treatment_plans.update({
            where: {
                id: treatment_id,
                user_id
            },
            data: {
                initial_photo_key: Photo_key,
                initial_photo_url: Photo_url
            }
        });
        return photo.initial_photo_url;
    }
    async getPhotoInitial(user_id, treatment_id) {
        const photo = await this.prisma.treatment_plans.findUnique({
            where: {
                user_id,
                id: treatment_id
            }
        });
        return photo?.initial_photo_url ? photo.initial_photo_url : null;
    }
    async updateDiagnosis(id, data) {
        return await this.prisma.treatment_plans.update({
            where: { id },
            data: {
                ai_diagnosis: data.ai_diagnosis,
                ai_model: data.ai_model,
                next_checkin_at: data.next_checkin_at,
                updated_at: new Date(),
            },
        });
    }
    async updateProgress(id, data) {
        return await this.prisma.treatment_plans.update({
            where: { id },
            data: {
                improvement_pct: data.improvement_pct,
                next_checkin_at: data.next_checkin_at,
                updated_at: new Date(),
            },
        });
    }
    async addPathTreatment(user_id, treatment_id, path) {
        return await this.prisma.treatment_plans.update({
            where: {
                id: treatment_id,
                user_id
            },
            data: {
                path
            },
            select: {
                path: true
            }
        });
    }
    async getPathTreatment(user_id, treatment_id) {
        const treatment = await this.prisma.treatment_plans.findUnique({
            where: {
                id: treatment_id,
                user_id
            },
            select: {
                path: true
            }
        });
        return treatment?.path || null;
    }
    async addDurationDays(user_id, treatment_id, duration) {
        return await this.prisma.treatment_plans.update({
            where: {
                id: treatment_id,
                user_id
            },
            data: {
                duration_days: duration
            },
            select: {
                duration_days: true
            }
        });
    }
    async getDurationAndStart(user_id, treatment_id) {
        const treatment = await this.prisma.treatment_plans.findUnique({
            where: {
                id: treatment_id,
                user_id
            },
            select: {
                duration_days: true,
                started_at: true
            }
        });
        if (!treatment) {
            return null;
        }
        return {
            duration_days: treatment.duration_days,
            started_at: treatment.started_at
        };
    }
    async addCompletedAt(user_id, treatment_id, completed_at) {
        return await this.prisma.treatment_plans.update({
            where: {
                id: treatment_id,
                user_id
            },
            data: {
                completed_at,
                status: 'completed'
            },
            select: {
                completed_at: true,
                status: true
            }
        });
    }
    async addTitle(user_id, treatment_id, title) {
        return await this.prisma.treatment_plans.update({
            where: {
                id: treatment_id,
                user_id
            },
            data: {
                title
            },
            select: {
                title: true
            }
        });
    }
    async getTitle(user_id, treatment_id) {
        const treatment = await this.prisma.treatment_plans.findUnique({
            where: {
                id: treatment_id,
                user_id
            },
            select: {
                title: true,
            }
        });
        return treatment?.title || null;
    }
};
exports.TreatmentService = TreatmentService;
exports.TreatmentService = TreatmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TreatmentService);
//# sourceMappingURL=treatment.service.js.map