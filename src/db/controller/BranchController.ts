import { AppDataSource, ensureInitialisedDB } from "../data-source";
import { Branch } from "../entity/branch.entity";

export class BranchController {

    static async getAll(): Promise<Branch[]> {
        await ensureInitialisedDB()
        return AppDataSource.manager.find(Branch);
    }

    static async getByID(branch_id: string): Promise<Branch> {
        await ensureInitialisedDB()
        return AppDataSource
                .getRepository(Branch)
                .createQueryBuilder("branch")
                .where("branch.branch_id = :id", { id: branch_id })
                .getOne()
    }

    static async insert(branch: Branch): Promise<void> {
        await AppDataSource.manager.save(branch)
    }
}