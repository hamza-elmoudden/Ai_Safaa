import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Treatment } from './Schema/treatment.schema';

@Injectable()
export class TreatmentService {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    mapTreatment(treatment: any) {
        return new Treatment(
            treatment.id,
            treatment.user_id,
            treatment.title,
            treatment.status,

            treatment.improvement_pct ?? 0,

            treatment.areas_treated,

            treatment.duration_days ?? 0,

            treatment.initial_photo_url,
            treatment.initial_photo_key,

            treatment.ai_diagnosis ?? null,
            treatment.ai_model ?? "gpt-4-vision-preview",

            treatment.next_checkin_at ?? null,

            treatment.started_at,
            treatment.completed_at ?? null,

            treatment.created_at,
            treatment.updated_at,

            treatment.path ?? null
        );
    }

    async createTreatment(data: Treatment): Promise<Treatment> {
        const treatment = await this.prisma.treatment_plans.create({
            data: {
                id: data.id,
                user_id: data.user_id,
                title: `${data.areas_treated} - ${new Date().toLocaleDateString()}`,
                areas_treated: data.areas_treated,
                ai_model: data.ai_model,
            }
        })
        return this.mapTreatment(treatment);
    }


    async findTreatmentById(id: string, user_id: string): Promise<Treatment | null> {
        const treatment = await this.prisma.treatment_plans.findUnique({
            where: {
                id: id,
                user_id
            }
        })
        return treatment ? this.mapTreatment(treatment) : null;
    }

    async findTreatmentsByUserId(user_id: string): Promise<Treatment[] | []> {
        const treatments = await this.prisma.treatment_plans.findMany({
            where: {
                user_id: user_id
            }
        });

        return treatments.map(treatment => this.mapTreatment(treatment));
    }


    async findTreatmentByIdAndUserId(user_id: string, id: string): Promise<Treatment | null> {
        const treatment = await this.prisma.treatment_plans.findUnique({
            where: {
                id,
                user_id
            }
        })

        return treatment ? this.mapTreatment(treatment) : null
    }

    async deleteTreatment(id: string) {
        await this.prisma.treatment_plans.update({
            where: {
                id: id
            },
            data: {
                status: 'cancelled'
            }
        })
    }

    async countActiveTreatments(user_id: string): Promise<number> {
        return await this.prisma.treatment_plans.count({
            where: {
                user_id,
                // status: 'active',
            },
        });
    }

    async countTreatmentsInCurrentPeriod(
        user_id: string,
        periodStart: Date,
        periodEnd: Date,
    ): Promise<number> {
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


    async addPhoto(Photo_url: string, Photo_key: string, treatment_id: string, user_id: string) {
        const photo = await this.prisma.treatment_plans.update({
            where: {
                id: treatment_id,
                user_id
            },
            data: {
                initial_photo_key: Photo_key,
                initial_photo_url: Photo_url
            }
        })

        return photo.initial_photo_url
    }


    async getPhotoInitial(user_id: string, treatment_id: string): Promise<string | null> {
        const photo = await this.prisma.treatment_plans.findUnique({
            where: {
                user_id,
                id: treatment_id
            }
        })

        return photo?.initial_photo_url ? photo.initial_photo_url : null
    }

    async updateDiagnosis(id: string, data: {
        ai_diagnosis: string;
        day_0_acne_count: number;
        ai_model: string;
        next_checkin_at: Date;
    }) {
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

    async updateProgress(id: string, data: {
        improvement_pct: number;
        next_checkin_at: Date;
    }) {
        return await this.prisma.treatment_plans.update({
            where: { id },
            data: {
                improvement_pct: data.improvement_pct,
                next_checkin_at: data.next_checkin_at,
                updated_at: new Date(),
            },
        });
    }


    async addPathTreatment(user_id: string, treatment_id : string,path:any) {
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
        })
    }

}
