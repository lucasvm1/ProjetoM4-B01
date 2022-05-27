import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, Matches, MinLength, IsEmail, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  id?: string
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Choose an unique nickname',
    example: 'monsterslayer123',
  })
  nickname: string;
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Email',
    example: 'yourname@email.com',
  })
  email: string;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Your CPF',
    example: '12345678900',
  })
  cpf: number;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Your name',
    example: 'Joseph Smith',
  })
  name: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Is this user Admin?',
    example: 'Yes',
  })
  isAdmin: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password is too weak',
  })
  @ApiProperty({
    description: 'Password',
    example: 'Abcd@1234',
  })
  password: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Confirm Password',
    example: 'Abcd@1234',
  })
  confirmPassword: string;
  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({
    description: 'User image',
    example: 'https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png',
  })
  image: string;
  created_at: string;
  updated_at: string;
}
