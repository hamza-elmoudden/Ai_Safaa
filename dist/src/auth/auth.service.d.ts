import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { User } from '../users/Schema/user.schema';
export interface TokenPair {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}
export declare class AuthService {
    private readonly jwtService;
    private readonly usersService;
    private readonly config;
    constructor(jwtService: JwtService, usersService: UsersService, config: ConfigService);
    googleLogin(user: User): Promise<TokenPair>;
    rotateTokens(user: User): Promise<TokenPair>;
    logout(userId: string): Promise<void>;
    generateTokens(user: User): Promise<TokenPair>;
}
