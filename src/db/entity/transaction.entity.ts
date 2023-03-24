import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn("uuid")
    transaction_id: string;

    @Column({ type: 'varchar', length: 36 })
    account_id: string;

    @Column({ type: 'varchar', length: 64 })
    transaction_content: string;

    @Column({ type: 'decimal' })
    transaction_value: number;

    @Column({ type: 'varchar', length: 36 })
    transaction_category_id: string;

    @CreateDateColumn()
    transaction_time: Date;

    constructor(
        account_id: string,
        transaction_content: string,
        transaction_value: number,
        transaction_category_id: string
    ) {
        this.account_id = account_id;
        this.transaction_content = transaction_content;
        this.transaction_value = transaction_value;
        this.transaction_category_id = transaction_category_id;
    }
}
