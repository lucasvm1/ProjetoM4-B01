import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './entities/game.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGameDto } from './dto/update.game.dto';
import { handleError } from 'src/utils/handle-error.util';

@Injectable()
export class GameService {

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany();
  }

  async findOne(id: string): Promise<Game> {
    const record = await this.prisma.game.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`The ID:${id} cannot be found`);
    }

    return record;
  }

  create(createGameDto: CreateGameDto): Promise<Game> {
    const game: Game = { ...createGameDto };
    return this.prisma.game
      .create({
        data: game,
      })
      .catch(handleError);
  }

  async update(id: string, dto: UpdateGameDto): Promise<Game> {
    await this.findOne(id);

    const game: Partial<Game> = { ...dto };
    return this.prisma.game.update({
      where: { id },
      data: game,
    });
  }

  async delete(id: string) {
    await this.findOne(id);
    await this.prisma.game.delete({
      where: { id },
    });
  }
}
