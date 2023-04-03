import { Repository } from "typeorm";
import { AppDataSource} from "../data-source";
import { TransactionCategory } from "../entity/transaction_category.entity";
import { BaseController } from "./BaseController";

export class TransactionCategoryController extends BaseController<TransactionCategory> {
    
    protected getRepository(): Repository<TransactionCategory> {
        return AppDataSource.getRepository(TransactionCategory);
    }
}