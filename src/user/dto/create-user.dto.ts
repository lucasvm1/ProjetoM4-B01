import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  id?: string
  @IsString()
  @ApiProperty({
    description: 'Choose an unique nickname',
    example: 'monsterslayer123',
  })
  nickname: string;
  @IsString()
  @ApiProperty({
    description: 'Your name',
    example: 'Joseph Smith',
  })
  name: string;
  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password is too weak',
  })
  @ApiProperty({
    description: 'Password',
    example: 'Abcd@1234',
  })
  password: string;
  @ApiProperty({
    description: 'Confirm Password',
    example: 'Abcd@1234',
  })
  confirmPassword: string;
  @IsUrl()
  @ApiProperty({
    description: 'User image',
    example: 'https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png',
  })
  image: string;
  created_at: string;
  updated_at: string;
}
