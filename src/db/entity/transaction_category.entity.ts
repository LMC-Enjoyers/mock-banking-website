import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class TransactionCategory {
    @PrimaryGeneratedColumn("uuid")
    transaction_category_id: string;

    @Column({ type: 'varchar', length: 32 })
    category_name: string;

    @CreateDateColumn()
    create_time: Date;

    constructor(
        category_name: string
    ) {
        this.category_name = category_name;
    }
}
