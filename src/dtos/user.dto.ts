import { AddressCreationDTO } from './address.dto';
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEmpty, IsInt, IsString, MinLength } from "class-validator";
import { ProfileEnum } from '../enums/profile.enum';

export class UserCreationDTO {
    
    @IsEmpty({ message: 'Username cannot be empty' })
    @ApiProperty({ type: String, description: 'username' })
    username: string;

    @IsString()
    @MinLength(6, { message: 'Password must be at least 6 characters' })
    @ApiProperty({ type: String, description: 'password' })
    password: string;

    @IsEmpty({ message: 'Name cannot be empty' })
    @ApiProperty({ type: String, description: 'name' })
    name: string;

    @IsEmail()
    @IsEmpty({ message: 'Email cannot be empty'})
    @ApiProperty({ type: String, description: 'email' })
    email: string;

    @MinLength(10, { message: 'Telephone must be at least 10 characters' })
    @ApiProperty({ type: String, description: 'telephone' })
    telephone: string;

    @ApiProperty({ type: 'enum', enum: ProfileEnum, description: 'profile' })
    profile: ProfileEnum;

    @ApiProperty({ type: Array.of(AddressCreationDTO), description: 'address' })
    address: AddressCreationDTO[];
}

export class UserUpdateDTO {
    
    @IsInt()
    @ApiProperty({ type: Number, description: 'id' })
    id: number;

    @IsEmpty({ message: 'Username cannot be empty' })
    @ApiProperty({ type: String, description: 'username' })
    username: string;

    @IsString()
    @MinLength(6, { message: 'Password must be at least 6 characters' })
    @ApiProperty({ type: String, description: 'password' })
    password: string;

    @IsEmpty({ message: 'Name cannot be empty' })
    @ApiProperty({ type: String, description: 'name' })
    name: string;

    @IsEmail()
    @IsEmpty({ message: 'Email cannot be empty'})
    @ApiProperty({ type: String, description: 'email' })
    email: string;

    @MinLength(10, { message: 'Telephone must be at least 10 characters' })
    @ApiProperty({ type: String, description: 'telephone' })
    telephone: string;

    @ApiProperty({ type: AddressCreationDTO, description: 'address' })
    address: AddressCreationDTO[];
}