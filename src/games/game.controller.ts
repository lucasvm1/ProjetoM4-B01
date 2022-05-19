import { Body, Controller, Get, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './entities/game.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('games')
export class GamesController {
  constructor(private gameService: GameService) {}

  @Get()
  findAll(): Game[] {
    return this.gameService.findAll();
  }
  @Post()
  create(@Body() CreateGameDto: CreateGameDto): Game {
    return this.gameService.create(CreateGameDto);
  }
}
