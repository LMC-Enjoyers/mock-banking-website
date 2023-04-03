import { Repository } from "typeorm";
import { AppDataSource} from "../data-source";
import { User } from "../entity/user.entity";
import { BaseController } from "./BaseController";

export class UserController extends BaseController<User> {
    
    protected getRepository(): Repository<User> {
        return AppDataSource.getRepository(User);
    }
}