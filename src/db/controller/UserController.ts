import { AppDataSource, ensureInitialisedDB } from "../data-source";
import { User } from "../entity/user.entity";

export class UserController {

    static async getAll(): Promise<User[]> {
        await ensureInitialisedDB()
        return AppDataSource.manager.find(User);
    }

    static async getByID(user_id: string): Promise<User> {
        await ensureInitialisedDB()
        return AppDataSource
                .getRepository(User)
                .createQueryBuilder("user")
                .where("user.user_id = :id", { id: user_id })
                .getOne()
    }

    static async insert(user: User): Promise<void> {
        await AppDataSource.manager.save(user)
    }
}