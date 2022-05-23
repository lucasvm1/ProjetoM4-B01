import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {

  games: Game[] = []

  findAll(): Game[] {
    return this.games;
  }

  create(createGameDto: CreateGameDto): Game {
    const game: Game = {id: 'random_id', ...createGameDto};
    this.games.push(game);
    return game;
  }

}
