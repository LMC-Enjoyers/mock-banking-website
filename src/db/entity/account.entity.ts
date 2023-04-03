import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base_entity.entity';
import { User } from "./user.entity"
import { Branch } from "./branch.entity"
import { AccountType } from "./account_type.entity"
import { Transaction } from "./transaction.entity"

@Entity()
export class Account extends BaseEntity {
    @Column({ type: 'varchar', length: 36 })
    user_id: string;

    @Column({ type: 'varchar', length: 8 })
    account_no: string;

    @Column({ type: 'varchar', length: 6 })
    sort_code: string;

    @Column({ type: 'varchar', length: 36 })
    account_type_id: string;

    @ManyToOne(() => User, (user) => user.accounts)
    user: User;

    @ManyToOne(() => Branch, (branch: Branch) => branch.accounts)
    branch: Branch;

    @ManyToOne(() => AccountType, (account_type) => account_type.accounts)
    account_type: AccountType;

    @OneToMany(() => Transaction, (transaction: Transaction) => transaction.account)
    transactions: Transaction[]
}
