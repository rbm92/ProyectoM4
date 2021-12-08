import { Car } from "src/car/entities/car.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger"

@Entity()
export class Rental {
    @ApiProperty({ example: "asd123e99" })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ example: "ua12234ascx" })
    @ManyToOne(() => Car, (car) => car.id)
    @JoinColumn()
    car: Car

    @ApiProperty({ example: "uuidlap214" })
    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn()
    user: User

    @ApiProperty({ example: '2021-12-12' })
    @CreateDateColumn({ type: 'datetime' })
    start_date: Date

    @ApiProperty({ example: '2021-12-22' })
    @Column({ type: 'datetime' })
    finish_date: Date

    @ApiProperty({ example: '2021-12-20' })
    @Column({ type: 'datetime', nullable: true })
    return_date: Date
}
