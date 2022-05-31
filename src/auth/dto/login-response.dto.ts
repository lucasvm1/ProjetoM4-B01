import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

export class LoginResponseDto {
  @ApiProperty({
    description: 'JWT Token generetade with login',
    example: 'GENERATED_TOKEN'
  })
  token: string;
  @ApiProperty({
    description: 'User data'
  })
  user: User;
}
