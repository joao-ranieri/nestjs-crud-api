import { ProfileEnum } from '../enums/profile.enum';
import { ProductSoldHistoryEntity } from './productSoldHistory.entity';
import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AddressEntity } from "./address.entity";
import * as bcrypt from 'bcrypt';

@Entity({ name: 'users' })
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column({ select: false })
    password: string;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    telephone: string;

    @Column("enum", { enum: ProfileEnum })
    profile: ProfileEnum;

    @OneToMany(() => AddressEntity, address => address.user)
    address: AddressEntity[];

    @OneToMany(() => ProductSoldHistoryEntity, productSold => productSold.user)
    productSoldList: ProductSoldHistoryEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @BeforeInsert()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 10);
    }

}