import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Transaction } from "./transaction.entity"

@Entity()
export class TransactionCategory {
    @PrimaryGeneratedColumn("uuid")
    transaction_category_id: string;

    @Column({ type: 'varchar', length: 32 })
    category_name: string;

    @CreateDateColumn()
    create_time: Date;

    @OneToMany(() => Transaction, (transaction: Transaction) => transaction.account)
    transactions: Transaction[]
}
