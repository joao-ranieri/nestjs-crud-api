import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsString, MinLength } from "class-validator";

export class LoginDTO {

    @IsEmpty({ message: 'Username cannot be empty' })
    @ApiProperty({ type: String, description: 'username', default: 'joao.ranieri' })
    username: string;

    @IsString()
    @MinLength(6, { message: 'Password must be at least 6 characters' })
    @ApiProperty({ type: String, description: 'password', default: '123456' })
    password: string;
}