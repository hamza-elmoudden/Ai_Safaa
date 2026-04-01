import { Response } from 'express';
import { AuthService } from './auth.service';
import { User } from '../users/Schema/user.schema';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    googleRedirect(): void;
    googleCallback(req: any, res: Response): Promise<void>;
    refresh(user: User, res: Response): Promise<import("./auth.service").TokenPair>;
    logout(user: User): Promise<void>;
    me(user: User): any;
}
