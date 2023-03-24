import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Branch {
    @PrimaryGeneratedColumn("uuid")
    branch_id: string;

    @Column({ type: 'varchar', length: 64 })
    branch_name: string;

    @Column({ type: 'varchar', length: 8 })
    branch_sort_code: string;

    @Column({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP" })
    create_time: Date;

    constructor(
        branch_name: string,
        branch_sort_code: string,
        create_time: Date
    ) {
        this.branch_name = branch_name;
        this.branch_sort_code = branch_sort_code;
        this.create_time = create_time;
    }
}
