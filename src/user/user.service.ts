import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';



@Injectable()
export class UserService {
  users: User[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`The ID:${id} cannot be found`);
    }

    return record;
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = { ...createUserDto };
    return this.prisma.user
    .create({
      data: user,
    })
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.findOne(id);

    const user: Partial<User> = { ...dto };
    return this.prisma.user.update({
      where: { id },
      data: user,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.user.delete({
      where: { id },
    });
  }

  handleError(error: Error) {
    console.log(error);
    return undefined;
  }
}

