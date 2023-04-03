import { Repository } from "typeorm";
import { AppDataSource} from "../data-source";
import { AccountType } from "../entity/account_type.entity";
import { BaseController } from "./BaseController";

export class AccountTypeController extends BaseController<AccountType> {
    protected getRepository(): Repository<AccountType> {
        return AppDataSource.getRepository(AccountType);
    }
}