import { LoginDTO } from './../../dtos/login.dto';
import { AuthService } from './shared/services/auth.service';
import { ApiBody, ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { LocalAuthGuard } from './shared/guards/local-auth.guard';

@Controller()
export class AuthController {

    constructor(
        private authService: AuthService
    ) {}

    @Post('auth/login')
    @UseGuards(LocalAuthGuard)
    @ApiBody({ type: LoginDTO })
    @ApiOkResponse({ description: 'User login.' })
    @ApiUnauthorizedResponse({ description: 'Invalid credentials.' })
    public async login(@Request() req: any) {
        return this.authService.login(req.user);
    }

}
