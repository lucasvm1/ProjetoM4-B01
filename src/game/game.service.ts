import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './entities/game.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGameDto } from './dto/update.game.dto';
import { handleError } from 'src/utils/handle-error.util';
import { Prisma } from '@prisma/client';

@Injectable()
export class GameService {

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany({
      include: {
        genre: true
      }
    });
  }

  async findOne(id: string): Promise<Game> {
    const record = await this.prisma.game.findUnique({
      where: { id },
      include: {
        genre: {
          select: {
            name: true
          }
        }
      }
     });

    if (!record) {
      throw new NotFoundException("ID '${id}' not found.");
    }

    return record;
  }

  create(createGameDto: CreateGameDto): Promise<Game> {
    const data: Prisma.GameCreateInput = {
      name: createGameDto.name,
      image: createGameDto.image,
      year: createGameDto.year,
      description: createGameDto.description,
      imdbScore: createGameDto.imdbScore,
      youtubeUrl: createGameDto.youtubeUrl,
      gameplayUrl: createGameDto.gameplayUrl,
      genre: {
        connect: {
          name: createGameDto.gameGenre,
        }
      }
    };

    return this.prisma.game.create({
      data,
      include: {
        genre: true
      }
     }).catch(handleError);
  }

  async update(id: string, updateGameDto: UpdateGameDto) {
    const toUpdateGame = await this.findOne(id);

    const data: Prisma.GameUpdateInput = {
      name: updateGameDto.name,
      image: updateGameDto.image,
      year: updateGameDto.year,
      description: updateGameDto.description,
      imdbScore: updateGameDto.imdbScore,
      youtubeUrl: updateGameDto.youtubeUrl,
      gameplayUrl: updateGameDto.gameplayUrl,
      genre: {
        disconnect: {
          name: toUpdateGame.genre[0].name
        },
        connect: {
          name: updateGameDto.gameGenre,
        }
      }
    };

    return this.prisma.game.update({
      where: { id },
      data,
      include: {
        genre: true
      }
    });
  }


  async delete(id: string) {
    await this.findOne(id);
    await this.prisma.game.delete({
      where: { id },
    });
  }
}
