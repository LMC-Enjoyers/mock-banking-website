import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from "./user.entity"
import { Branch } from "./branch.entity"
import { AccountType } from "./account_type.entity"
import { Transaction } from "./transaction.entity"

@Entity()
export class Account {
    @PrimaryGeneratedColumn("uuid")
    account_id: string;

    @Column({ type: 'varchar', length: 36 })
    user_id: string;

    @Column({ type: 'varchar', length: 8 })
    account_no: string;

    @Column({ type: 'varchar', length: 6 })
    sort_code: string;

    @Column({ type: 'varchar', length: 36 })
    account_type_id: string;

    @CreateDateColumn()
    create_time: Date;

    @ManyToOne(() => User, (user) => user.accounts)
    user: User;

    @ManyToOne(() => Branch, (branch: Branch) => branch.accounts)
    branch: Branch;

    @ManyToOne(() => AccountType, (account_type) => account_type.accounts)
    account_type: AccountType;

    @OneToMany(() => Transaction, (transaction: Transaction) => transaction.account)
    transactions: Transaction[]
}
