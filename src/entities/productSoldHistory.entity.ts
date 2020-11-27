import { UserEntity } from './user.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity({ name: 'products_sold_history' })
export class ProductSoldHistoryEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => ProductEntity, product => product.id)
    product: ProductEntity;

    @ManyToOne(() => UserEntity, user => user.id)
    user: UserEntity;

    @Column({ nullable: false })
    quantity: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}