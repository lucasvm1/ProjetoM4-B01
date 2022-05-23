import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { Genre } from './entities/genre.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenreService {
  genres: Genre[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Genre[]> {
    return this.prisma.genre.findMany();
  }

  findOne(id: string): Promise<Genre> {
    return this.prisma.genre.findUnique({ where: { id } });
  }

  create(createGenreDto: CreateGenreDto): Promise<Genre> {
    const genre: Genre = { ...createGenreDto };
    return this.prisma.genre.create({
      data: genre,
    });
  }

  update(id: string, dto: UpdateGenreDto): Promise<Genre>{
    const genre: Partial<Genre> = { ... dto }
    return this.prisma.genre.update({
      where: { id },
      data: genre,
    })
  }

  delete(id: string) {
    return this.prisma.genre.delete({
      where: { id }
    })
  }
}
