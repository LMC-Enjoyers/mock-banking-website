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
}