import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './entities/game.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGameDto } from './dto/update.game.dto';

@Injectable()
export class GameService {
  games: Game[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany();
  }

  findOne(id: string): Promise<Game> {
    return this.prisma.game.findUnique({ where: { id } });
  }

  create(createGameDto: CreateGameDto): Promise<Game> {
    const game: Game = { ...createGameDto };
    return this.prisma.game.create({
      data: game,
    });
  }

  update(id: string, dto: UpdateGameDto): Promise<Game>{
    const game: Partial<Game> = { ... dto }
    return this.prisma.game.update({
      where: { id },
      data: game,
    })
  }

  delete(id: string) {
    return this.prisma.game.delete({
      where: { id }
    })
  }
}
