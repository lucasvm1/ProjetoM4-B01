import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsString } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @IsEmpty()
  @ApiProperty({
    description: 'Nome do jogo',
    example: 'Mario Kart 8 Deluxe',
  })
  name: string;
}
