import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'awards' })
export class AwardEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    description: string;

    @Column({ nullable: false })
    cost: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}