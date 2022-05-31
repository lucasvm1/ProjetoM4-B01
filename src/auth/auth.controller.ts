import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/login-response.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Login using authentication token'
  })
  login(@Body() loginDto: LoginDto):Promise<LoginResponseDto> {
    return this.authService.login(loginDto);
  }

  @Get()
  profile(){
    return { message: 'User authenticated!' }
  }
}
