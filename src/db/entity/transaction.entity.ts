import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base_entity.entity';
import { Account } from "./account.entity"
import { TransactionCategory } from "./transaction_category.entity"

@Entity()
export class Transaction extends BaseEntity {
    @Column({ type: 'varchar', length: 36 })
    account_id: string;

    @Column({ type: 'varchar', length: 64 })
    transaction_content: string;

    @Column({ type: 'decimal' })
    transaction_value: number;

    @Column({ type: 'varchar', length: 36 })
    transaction_category_id: string;

    @ManyToOne(() => Account, (account) => account.transactions)
    account: Account;

    @ManyToOne(() => TransactionCategory, (transaction_category) => transaction_category.transactions)
    transaction_category: TransactionCategory;
}
