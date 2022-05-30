import { Injectable, NotFoundException, UnprocessableEntityException} from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { Genre } from './entities/genre.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { handleError } from 'src/utils/handle-error.util';

@Injectable()
export class GenreService {
  genres: Genre[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Genre[]> {
    return this.prisma.genre.findMany();
  }

  async findOne(id: string): Promise<Genre> {
    const record = await this.prisma.genre.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`The ID:${id} cannot be found`);
    }

    return record;
  }

  create(createGenreDto: CreateGenreDto): Promise<Genre> {
    const genre: Genre = { ...createGenreDto };
    return this.prisma.genre
      .create({
        data: genre,
      })
      .catch(handleError);
  }

  async update(id: string, dto: UpdateGenreDto): Promise<Genre> {
    await this.findOne(id);

    const genre: Partial<Genre> = { ...dto };
    return this.prisma.genre.update({
      where: { id },
      data: genre,
    });
  }

  async delete(id: string) {
    await this.findOne(id);
    await this.prisma.genre.delete({
      where: { id },
    });
  }
}
