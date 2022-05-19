import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/game.module';

@Module({
  imports: [GamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
