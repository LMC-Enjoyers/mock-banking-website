import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Account } from "./account.entity"

@Entity()
export class AccountType {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: 'varchar', length: 64 })
    type_name: string;

    @Column({ type: 'decimal', default: () => null})
    interest_rate: number;

    @CreateDateColumn()
    create_time: Date;

    @OneToMany(() => Account, (account: Account) => account.account_type)
    accounts: Account[]
}
