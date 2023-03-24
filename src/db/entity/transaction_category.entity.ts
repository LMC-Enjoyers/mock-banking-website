import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TransactionCategory {
    @PrimaryGeneratedColumn("uuid")
    transaction_category_id: string;

    @Column({ type: 'varchar', length: 32 })
    category_name: string;

    @Column({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP" })
    create_time: Date;

    constructor(
        category_name: string,
        create_time: Date
    ) {
        this.category_name = category_name;
        this.create_time = create_time;
    }
}
