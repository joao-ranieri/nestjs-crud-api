import { ConfigModule, ConfigService } from '@nestjs/config';
import { RolesGuard } from './shared/guards/roles.guard';
import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './../user/user.module';
import { PassportModule } from '@nestjs/passport';

import { jwtConstants } from './shared/jwt/jwt.constants';

import { AuthController } from './auth.controller';

import { AuthService } from './shared/services/auth.service';
import { JwtStrategy } from './shared/strategies/jwt.strategy';
import { LocalStrategy } from './shared/strategies/local.strategy';

@Module({
    imports: [
        RolesGuard,
        UserModule,
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: jwtConstants.secret,
                signOptions: { expiresIn: jwtConstants.expiresIn },
            })
        })
    ],
    controllers: [
        AuthController,
    ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy,
        RolesGuard,
    ],
    exports: [
        AuthService,
    ]
})
export class AuthModule { }
