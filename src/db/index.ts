import { BranchController } from "./controller/BranchController"
import { Branch } from "./entity/branch.entity";

async function test() {


    const bc = new BranchController()
    const branch = await bc.get('4b9fc2ad-f9d6-4f08-9757-9f505019518d')
    console.log("Found branch: ", branch)

    const newBranch = new Branch()
    newBranch.branch_name = "Natwest Durham"
    newBranch.branch_sort_code = "398259"
    await bc.insert(newBranch)

    const branches = await bc.getAll();
    console.log("Loaded branches: ", branches)

    console.log("Added branch: ", newBranch);
    await bc.delete(newBranch.getID())

    const branches2 = await bc.getAll();
    console.log("Loaded branches: ", branches2)
};

test()
