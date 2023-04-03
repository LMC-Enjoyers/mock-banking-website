import { PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

export class BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    protected id: string;

    @CreateDateColumn()
    protected create_time: Date;

    getID(): string {
        return this.id;
    }

    getCreateTime(): Date {
        return this.create_time;
    }
}
