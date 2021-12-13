import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Car {
  @ApiProperty({ example: 99 })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'Toyota' })
  @Column()
  brand: string;

  @ApiProperty({ example: 'Corolla' })
  @Column()
  model: string;

  @ApiProperty({ example: 2018 })
  @Column()
  year: number;

  @ApiProperty({ example: 20000 })
  @Column({ nullable: true })
  km: number;

  @ApiProperty({ example: 'tourism' })
  @Column({ nullable: true })
  type: string;

  @ApiProperty({ example: 5 })
  @Column({ nullable: true })
  seats: number;

  @ApiProperty({ example: 'blue' })
  @Column({ nullable: true })
  color: string;

  @ApiProperty({ example: 'gasoline' })
  @Column({ default: 'gasoline' })
  engine: string;

  @ApiProperty({ example: 7 })
  @Column({ nullable: true })
  consum: number;

  @ApiProperty({ example: true })
  @Column({ default: true })
  level: boolean;

  @ApiProperty({ example: 700 })
  @Column({ nullable: true })
  autonomy: number;

  @ApiProperty({ example: 'toyota.png' })
  @Column({ nullable: true })
  photo: string;

  @ApiProperty({ example: 30 })
  @Column()
  price_day: number;

  @ApiProperty({ example: true })
  @Column({ default: true })
  available: boolean;

  @ApiProperty({ example: 1000 })
  @Column({ nullable: true })
  bond: number;

  @ApiProperty({ example: 'manual' })
  @Column({ default: 'manual' })
  gear: string;
}
