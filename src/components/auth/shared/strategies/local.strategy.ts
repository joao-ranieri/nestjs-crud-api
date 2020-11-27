import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '../services/auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(
        private authService: AuthService
    ) {
        super({
            usernameField: 'username',
            passwordField: 'password',
        });
    }

    public async validate(username: string, password: string): Promise<any> {
        const user = await this.authService.validateUser(username, password);
        if ( !user ) {
            throw new UnauthorizedException();
        } else {
            return user;
        }
    }
}