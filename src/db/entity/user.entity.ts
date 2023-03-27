import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Account } from "./account.entity"

@Entity()
export class User {
    ENTITY_NAME = "User"
    PK = "user_id"

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

    constructor(
        username: string,
        password: string,
        first_name: string,
        middle_name: string,
        last_name: string,
        email_address: string,
        mobile_number: string,
        dob: Date
    ) {
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.middle_name = middle_name;
        this.last_name = last_name;
        this.email_address = email_address;
        this.mobile_number = mobile_number;
        this.dob = dob;
    }
}