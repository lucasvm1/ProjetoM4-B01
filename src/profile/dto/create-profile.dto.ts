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
    example: '69b4bd48-da6d-4537-b46c-2f2ed8ad9809',
  })
  userId: string;
}
