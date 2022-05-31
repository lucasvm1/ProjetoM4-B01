import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { GenreService } from './genre.service';
import { Genre } from './entities/genre.entity';
import { CreateGenreDto } from 'src/genre/dto/create-genre.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { AuthGuard } from '@nestjs/passport';


@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('genre')
export class GenreController {
  constructor(private genreService: GenreService) {}

  @ApiTags('Genre')
  @Get()
  @ApiOperation({
    summary: 'List of all genres'
  })
  findAll(): Promise<Genre[]> {
    return this.genreService.findAll();
  }

  @ApiTags('Genre')
  @Get(':id')
  @ApiOperation({
    summary: 'Find a single genre'
  })
  findOne(@Param('id') id: string): Promise<Genre>{
    return this.genreService.findOne(id)
  }

  @ApiTags('Genre')
  @Post()
  @ApiOperation({
    summary: 'Create a genre'
  })
  create(@Body() createGenreDto: CreateGenreDto): Promise<Genre> {
    return this.genreService.create(createGenreDto);
  }

  @ApiTags('Genre')
  @Patch(':id')
  @ApiOperation({
    summary: 'Update a genre',
  })
  update(@Param('id') id: string, @Body() dto: UpdateGenreDto): Promise<Genre>{
    return this.genreService.update(id, dto)
  }

  @ApiTags('Genre')
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete genre',
  })
  delete(@Param('id') id: string) {
    return this.genreService.delete(id);
  }


}
