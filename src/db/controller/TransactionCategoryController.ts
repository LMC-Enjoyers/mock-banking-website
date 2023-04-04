import { Repository } from "typeorm";
import { AppDataSource, ensureInitialisedDB} from "../data-source";
import { TransactionCategory } from "../entity/transaction_category.entity";
import { BaseController } from "./BaseController";

export class TransactionCategoryController extends BaseController<TransactionCategory> {
    
    protected getRepository(): Repository<TransactionCategory> {
        return AppDataSource.getRepository(TransactionCategory);
    }

    async getCategoryIDbyName(name: string): Promise<string> {
        await ensureInitialisedDB();
        
        return this.getRepository().createQueryBuilder("transaction_category")
            .select("transaction_category.id")
            .where("transaction_category.category_name = :name", {name: name})
            .getRawOne()
            .then((result) => {
                return result.transaction_category_id;
            })
    }
}