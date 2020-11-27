import { UserEntity } from '../../../../entities/user.entity';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../../user/service/user.service';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    public async validateUser(username: string, password: string) {
        try {
            const user: UserEntity = await this.userService.findByUsername(username);            
            if (user && bcrypt.compareSync(password, user.password)) {
                const { id, username, profile } = user;
                return { id, username, profile };
            } else {
                return null;
            }
        } catch (error) {
            throw new Error(error);
       }
    }

    async login(user: any) {        
        const payload = { sub: user.id, username: user.username, profile: user.profile };       
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

}
