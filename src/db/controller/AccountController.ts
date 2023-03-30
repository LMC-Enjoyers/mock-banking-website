import { AppDataSource, ensureInitialisedDB } from "../data-source";
import { Account } from "../entity/account.entity";

export class AccountController {

    static async getAll(): Promise<Account[]> {
        await ensureInitialisedDB()
        return AppDataSource.manager.find(Account);
    }

    static async getByID(account_id: string): Promise<Account> {
        await ensureInitialisedDB()
        return AppDataSource
                .getRepository(Account)
                .createQueryBuilder("account")
                .where("account.account_id = :id", { id: account_id })
                .getOne()
    }

    static async insert(account: Account): Promise<void> {
        await AppDataSource.manager.save(account)
    }
}