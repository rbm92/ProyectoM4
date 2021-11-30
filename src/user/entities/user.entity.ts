import { Encryptation } from "src/common/utils/encryptation.helper";
import { BeforeInsert, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column({ nullable: true })
    photo: string

    @Column({ nullable: true })
    license_num: string

    @Column({ nullable: true })
    address: string

    @Column({ default: false })
    active_rental: boolean

    @Column({ default: 'user' })
    role: string

    @BeforeInsert()
    async hashPassword(){
        this.password = await Encryptation.encryptPassword(this.password) // hashedPassword
    }
}
