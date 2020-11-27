import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsInt, IsNumber } from "class-validator";

export class AwardCreationDTO {
    
    @IsEmpty({ message: 'Description cannot be empty' })
    @ApiProperty({ type: String, description: 'description' })
    description: string;

    @IsNumber()
    @IsEmpty({ message: 'Cost cannot be empty' })
    @ApiProperty({ type: String, description: 'description' })
    cost: number;
}

export class AwardUpdateDTO {

    @IsInt()
    @ApiProperty({ type: Number, description: 'id' })
    id: number;

    @IsEmpty({ message: 'Description cannot be empty' })
    @ApiProperty({ type: String, description: 'description' })
    description: string;

    @IsNumber()
    @IsEmpty({ message: 'Cost cannot be empty' })
    @ApiProperty({ type: String, description: 'description' })
    cost: number;
}