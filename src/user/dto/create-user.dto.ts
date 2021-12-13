import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { LoginUserDto } from '../../auth/dto/login.dto';

export class CreateUserDto extends PartialType(LoginUserDto) {
  @ApiProperty({ example: 'asdweasd' })
  readonly id: string;
  @ApiProperty({ example: 'photo.png' })
  readonly photo: string;
  @ApiProperty({ example: '48654306-N' })
  readonly license_num: string;
  @ApiProperty({ example: 'C/ Eixample' })
  readonly address: string;
  @ApiProperty({ example: false })
  readonly active_rental: boolean;
  @ApiProperty({ example: 'user' })
  readonly role: string;
}
