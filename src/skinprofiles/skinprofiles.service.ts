import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SkinProfile } from './Schema/skin.profile.schema';

@Injectable()
export class SkinprofilesService {
    constructor(
        private readonly servicePrisma: PrismaService
    ) { }


    ToMap(profile: any) {
        return new SkinProfile(
            profile.id,
            profile.user_id,
            profile.skin_type,
            profile.concerns,
            profile.allergies,
            profile.notes,
            profile.created_at,
            profile.updated_at
        );
    }


    async createProfile(data: SkinProfile): Promise<SkinProfile> {
        const profile = await this.servicePrisma.skin_profiles.create({
            data: {
                user_id: data.user_id,
                skin_type: data.skin_type,
                concerns: data.concerns,
                allergies: data.allergies,
                notes: data.notes
            }
        })
        return this.ToMap(profile);
    }


    async getProfileByUserId(user_id: string): Promise<SkinProfile | null> {
        const profile = await this.servicePrisma.skin_profiles.findUnique({
            where: {
                user_id
            }
        })
        return profile ? this.ToMap(profile) : null;
    }


    async updateProfile(data: SkinProfile): Promise<SkinProfile> {
        const profile = await this.servicePrisma.skin_profiles.update({
            where: { user_id: data.user_id },
            data: {
                skin_type: data.skin_type,
                concerns: data.concerns,
                allergies: data.allergies,
                notes: data.notes,
                updated_at: new Date()
            }
        })
        return this.ToMap(profile);
    }
}