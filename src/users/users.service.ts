import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './Schema/user.schema';

@Injectable()
export class UsersService {
    constructor(
        private readonly prisma: PrismaService
    ) {}



    async ToMap(user: any):Promise<User> {
        return new User(
            user.id,
            user.email,
            user.phone,
            user.country_code,
            user.city,
            user.date_of_birth,
            user.password_hash,
            user.google_provider_id,
            user.google_id,
            user.full_name,
            user.role,
            user.is_verified,
            user.otp_code,
            user.otp_expires_at,
            user.last_login,
            user.created_at,
            user.updated_at
        );
    }

    async create(data:User) {
        const result = await this.prisma.users.create({
            data: {
                email: data.email,
                phone: data.phone,
                country_code: data.country_code,
                city: data.city,
                date_of_birth: data.date_of_birth,
                password_hash: data.password_hash,
                google_provider: data.google_provider_id,
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


        const user = await this.prisma.users.findUnique({
            where: {
                id: result.id
            }
        });

        return await this.ToMap(user);
    }


    async update(id: string, data:User) {
        const result = await this.prisma.users.update({
            where: {
                id
            },
            data: {
                email: data.email,
                phone: data.phone,
                country_code: data.country_code,
                city: data.city,
                date_of_birth: data.date_of_birth,
                password_hash: data.password_hash,
                google_provider: data.google_provider_id,
                google_id: data.google_id,
                full_name: data.full_name,
                role: data.role,
                is_verified: data.is_verified,
                otp_code: data.otp_code,
                otp_expires_at: data.otp_expires_at,
                last_login: data.last_login,
                // created_at: data.created_at,
                // updated_at: data.updated_at
            }
        });

        const user = await this.prisma.users.findUnique({
            where: {
                id
            }
        });

        return await this.ToMap(user);
    }

    async findAll(page:number,limit:number){
        const skip = (page - 1) * limit;
        return await this.prisma.users.findMany({
            skip,
            take: limit,
        });
    }

    async findOneEmail(email: string):Promise<User>  {
        const user = await this.prisma.users.findUnique({
            where: {
                email
            }
        });

        return await this.ToMap(user);
    }

    async findOneId(id: string):Promise<User>  {
        const user = await this.prisma.users.findUnique({
            where: {
                id
            }
        });

        return await this.ToMap(user);
    }


    async delete(id: string) {
        await this.prisma.users.delete({
            where: {
                id
            }
        });
    }



}