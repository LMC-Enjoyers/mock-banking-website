import { AppDataSource, ensureInitialisedDB } from "../data-source";
import { Transaction } from "../entity/transaction.entity";

export class TransactionController {

    static async getAll(): Promise<Transaction[]> {
        await ensureInitialisedDB()
        return AppDataSource.manager.find(Transaction);
    }

    static async getAllByID(transaction_id: string): Promise<Transaction> {
        await ensureInitialisedDB()
        return AppDataSource
                .getRepository(Transaction)
                .createQueryBuilder("transaction")
                .where("transaction.transaction_id = :id", { id: transaction_id })
                .getOne()
    }

    static async insert(transaction: Transaction): Promise<void> {
        await AppDataSource.manager.save(transaction)
    }
}