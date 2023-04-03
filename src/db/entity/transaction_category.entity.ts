import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base_entity.entity';
import { Transaction } from "./transaction.entity"

@Entity()
export class TransactionCategory extends BaseEntity {
    @Column({ type: 'varchar', length: 32 })
    category_name: string;

    @OneToMany(() => Transaction, (transaction: Transaction) => transaction.account)
    transactions: Transaction[]
}
