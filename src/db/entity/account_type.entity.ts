import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base_entity.entity';
import { Account } from "./account.entity"

@Entity()
export class AccountType extends BaseEntity {
    @Column({ type: 'varchar', length: 64 })
    type_name: string;

    @Column({ type: 'decimal', default: () => null})
    interest_rate: number;

    @OneToMany(() => Account, (account: Account) => account.account_type)
    accounts: Account[]
}
