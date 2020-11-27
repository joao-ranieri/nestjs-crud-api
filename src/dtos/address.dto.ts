import { IsEmpty, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { MinLength } from 'class-validator';

export class AddressCreationDTO {
    
    @MinLength(5, { message: 'Zip Code must be at least 5 characters' })
    @ApiProperty({ type: String, description: 'zip_code' })
    zipCode: string;

    @IsEmpty({ message: 'Address cannot be empty' })
    @ApiProperty({ type: String, description: 'address' })
    address: string;

    @IsEmpty({ message: 'Number cannot be empty' })
    @ApiProperty({ type: String, description: 'number' })
    number: string;

    @ApiProperty({ type: String, description: 'complement' })
    complement: string;

    @IsEmpty({ message: 'Neighborhood cannot be empty' })
    @ApiProperty({ type: String, description: 'neighborhood' })
    neighborhood: string;

    @IsEmpty({ message: 'City cannot be empty' })
    @ApiProperty({ type: String, description: 'city' })
    city: string;

    @IsEmpty({ message: 'State cannot be empty' })
    @ApiProperty({ type: String, description: 'state' })
    state: string
}

export class AddressUpdateDTO {

    @IsInt()
    @ApiProperty({ type: Number, description: 'id' })
    id: number;
    
    @MinLength(5, { message: 'Zip Code must be at least 5 characters' })
    @ApiProperty({ type: String, description: 'zip_code' })
    zipCode: string;

    @IsEmpty({ message: 'Address cannot be empty' })
    @ApiProperty({ type: String, description: 'address' })
    address: string;

    @IsEmpty({ message: 'Number cannot be empty' })
    @ApiProperty({ type: String, description: 'number' })
    number: string;

    @ApiProperty({ type: String, description: 'complement' })
    complement: string;

    @IsEmpty({ message: 'Neighborhood cannot be empty' })
    @ApiProperty({ type: String, description: 'neighborhood' })
    neighborhood: string;

    @IsEmpty({ message: 'City cannot be empty' })
    @ApiProperty({ type: String, description: 'city' })
    city: string;

    @IsEmpty({ message: 'State cannot be empty' })
    @ApiProperty({ type: String, description: 'state' })
    state: string
}