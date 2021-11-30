import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Car {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    brand: string

    @Column()
    model: string

    @Column()
    year: number

    @Column({ nullable: true })
    km: number

    @Column({ nullable: true })
    type: string

    @Column({ nullable: true })
    seats: string

    @Column({ nullable: true })
    color: string

    @Column({ default: 'gasoline' })
    engine: string

    @Column({ nullable: true })
    consum: number

    @Column({default: true })
    level: boolean

    @Column({ nullable: true })
    autonomy: number

    @Column({ nullable: true })
    photo: string

    @Column()
    price_day: string

    @Column({ default: true })
    available: boolean

    @Column({ nullable: true })
    bond: number

    @Column({ default: 'manual' })
    gear: string
}