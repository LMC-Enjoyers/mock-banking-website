import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

    @Column({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP" })
    create_time: Date;

    constructor(
        username: string,
        password: string,
        first_name: string,
        middle_name: string,
        last_name: string,
        email_address: string,
        mobile_number: string,
        dob: Date,
        create_time: Date
    ) {
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.middle_name = middle_name;
        this.last_name = last_name;
        this.email_address = email_address;
        this.mobile_number = mobile_number;
        this.dob = dob;
        this.create_time = create_time;
    }
}
