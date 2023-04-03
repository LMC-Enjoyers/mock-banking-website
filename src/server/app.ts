import { BranchController } from "../db/controller/BranchController"
import { Branch } from "../db/entity/branch.entity";
import { TransactionCategoryController } from "../db/controller/TransactionCategoryController"
import { TransactionCategory } from "../db/entity/transaction_category.entity";
import { TransactionController } from "../db/controller/TransactionController"
import { Transaction } from "../db/entity/transaction.entity";
import { UserController } from "../db/controller/UserController"
import { User } from "../db/entity/user.entity";
import { AccountController } from "../db/controller/AccountController"
import { Account } from "../db/entity/account.entity";
import { AccountTypeController } from "../db/controller/AccountTypeController"
import { AccountType } from "../db/entity/account_type.entity";
import { BaseController } from "../db/controller/BaseController"
const express = require('express');
const app = express();
app.use(express.json())

//app.use(express.static(path.join(__dirname, "src/App.tsx")))


app.get("/user", async(req, resp)=>{
	const user = new UserController()
	const user_det = await user.get("1")
	resp.send(user_det)
})
app.get("/acc", async(req, resp)=>{
	const acc = new AccountController()
	const acc_det = await acc.get(req)
	resp.send(acc_det)
})
app.get("/transac_made", async(req, resp)=>{
	const transc = new TransactionController()
	const trans_made = await transc.get(req)
	resp.send(trans_made)
})


app.post("/new_acc", async(req, resp)=>{
	//new account created from a specific user
    // will need to assign it a sort code and account number (mock)
	const new_acc = new Account()
	const ac = new AccountController()
	new_acc.account_no = "12345"
	new_acc.sort_code = "54321"
	new_acc.user_id = req.body.user_id
	await ac.insert(new_acc)
	resp.status(200).send()
})
app.post("/del_acc", async(req, resp)=>{
	//simply removes an account from a specific user
	const del = new AccountController()
	const del_acc = await del.delete(req.body.id)
	resp.status(204).send()
})
app.post("/new_transac", async(req, resp)=>{
	//a user has moved money from Account A to Account B (doesn't matter abt the user)
    //subtract money from balance A and add equivalent to Account B
    //create a transaction instance and put it under both Account A and B, where A will show negation of B money in.
	const new_tr = new Transaction()
	const tc = new TransactionController()
	new_tr.account_id = req.body.acc_id
	new_tr.transaction_content = req.body.content
	new_tr.transaction_value = req.body.val
	await tc.insert(new_tr)
	resp.status(200).send()
})

export default app;