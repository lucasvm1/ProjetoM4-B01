import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './entities/profile.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { handleError } from 'src/utils/handle-error.util';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProfileDto: CreateProfileDto) {
    const data: Prisma.ProfileCreateInput = {
      name: createProfileDto.name,
      image: createProfileDto.image,
      user: {
        connect: {
          id: createProfileDto.userId,
        },
      },
    };

    return this.prisma.profile
      .create({
        data,
        select: {
          id: true,
          name: true,
          image: true,
          user: {
            select: {
              name: true,
              nickname: true,
            },
          },
        },
      })
      .catch(handleError);
  }

  findAll(): Promise<Profile[]> {
    return this.prisma.profile.findMany();
  }

  async findOne(id: string): Promise<Profile> {
    const record = await this.prisma.profile.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`The ID:${id} cannot be found`);
    }

    return record;
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    const data: Prisma.ProfileUpdateInput = {
      name: updateProfileDto.name,
      image: updateProfileDto.image,
      user: {
        connect: {
          id: updateProfileDto.userId
        }
      }
    }
    return this.prisma.profile.update({
      where: {id},
      data,
    })
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.profile.delete({
      where: { id },
    });
  }
}
