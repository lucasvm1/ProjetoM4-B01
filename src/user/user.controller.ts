import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiTags('User')
  @Get()
  @ApiOperation({
    summary: 'List of all users'
  })
  findAll() {
    return this.userService.findAll();
  }

  @ApiTags('User')
  @Post()
  @ApiOperation({
    summary: 'Create a new user'
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiTags('User')
  @Get(':id')
  @ApiOperation({
    summary: 'Get a single user'
  })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @ApiTags('User')
  @Patch(':id')
  @ApiOperation({
    summary: 'Update one user'
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @ApiTags('User')
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete one user'
  })
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}