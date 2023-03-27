import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Transaction } from "./transaction.entity"

@Entity()
export class TransactionCategory {
    ENTITY_NAME = "TransactionCategory"
    PK = "transaction_category_id"

    @PrimaryGeneratedColumn("uuid")
    transaction_category_id: string;

    @Column({ type: 'varchar', length: 32 })
    category_name: string;

    @CreateDateColumn()
    create_time: Date;

    @OneToMany(() => Transaction, (transaction: Transaction) => transaction.account)
    transactions: Transaction[]

    constructor(
        category_name: string
    ) {
        this.category_name = category_name;
    }
}