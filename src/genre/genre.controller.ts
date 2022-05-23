import { Body, Controller, Get, Post } from '@nestjs/common';
import { GenreService } from './genre.service';
import { Genre } from './entities/genre.entity';
import { CreateGenreDto } from 'src/genre/dto/create-genre.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('genre')
export class GenreController {
  constructor(private genreService: GenreService) {}

  @ApiTags('Genre')
  @Get()
  findAll(): Genre[] {
    return this.genreService.findAll();
  }

  @ApiTags('Genre')
  @Post()
  create(@Body() createGenreDto: CreateGenreDto): Genre {
    return this.genreService.create(createGenreDto);
  }


}
