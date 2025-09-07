import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateOAuthLogin(profile: any): Promise<any> {
    const user = {
      email: profile.emails[0].value,
      name: profile.displayName,
      provider: profile.provider,
    };
    return user;
  }
}
