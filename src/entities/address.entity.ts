import { UserEntity } from './user.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'addresses' })
export class AddressEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    zipCode: string;

    @Column({ nullable: false })
    address: string;

    @Column({ nullable: false })
    number: string;

    @Column({ nullable: true })
    complement: string;

    @Column({ nullable: false })
    neighborhood: string;

    @Column({ nullable: false })
    city: string;

    @Column({ nullable: false })
    state: string

    @ManyToOne(() => UserEntity, user => user.address)
    user: UserEntity;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}