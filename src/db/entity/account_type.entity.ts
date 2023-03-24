import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class AccountType {
    @PrimaryGeneratedColumn("uuid")
    account_type_id: string;

    @Column({ type: 'varchar', length: 64 })
    type_name: string;

    @Column({ type: 'decimal', default: () => null})
    interest_rate: number;

    @CreateDateColumn()
    create_time: Date;

    constructor(
        type_name: string,
        interest_rate: number
    ) {
        this.type_name = type_name;
        this.interest_rate = interest_rate;
    }
}
