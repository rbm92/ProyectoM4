import { Encryptation } from 'src/common/utils/encryptation.helper';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @ApiProperty({ example: 'asdweasd' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'user@user.com' })
  @Column({ unique: true })
  email: string;

  @ApiProperty({ example: 'asdi2eas213ad' })
  @Column()
  password: string;

  @ApiProperty({ example: 'photo.png' })
  @Column({ nullable: true })
  photo: string;

  @ApiProperty({ example: '48654306-N' })
  @Column({ nullable: true })
  license_num: string;

  @ApiProperty({ example: 'C/ Eixample' })
  @Column({ nullable: true })
  address: string;

  @ApiProperty({ example: false })
  @Column({ default: false })
  active_rental: boolean;

  @ApiProperty({ example: 'user' })
  @Column({ default: 'user' })
  role: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await Encryptation.encryptPassword(this.password); // hashedPassword
  }
}
