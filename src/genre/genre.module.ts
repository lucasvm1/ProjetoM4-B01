import { Module } from '@nestjs/common';
import { GenreController } from './genre.controller';
import { GenreService } from './genre.service';
import { PrismaModule } from 'src/prisma/prisma.module';

import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule, PassportModule.register({defaultStrategy: 'jwt'})],
  controllers: [GenreController],
  providers: [GenreService]
})
export class GenreModule {}
