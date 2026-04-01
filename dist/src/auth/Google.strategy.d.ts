import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { PaymentsService } from 'src/payments/payments.service';
import { SubscriptionsService } from 'src/subscriptions/subscriptions.service';
declare const GoogleStrategy_base: new (...args: [options: import("passport-google-oauth20").StrategyOptionsWithRequest] | [options: import("passport-google-oauth20").StrategyOptions] | [options: import("passport-google-oauth20").StrategyOptions] | [options: import("passport-google-oauth20").StrategyOptionsWithRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class GoogleStrategy extends GoogleStrategy_base {
    private readonly usersService;
    private readonly paymentService;
    private readonly subscriptionService;
    constructor(config: ConfigService, usersService: UsersService, paymentService: PaymentsService, subscriptionService: SubscriptionsService);
    validate(_accessToken: string, _refreshToken: string, profile: any, done: VerifyCallback): Promise<void>;
}
export {};
