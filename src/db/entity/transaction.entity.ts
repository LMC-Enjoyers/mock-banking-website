import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { Account } from "./account.entity"
import { TransactionCategory } from "./transaction_category.entity"

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

    @ManyToOne(() => Account, (account) => account.transactions)
    account: Account;

    @ManyToOne(() => TransactionCategory, (transaction_category) => transaction_category.transactions)
    transaction_category: TransactionCategory;
}
