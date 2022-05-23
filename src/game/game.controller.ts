import { Body, Controller, Get, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './entities/game.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @ApiTags('Game')
  @Get()
  findAll(): Game[] {
    return this.gameService.findAll();
  }
  @ApiTags('Game')
  @Post()
  create(@Body() createGameDto: CreateGameDto): Game {
    return this.gameService.create(createGameDto);
  }
}
