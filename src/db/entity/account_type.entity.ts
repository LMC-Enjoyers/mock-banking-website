import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Account } from "./account.entity"

@Entity()
export class AccountType {
    ENTITY_NAME = "AccountType"
    PK = "account_type_id"

    @PrimaryGeneratedColumn("uuid")
    account_type_id: string;

    @Column({ type: 'varchar', length: 64 })
    type_name: string;

    @Column({ type: 'decimal', default: () => null})
    interest_rate: number;

    @CreateDateColumn()
    create_time: Date;

    @OneToMany(() => Account, (account: Account) => account.account_type)
    accounts: Account[]

    constructor(
        type_name: string,
        interest_rate: number
    ) {
        this.type_name = type_name;
        this.interest_rate = interest_rate;
    }
}
