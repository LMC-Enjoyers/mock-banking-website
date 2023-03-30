import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Account } from "./account.entity"

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    user_id: string;

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

    @CreateDateColumn()
    create_time: Date;

    @OneToMany(() => Account, (account: Account) => account.user)
    accounts: Account[]
}
