import { Repository } from "typeorm";
import { AppDataSource, ensureInitialisedDB} from "../data-source";
import { Account } from "../entity/account.entity";
import { Transaction } from "../entity/transaction.entity";
import { BaseController } from "./BaseController";

export class AccountController extends BaseController<Account> {
    protected getRepository(): Repository<Account> {
        return AppDataSource.getRepository(Account);
    }

    async getTransactions(account_id: string): Promise<Transaction[]> {
        await ensureInitialisedDB();

        const transactions = await AppDataSource.getRepository(Transaction)
            .createQueryBuilder("transaction")
            .where("transaction.account_id = :id", { id: account_id })
            .getMany();

        return transactions;
    }

    async getCurrentBalance(account_id: string): Promise<number> {
        await ensureInitialisedDB();

        const currentBalance = await AppDataSource.getRepository(Transaction)
            .createQueryBuilder("transaction")
            .select("SUM(transaction.transaction_value)", "balance")
            .where("transaction.account_id = :id", { id: account_id })
            .getRawOne();

        return currentBalance.balance;
    }
}