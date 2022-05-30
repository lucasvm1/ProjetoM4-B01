import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './entities/profile.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProfileDto } from './dto/update-profile.dto';



@Injectable()
export class ProfileService {
  profiles: Profile[] = [];

  constructor(private readonly prisma: PrismaService) {}

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

  create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const profile: Profile = { ...createProfileDto };
    return this.prisma.profile
    .create({
      data: profile,
    })
  }

  async update(id: string, dto: UpdateProfileDto): Promise<Profile> {
    await this.findOne(id);

    const profile: Partial<Profile> = { ...dto };
    return this.prisma.profile.update({
      where: { id },
      data: profile,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.profile.delete({
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
