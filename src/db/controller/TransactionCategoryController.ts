import { AppDataSource, ensureInitialisedDB } from "../data-source";
import { TransactionCategory } from "../entity/transaction_category.entity";

export class TransactionCategoryController {

    static async getAll(): Promise<TransactionCategory[]> {
        await ensureInitialisedDB()
        return AppDataSource.manager.find(TransactionCategory);
    }

    static async getAllByID(transaction_category_id: string): Promise<TransactionCategory> {
        await ensureInitialisedDB()
        return AppDataSource
                .getRepository(TransactionCategory)
                .createQueryBuilder("transaction_category")
                .where("transaction_category.transaction_category_id = :id", { id: transaction_category_id })
                .getOne()
    }

    static async insert(transaction_category: TransactionCategory): Promise<void> {
        await AppDataSource.manager.save(transaction_category)
    }
}