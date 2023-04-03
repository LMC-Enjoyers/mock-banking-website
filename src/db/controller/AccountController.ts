import { Repository } from "typeorm";
import { AppDataSource} from "../data-source";
import { Account } from "../entity/account.entity";
import { BaseController } from "./BaseController";

export class AccountController extends BaseController<Account> {
    protected getRepository(): Repository<Account> {
        return AppDataSource.getRepository(Account);
    }
}