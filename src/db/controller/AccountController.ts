import { Repository } from "typeorm";
import { AppDataSource, ensureInitialisedDB} from "../data-source";
import { Account } from "../entity/account.entity";
import { AccountType } from "../entity/account_type.entity";
import { Transaction } from "../entity/transaction.entity";
import { AccountTypeController } from "./AccountTypeController";
import { BaseController } from "./BaseController";

export class AccountController extends BaseController<Account> {
    protected getRepository(): Repository<Account> {
        return AppDataSource.getRepository(Account);
    }

    async getTransactions(account_id: string): Promise<Transaction[]> {
        await ensureInitialisedDB();

        const transactionRepository = await AppDataSource.getRepository(Transaction);

        const transactions = await transactionRepository
            .createQueryBuilder("transaction")
            .where("transaction.account_id = :id", { id: account_id })
            .getMany();

        return transactions;
    }

    async getCurrentBalance(account_id: string): Promise<number> {
        await ensureInitialisedDB();

        const transactionRepository = await AppDataSource.getRepository(Transaction);

        const currentBalance: any = await transactionRepository
            .createQueryBuilder("transaction")
            .select("SUM(transaction.transaction_value)", "balance")
            .where("transaction.account_id = :id", { id: account_id })
            .getRawOne();

        return currentBalance.balance;
    }
    
    async getAccountID(account_no: string, sort_code: string): Promise<string> {
        await ensureInitialisedDB();

        const accountRepository = await AppDataSource.getRepository(Account);

        const account: any = await accountRepository
            .createQueryBuilder("account")
            .select("account.id")
            .where("account.account_no = :account_no", { account_no: account_no })
            .andWhere("account.sort_code = :sort_code", { sort_code: sort_code })
            .getRawOne();

        return account.account_id;
    }

    async getInterest(acc_id: string): Promise<number> {
        await ensureInitialisedDB();

        const accountRepository = await AppDataSource.getRepository(Account);

        const account: Account = await accountRepository
            .createQueryBuilder("account")
            .where("account.id = :id", { id: acc_id })
            .getOne();

        const atc = new AccountTypeController()    
        const account_type: AccountType = await atc.get(account.account_type_id)

        return account_type.interest_rate;
    }
}