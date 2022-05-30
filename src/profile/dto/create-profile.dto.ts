import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProfileDto {
  id?: string;
  @IsString()
  @ApiProperty({
    description: 'Name of Profile',
    example: 'Mario'
  })
  name: string;
}