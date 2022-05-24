import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Game name',
    example: 'Mario Kart 8 Deluxe',
  })
  name: string;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Release year',
    example: 2017,
  })
  year: number;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Description',
    example: 'Mario Kart 8 Deluxe is a racing game in the Mario Kart series for the Nintendo Switch, and the first Mario game overall for the console.',
  })
  description: string;
}
