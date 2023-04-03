import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base_entity.entity';
import { Account } from "./account.entity"

@Entity()
export class User extends BaseEntity {
    @Column({ type: 'varchar', length: 32 })
    username: string;

    @Column({ type: 'varchar', length: 64 })
    password: string;

    @Column({ type: 'varchar', length: 64 })
    first_name: string;

    @Column({ type: 'varchar', length: 64, default: () => null })
    middle_name: string;

    @Column({ type: 'varchar', length: 64 })
    last_name: string;

    @Column({ type: 'varchar', length: 128 })
    email_address: string;

    @Column({ type: 'varchar', length: 16 })
    mobile_number: string;

    @Column({ type: 'date' })
    dob: Date;

    @OneToMany(() => Account, (account: Account) => account.user)
    accounts: Account[]
}
