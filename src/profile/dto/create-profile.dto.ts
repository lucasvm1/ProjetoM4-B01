import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsUrl, IsUUID } from "class-validator";

export class CreateProfileDto {
  id?: string;
  @IsString()
  @ApiProperty({
    description: 'Name of Profile',
    example: 'Mario'
  })
  name: string;
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({
    description: 'User image',
    example: 'https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png',
  })
  image: string;
  @IsUUID()
  @ApiProperty({
    description: 'User ID',
    example: '86662072-f020-4c5b-95d5-fa310f2c75e5',
  })
  userId: string;
  @IsUUID()
  @ApiProperty({
    description: 'Game ID',
    example: '4a44f3e8-14c0-4557-87b5-cd7429f611ae',
  })
  gameId: string
}
