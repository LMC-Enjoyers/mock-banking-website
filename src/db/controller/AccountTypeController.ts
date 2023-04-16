import { Repository } from "typeorm";
import { AppDataSource, ensureInitialisedDB} from "../data-source";
import { AccountType } from "../entity/account_type.entity";
import { BaseController } from "./BaseController";

export class AccountTypeController extends BaseController<AccountType> {
    protected getRepository(): Repository<AccountType> {
        return AppDataSource.getRepository(AccountType);
    }

    async getAccountTypeID(type_no: string): Promise<string> {
        await ensureInitialisedDB();

        const accountTypeRepository = await AppDataSource.getRepository(AccountType);

        const account_type: any = await accountTypeRepository
            .createQueryBuilder("account_type")
            .select("account_type.id")
            .where("account_type.type_name = :type_name", { type_name: type_no })
            .getRawOne();

        return account_type.account_type_id;
    }
}