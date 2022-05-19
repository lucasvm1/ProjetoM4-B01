import { Module } from '@nestjs/common';
import { GamesController } from './game.controller';
import { GameService } from './game.service';

@Module({
  controllers: [GamesController],
  providers: [GameService]
})
export class GameModule {}
