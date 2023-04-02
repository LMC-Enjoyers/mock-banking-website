import { Repository } from "typeorm";
import { ensureInitialisedDB } from "../data-source";

export abstract class BaseController<T> {
    protected abstract getRepository(): Repository<T>;

    async getAll(): Promise<T[]> {
        await ensureInitialisedDB();
        return this.getRepository().find();
    }

    async getByID(id: string): Promise<T> {
        await ensureInitialisedDB();
        return this.getRepository()
            .createQueryBuilder("entity")
            .where("entity.id = :id", { id })
            .getOne();
    }

    async insert(entity: T): Promise<void> {
        await ensureInitialisedDB();
        await this.getRepository().save(entity);
    }
}