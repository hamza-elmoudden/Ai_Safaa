import { PrismaService } from 'src/prisma/prisma.service';
import { SkinProfile } from './Schema/skin.profile.schema';
export declare class SkinprofilesService {
    private readonly servicePrisma;
    constructor(servicePrisma: PrismaService);
    ToMap(profile: any): SkinProfile;
    createProfile(data: SkinProfile): Promise<SkinProfile>;
    getProfileByUserId(user_id: string): Promise<SkinProfile | null>;
    updateProfile(data: SkinProfile): Promise<SkinProfile>;
}
