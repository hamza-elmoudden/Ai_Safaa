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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const user_schema_1 = require("./Schema/user.schema");
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async ToMap(user) {
        return new user_schema_1.User(user.id, user.email, user.phone, user.country_code, user.city, user.date_of_birth, user.password_hash, user.google_provider, user.google_id, user.full_name, user.role, user.is_verified, user.otp_code, user.otp_expires_at, user.last_login, user.created_at, user.updated_at, user.refresh_token, user.is_complete_login);
    }
    async create(data) {
        const result = await this.prisma.users.create({
            data: {
                email: data.email,
                phone: data.phone,
                country_code: data.country_code,
                is_complete_login: true,
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
            }
        });
        return await this.ToMap(result);
    }
    async update(data) {
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
    async completeUser(data) {
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
    async findAll(page, limit) {
        const skip = (page - 1) * limit;
        return await this.prisma.users.findMany({
            skip,
            take: limit,
        });
    }
    async findOneEmail(email) {
        const user = await this.prisma.users.findUnique({
            where: {
                email
            }
        });
        return user ? this.ToMap(user) : null;
    }
    async findOneId(id) {
        const user = await this.prisma.users.findUnique({
            where: {
                id
            }
        });
        return user ? this.ToMap(user) : null;
    }
    async delete(id) {
        await this.prisma.users.delete({
            where: {
                id
            }
        });
    }
    async saveRefreshToken(userId, hashedToken) {
        await this.prisma.users.update({
            where: { id: userId },
            data: { refresh_token: hashedToken },
        });
    }
    async clearRefreshToken(userId) {
        await this.prisma.users.update({
            where: { id: userId },
            data: { refresh_token: null },
        });
    }
    async updateLastLogin(userId) {
        await this.prisma.users.update({
            where: { id: userId },
            data: { last_login: new Date() },
        });
    }
    async findOrCreateGoogleUser(profile) {
        let user = await this.prisma.users.findUnique({
            where: { google_id: profile.googleId },
        });
        if (user) {
            return {
                user: await this.ToMap(user),
                isNew: false,
            };
        }
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
            return {
                user: await this.ToMap(updated),
                isNew: false,
            };
        }
        const created = await this.prisma.users.create({
            data: {
                google_id: profile.googleId,
                email: profile.email,
                full_name: profile.fullName,
                google_provider: true,
                is_verified: true,
                role: 'user',
                password_hash: '',
            },
        });
        return {
            user: await this.ToMap(created),
            isNew: true,
        };
    }
    async findCountry(userId) {
        const user = await this.prisma.users.findUnique({
            where: {
                id: userId
            },
            select: {
                country_code: true
            }
        });
        return user ? user.country_code : null;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map