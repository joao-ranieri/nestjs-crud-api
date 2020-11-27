import { RolesGuard } from './../../auth/shared/guards/roles.guard';
import { UserCreationDTO, UserUpdateDTO } from '../../../dtos/user.dto';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';

import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

import { UserEntity } from '../../../entities/user.entity';

import { JwtAuthGuard } from './../../auth/shared/jwt/jwt-auth.guard';
import { UserService } from '../service/user.service';
import { Roles } from '../../auth/shared/decorators/roles.decorator';

@Controller('users')
export class UserController {

    constructor(
        private userService: UserService,
    ) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiBody({ type: UserCreationDTO })
    @ApiCreatedResponse( { description: 'User created.' })
    create(@Body() user: UserEntity) {
        return this.userService.save(user);
    }

    @Put()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiBody({ type: UserUpdateDTO })
    @ApiOkResponse( { description: 'User updated.' })
    update(@Body() user: UserEntity) {
        return this.userService.update(user);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    delete(@Param('id') id: string) {
        return this.userService.delete(Number(id));
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    findById(@Param('id') id: string) {
        return this.userService.findById(Number(id));
    }

    @Get()
    @Roles('ADMIN')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @ApiBearerAuth()
    findAll() {
        return this.userService.findAll();
    }
}
