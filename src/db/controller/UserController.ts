import { Repository } from "typeorm";
import { AppDataSource, ensureInitialisedDB} from "../data-source";
import { Account } from "../entity/account.entity";
import { User } from "../entity/user.entity";
import { BaseController } from "./BaseController";

export class UserController extends BaseController<User> {
    
    protected getRepository(): Repository<User> {
        return AppDataSource.getRepository(User);
    }

    async getAllAccounts(user_id: string): Promise<Account[]> {
        await ensureInitialisedDB();

        const accountRepository = await AppDataSource.getRepository(Account);

        const accounts = accountRepository
            .createQueryBuilder("account")
            .where("account.user_id = :user_id", { user_id })
            .getMany();

        return accounts;
    }

    async getUser(username: string, password: string): Promise<User> {
        await ensureInitialisedDB();

        const user = await this.getRepository()
            .createQueryBuilder("user")
            .where("user.username = :username", { username: username })
            .andWhere("user.password = :password", { password: password })
            .getOne();

        return user;
    
    }
}