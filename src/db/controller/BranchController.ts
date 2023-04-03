import { Repository } from "typeorm";
import { AppDataSource} from "../data-source";
import { Branch } from "../entity/branch.entity";
import { BaseController } from "./BaseController";

export class BranchController extends BaseController<Branch> {
    
    protected getRepository(): Repository<Branch> {
        return AppDataSource.getRepository(Branch);
    }
}