import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Account {
    @PrimaryGeneratedColumn("uuid")
    account_id: string;

    @Column({ type: 'varchar', length: 36 })
    user_id: string;

    @Column({ type: 'varchar', length: 8 })
    account_no: string;

    @Column({ type: 'varchar', length: 6 })
    sort_code: string;

    @Column({ type: 'varchar', length: 36 })
    account_type_id: string;

    @CreateDateColumn()
    create_time: Date;

    constructor(
        user_id: string,
        account_no: string,
        sort_code: string,
        account_type_id: string
    ) {
        this.user_id = user_id;
        this.account_no = account_no;
        this.sort_code = sort_code;
        this.account_type_id = account_type_id;
    }
}
