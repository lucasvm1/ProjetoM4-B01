import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from "./entities/game.entity";
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UpdateGameDto } from './dto/update.game.dto';

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @ApiTags('Game')
  @Get()
  @ApiOperation({
    summary: 'List of all games',
  })
  findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @ApiTags('Game')
  @Get(':id')
  @ApiOperation({
    summary: 'Find a single game',
  })
  findOne(@Param('id') id: string): Promise<Game> {
    return this.gameService.findOne(id);
  }

  @ApiTags('Game')
  @Post()
  @ApiOperation({
    summary: 'Create a game',
  })
  create(@Body() createGameDto: CreateGameDto): Promise<Game> {
    return this.gameService.create(createGameDto);
  }

  @ApiTags('Game')
  @Patch(':id')
  @ApiOperation({
    summary: 'Update a game',
  })
  update(@Param('id') id: string, @Body() dto: UpdateGameDto): Promise<Game>{
    return this.gameService.update(id, dto)
  }

  @ApiTags('Game')
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete game',
  })
  delete(@Param('id') id: string) {
    return this.gameService.delete(id);
  }

}
