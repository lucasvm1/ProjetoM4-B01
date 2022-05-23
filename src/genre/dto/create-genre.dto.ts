import { IsString, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateGenreDto{
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: "Game genre",
    example: "Casual"
  })
  genre: string;
}
