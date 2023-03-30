import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Account } from "./account.entity"

@Entity()
export class Branch {
    @PrimaryGeneratedColumn("uuid")
    branch_id: string;

    @Column({ type: 'varchar', length: 64 })
    branch_name: string;

    @Column({ type: 'varchar', length: 8 })
    branch_sort_code: string;

    @CreateDateColumn()
    create_time: Date;

    @OneToMany(() => Account, (account: Account) => account.branch)
    accounts: Account[]
}
