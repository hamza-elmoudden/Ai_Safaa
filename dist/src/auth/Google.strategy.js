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
exports.GoogleStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_google_oauth20_1 = require("passport-google-oauth20");
const config_1 = require("@nestjs/config");
const users_service_1 = require("../users/users.service");
const payments_service_1 = require("../payments/payments.service");
const subscriptions_service_1 = require("../subscriptions/subscriptions.service");
let GoogleStrategy = class GoogleStrategy extends (0, passport_1.PassportStrategy)(passport_google_oauth20_1.Strategy, 'google') {
    usersService;
    paymentService;
    subscriptionService;
    constructor(config, usersService, paymentService, subscriptionService) {
        super({
            clientID: config.getOrThrow('GOOGLE_CLIENT_ID'),
            clientSecret: config.getOrThrow('GOOGLE_CLIENT_SECRET'),
            callbackURL: config.getOrThrow('GOOGLE_CALLBACK_URL'),
            scope: ['email', 'profile'],
        });
        this.usersService = usersService;
        this.paymentService = paymentService;
        this.subscriptionService = subscriptionService;
    }
    async validate(_accessToken, _refreshToken, profile, done) {
        const { id, emails, displayName } = profile;
        const Sub = await this.subscriptionService.FindName('free');
        const { user, isNew } = await this.usersService.findOrCreateGoogleUser({
            googleId: id,
            email: emails[0].value,
            fullName: displayName,
        });
        if (isNew) {
            await this.paymentService.createFree(user.id, Sub);
        }
        done(null, user);
    }
};
exports.GoogleStrategy = GoogleStrategy;
exports.GoogleStrategy = GoogleStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        users_service_1.UsersService,
        payments_service_1.PaymentsService,
        subscriptions_service_1.SubscriptionsService])
], GoogleStrategy);
//# sourceMappingURL=Google.strategy.js.map