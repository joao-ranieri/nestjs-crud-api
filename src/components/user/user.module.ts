import { UserEntity } from '../../entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controller/user.controller';
import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity])
    ],
    providers: [
        UserService
    ],
    controllers: [
        UserController
    ],
    exports: [
        UserService
    ]
})
export class UserModule {}
