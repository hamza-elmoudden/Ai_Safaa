import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './Schema/user.schema';

@Injectable()
export class UsersService {
    constructor(
        private readonly prisma: PrismaService
    ) { }



    async ToMap(user: any): Promise<User> {
        return new User(
            user.id,
            user.email,
            user.phone,
            user.country_code,
            user.city,
            user.date_of_birth,
            user.password_hash,
            user.google_provider,
            user.google_id,
            user.full_name,
            user.role,
            user.is_verified,
            user.otp_code,
            user.otp_expires_at,
            user.last_login,
            user.created_at,
            user.updated_at,
            user.refresh_token,
            user.is_complete_login
        );
    }

    async create(data: User) {
        const result = await this.prisma.users.create({
            data: {
                email: data.email,
                phone: data.phone,
                country_code: data.country_code,
                city: data.city,
                date_of_birth: data.date_of_birth,
                password_hash: data.password_hash,
                google_provider: data.google_provider,
                google_id: data.google_id,
                full_name: data.full_name,
                role: data.role,
                is_verified: data.is_verified,
                otp_code: data.otp_code,
                otp_expires_at: data.otp_expires_at,
                // last_login: data.last_login,
                // created_at: data.created_at,
                // updated_at: data.updated_at
            }
        });

        return await this.ToMap(result);
    }


    async update(data: User) {
        const result = await this.prisma.users.update({
            where: {
                id: data.id,
                is_verified: true,
                google_provider: true
            },
            data: {
                phone: data.phone,
                country_code: data.country_code,
                city: data.city,
                full_name: data.full_name  
            }
        });

        return this.ToMap(result);
    }

    async completeUser(data: User) {
        const result = await this.prisma.users.update({
            where: {
                id: data.id,
            },
            data: {
                full_name: data.full_name,
                phone: data.phone,
                country_code: data.country_code,
                city: data.city,
                date_of_birth: data.date_of_birth,
                is_verified: true,
                is_complete_login: true
            }
        });


        return await this.ToMap(result);
    }

    async findAll(page: number, limit: number) {
        const skip = (page - 1) * limit;
        return await this.prisma.users.findMany({
            skip,
            take: limit,
        });
    }

    async findOneEmail(email: string): Promise<User | null> {
        const user = await this.prisma.users.findUnique({
            where: {
                email
            }
        });

        return user ? this.ToMap(user) : null;
    }

    async findOneId(id: string): Promise<User | null> {

        const user = await this.prisma.users.findUnique({
            where: {
                id
            }
        });

         return user ? this.ToMap(user) : null;
       
    }


    async delete(id: string) {
        await this.prisma.users.delete({
            where: {
                id
            }
        });
    }


    async saveRefreshToken(userId: string, hashedToken: string): Promise<void> {
        await this.prisma.users.update({
          where: { id: userId },
          data:  { refresh_token: hashedToken },
        });
    }

    /** Clear refresh token on logout or rotation */
    async clearRefreshToken(userId: string): Promise<void> {
        await this.prisma.users.update({
          where: { id: userId },
          data:  { refresh_token: null },
        });
    }

    /** Update last_login timestamp */
    async updateLastLogin(userId: string): Promise<void> {
        await this.prisma.users.update({
            where: { id: userId },
            data: { last_login: new Date() },
        });
    }


    async findOrCreateGoogleUser(profile: {
        googleId: string;
        email: string;
        fullName: string;
    }): Promise<User> {
        // 1. already used Google before
        let user = await this.prisma.users.findUnique({
            where: { google_id: profile.googleId },
        });
        
        if (user) return this.ToMap(user);

        // 2. registered with email before → link Google account
        user = await this.prisma.users.findUnique({
            where: { email: profile.email },
        });
        if (user) {
            const updated = await this.prisma.users.update({
                where: { id: user.id },
                data: {
                    google_id: profile.googleId,
                    google_provider: true,
                    is_verified: true,
                },
            });
            return this.ToMap(updated);
        }

        // 3. brand new user
        const created = await this.prisma.users.create({
            data: {
                google_id: profile.googleId,
                email: profile.email,
                full_name: profile.fullName,
                google_provider: true,
                is_verified: true,
                role: 'user',
                password_hash: 'null',   // no password for Google users
            },
        });
        return this.ToMap(created);
    }


    async findCountry(userId:string):Promise<string| null>{
        const user = await this.prisma.users.findUnique({
            where :{
                id:userId
            },
            
        })

        return user ? user.country_code : null
    }



}