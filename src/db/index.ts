import { BranchController } from "./controller/BranchController"
import { Branch } from "./entity/branch.entity";

async function test() {

    const branch = await BranchController.getByID('4b9fc2ad-f9d6-4f08-9757-9f505019518d')
    console.log("Found branch: ", branch)

    const newBranch = new Branch()
    newBranch.branch_name = "Natwest Durham"
    newBranch.branch_sort_code = "398259"
    await BranchController.insert(newBranch)

    const branches = await BranchController.getAll();
    console.log("Loaded branches: ", branches)
};

test()
