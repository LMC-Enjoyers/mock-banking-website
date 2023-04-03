import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base_entity.entity';
import { Account } from "./account.entity"

@Entity()
export class Branch extends BaseEntity {
    @Column({ type: 'varchar', length: 64 })
    branch_name: string;

    @Column({ type: 'varchar', length: 8 })
    branch_sort_code: string;

    @OneToMany(() => Account, (account: Account) => account.branch)
    accounts: Account[]
}
