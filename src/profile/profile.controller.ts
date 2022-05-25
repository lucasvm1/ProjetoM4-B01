import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @ApiTags('Profile')
  @Get()
  @ApiOperation({
    summary: 'List of all profiles'
  })
  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @ApiTags('Profile')
  @Post()
  @ApiOperation({
    summary: 'Create a new profile'
  })
  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }

  @ApiTags('Profile')
  @Get(':id')
  @ApiOperation({
    summary: 'Get a single profile'
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
  }

  @ApiTags('Profile')
  @Patch(':id')
  @ApiOperation({
    summary: 'Update one profile'
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(id, updateProfileDto);
  }

  @ApiTags('Profile')
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete one profile'
  })
  remove(@Param('id') id: string) {
    return this.profileService.remove(id);
  }
}
