import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './Schema/user.schema';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    ToMap(user: any): Promise<User>;
    create(data: User): Promise<User>;
    update(data: User): Promise<User>;
    completeUser(data: User): Promise<User>;
    findAll(page: number, limit: number): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        email: string | null;
        phone: string | null;
        country_code: string | null;
        city: string | null;
        date_of_birth: Date | null;
        password_hash: string;
        google_provider: boolean;
        google_id: string | null;
        full_name: string;
        role: import("../../generated/prisma/enums").user_role;
        is_verified: boolean;
        otp_code: string | null;
        otp_expires_at: Date | null;
        last_login: Date | null;
        refresh_token: string | null;
        is_complete_login: boolean | null;
    }[]>;
    findOneEmail(email: string): Promise<User | null>;
    findOneId(id: string): Promise<User | null>;
    delete(id: string): Promise<void>;
    saveRefreshToken(userId: string, hashedToken: string): Promise<void>;
    clearRefreshToken(userId: string): Promise<void>;
    updateLastLogin(userId: string): Promise<void>;
    findOrCreateGoogleUser(profile: {
        googleId: string;
        email: string;
        fullName: string;
    }): Promise<{
        user: User;
        isNew: boolean;
    }>;
    findCountry(userId: string): Promise<string | null>;
}
