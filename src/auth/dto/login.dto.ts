import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({ example: 'user@user.com' })
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: 'asdi2eas213ad' })
  @IsNotEmpty()
  readonly password: string;
}
