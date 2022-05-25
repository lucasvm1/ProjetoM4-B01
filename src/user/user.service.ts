import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private userSelect = {
    id: true,
    nickname: true,
    name: true,
    password: false,
    image: true,
    createdAt: true,
    updatedAt: true,
  };

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      select: this.userSelect,
    });
  }

  async findOne(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({
      where: { id },
      select: this.userSelect,
    });

    if (!record) {
      throw new NotFoundException(`The ID:${id} cannot be found`);
    }

    return record;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    if (createUserDto.password != createUserDto.confirmPassword) {
      throw new BadRequestException("Passwords don't match");
    }

    delete createUserDto.confirmPassword;

    const user: User = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };
    return this.prisma.user.create({
      data: user,
      select: this.userSelect,
    });
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.findOne(id);

    if (dto.password) {
      if (dto.password != dto.confirmPassword) {
        throw new BadRequestException("Passwords don't match");
      }
    }

    delete dto.confirmPassword;

    const user: Partial<User> = { ...dto };

    if(user.password){
      user.password = await bcrypt.hash(user.password, 10)
    }

    return this.prisma.user.update({
      where: { id },
      data: user,
      select: this.userSelect,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.user.delete({
      where: { id },
    });
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();

    if (lastErrorLine) {
      console.error(error);
    }

    throw new UnprocessableEntityException(
      lastErrorLine || 'There was an error!',
    );
  }
}
