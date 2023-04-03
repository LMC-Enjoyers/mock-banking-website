import { Repository } from "typeorm";
import { AppDataSource} from "../data-source";
import { Transaction } from "../entity/transaction.entity";
import { BaseController } from "./BaseController";

export class TransactionController extends BaseController<Transaction> {
    
    protected getRepository(): Repository<Transaction> {
        return AppDataSource.getRepository(Transaction);
    }
}