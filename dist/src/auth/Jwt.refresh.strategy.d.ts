import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { UsersService } from 'src/users/users.service';
declare const JwtRefreshStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtRefreshStrategy extends JwtRefreshStrategy_base {
    private readonly usersService;
    constructor(config: ConfigService, usersService: UsersService);
    validate(req: Request, payload: {
        sub: string;
    }): Promise<import("../users/Schema/user.schema").User>;
}
export {};
