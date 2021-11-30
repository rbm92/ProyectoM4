import { Car } from "src/car/entities/car.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rental {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Car, (car) => car.id)
    @JoinColumn()
    car: Car

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn()
    user: User

    @CreateDateColumn({ type: 'datetime' })
    start_date: Date

    @Column({ type: 'datetime' })
    finish_date: Date

    @Column({ type: 'datetime', nullable: true })
    return_date: Date
}
