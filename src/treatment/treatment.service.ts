import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Treatment } from './Schema/treatment.schema';

@Injectable()
export class TreatmentService {
    constructor(
        private  readonly prisma:PrismaService
    ) {}

    mapTreatment(treatment:any){  
        return new Treatment(
            treatment.id,
            treatment.user_id,
            treatment.title,
            treatment.concern_type,
            treatment.duration_days,
            treatment.checkin_interval,
            treatment.day_0_acne_count,
            treatment.status,
            treatment.improvement_pct,
            treatment.areas_treated,
            treatment.initial_photo_url,
            treatment.initial_photo_key,
            treatment.ai_diagnosis,
            treatment.ai_model,
            treatment.next_checkin_at,
            treatment.started_at,
            treatment.completed_at,
            treatment.updated_at, // Add the missing 18th argument
            treatment.deleted_at  // Add the missing 19th argument
        );
    }

    async createTreatment(data:Treatment){
        const treatment = await this.prisma.treatment_plans.create({
            data:{
                id:data.id,
                user_id:data.user_id,
                title:data.title,
                concern_type:data.concern_type,
                duration_days:data.duration_days,
                checkin_interval:data.checkin_interval,
                day_0_acne_count:data.day_0_acne_count,
                status:data.status,
                improvement_pct:data.improvement_pct,
                areas_treated:data.areas_treated,
                initial_photo_url:data.initial_photo_url,
                initial_photo_key:data.initial_photo_key,
                ai_diagnosis:data.ai_diagnosis,
                ai_model:data.ai_model,
                next_checkin_at:data.next_checkin_at,
                started_at:data.started_at,
                completed_at:data.completed_at,
            }
        })
        return treatment;
    }


    async findTreatmentById(id:string){
        const treatment = await this.prisma.treatment_plans.findUnique({
            where:{
                id:id
            }
        })
        return treatment;
    }

    async findTreatmentsByUserId(user_id: string): Promise<Treatment[]> {
        const treatments = await this.prisma.treatment_plans.findMany({
            where: {
                user_id: user_id
            }
        });
        
        return treatments.map(treatment => this.mapTreatment(treatment));
    }

    async deleteTreatment(id:string){
        await this.prisma.treatment_plans.delete({
            where:{
                id:id
            }
        })
    }

    
}
