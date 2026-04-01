// src/auth/strategies/google.strategy.ts

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { PaymentsService } from 'src/payments/payments.service';
import { SubscriptionsService } from 'src/subscriptions/subscriptions.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    config: ConfigService,
    private readonly usersService: UsersService,
    private readonly paymentService: PaymentsService,
    private readonly subscriptionService: SubscriptionsService
  ) {
    super({
      clientID: config.getOrThrow('GOOGLE_CLIENT_ID'),
      clientSecret: config.getOrThrow('GOOGLE_CLIENT_SECRET'),
      callbackURL: config.getOrThrow('GOOGLE_CALLBACK_URL'),
      scope: ['email', 'profile'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    const { id, emails, displayName } = profile;

    const Sub = await this.subscriptionService.FindName('free')

    // findOrCreateGoogleUser talks to Prisma via UsersService
    const { user, isNew } = await this.usersService.findOrCreateGoogleUser({
      googleId: id,
      email: emails[0].value,
      fullName: displayName,
    });


    if (isNew) {
      await this.paymentService.createFree(user.id, Sub)
    }


    done(null, user);
  }
}