import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { Account } from "./account.entity"
import { TransactionCategory } from "./transaction_category.entity"

@Entity()
export class Transaction {
    ENTITY_NAME = "Transaction"
    PK = "transaction_id"

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
