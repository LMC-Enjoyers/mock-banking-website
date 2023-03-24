import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AccountType {
    @PrimaryGeneratedColumn("uuid")
    account_type_id: string;

    @Column({ type: 'varchar', length: 64 })
    type_name: string;

    @Column({ type: 'decimal', default: () => null})
    interest_rate: number;

    @Column({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP" })
    create_time: Date;

    constructor(
        type_name: string,
        interest_rate: number,
        create_time: Date
    ) {
        this.type_name = type_name;
        this.interest_rate = interest_rate;
        this.create_time = create_time;
    }
}
