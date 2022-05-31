import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nickname of user',
    example: 'monsterslayer123'
  })
  nickname: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Password of user',
    example: 'Abcd@1234'
  })
  password: string;
}