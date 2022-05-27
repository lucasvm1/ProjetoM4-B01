import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Game name',
    example: 'Mario Kart 8 Deluxe',
  })
  name: string;
  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Game Cover',
    example:
      'https://assets.nintendo.eu/image/upload/f_auto,q_auto,t_product_tile_desktop/MNS/NOE/70010000000126/SQ_NSwitch_MarioKart8Deluxe',
  })
  image: string;
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
    example:
      'Mario Kart 8 Deluxe is a racing game in the Mario Kart series for the Nintendo Switch, and the first Mario game overall for the console.',
  })
  description: string;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'IMDB Score 0-5',
    example: 5,
  })
  imdbScore: number;
  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Youtube Trailer',
    example: 'https://www.youtube.com/watch?v=tKlRN2YpxRE',
  })
  youtubeUrl: string;
  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Youtube Gameplay',
    example: 'https://www.youtube.com/watch?v=5jMoSW-hFbQ',
  })
  gameplayUrl: string;
}
