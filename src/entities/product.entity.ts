import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'products'} )
export class ProductEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    description: string;

    @Column("decimal", { precision: 5, scale: 2 , nullable: false})
    distributorValue: number;

    @Column({ nullable: false})
    distributorMargin: number;

    @Column("decimal", { precision: 5, scale: 2 , nullable: false})
    sallerValue: number;

    @Column({ nullable: false})
    sallerMargin: number;

    @Column({ nullable: false })
    distributorAward: number;

    @Column({ nullable: false })
    sellerAward: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}