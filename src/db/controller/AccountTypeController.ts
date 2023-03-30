import { AppDataSource, ensureInitialisedDB } from "../data-source";
import { AccountType } from "../entity/account_type.entity";

export class AccountTypeController {

    static async getAll(): Promise<AccountType[]> {
        await ensureInitialisedDB()
        return AppDataSource.manager.find(AccountType);
    }

    static async getByID(account_type_id: string): Promise<AccountType> {
        await ensureInitialisedDB()
        return AppDataSource
                .getRepository(AccountType)
                .createQueryBuilder("account_type")
                .where("account_type.account_type_id = :id", { id: account_type_id })
                .getOne()
    }


    static async insert(account_type: AccountType): Promise<void> {
        await AppDataSource.manager.save(account_type)
    }
}