import { TransactionController } from "../db/controller/TransactionController"
import { Transaction } from "../db/entity/transaction.entity";
import { UserController } from "../db/controller/UserController"
import { AccountController } from "../db/controller/AccountController"
import { Account } from "../db/entity/account.entity";
import { TransactionCategoryController } from "../db/controller/TransactionCategoryController";
const express = require('express');
const app = express();
app.use(express.json({ limit: '50mb' }));
const cors = require('cors');
app.use(cors())

app.get("/user", async(req, resp)=>{
	const user = new UserController()
	const user_det = await user.getUser("johnny12", "password")
	resp.send(user_det)
})
app.get("/acc", async(req, resp)=>{
    // Hard coded user id
    const user_id = "a9bbc01b-40bd-4f93-9f87-fa0614a459b7"

    // Fetch all the accounts belonging to the user
	const uc = new UserController()
	const accounts = await uc.getAccounts(user_id)
    
    resp.send(accounts)
})

app.get("/transac_made", async(req, resp)=>{
	const transc = new AccountController()
	const trans_made = await transc.getTransactions(req.body.acc_id)
	resp.send(trans_made)
})

app.post("/new_acc", async(req, resp)=>{
	const new_acc = new Account()
	const ac = new AccountController()
	// Need to check if duplicate account number or instead use 
	// new_acc.account_no = Math.floor(Math.random() * Math.pow(10, 8) - 1).toString();
	new_acc.account_no = req.body.account_name
	new_acc.sort_code = "123456"
	new_acc.user_id = "a9bbc01b-40bd-4f93-9f87-fa0614a459b7"
    new_acc.account_type_id = "9419e9a7-c1c3-4552-90d4-31529995cc3e"
    
	await ac.insert(new_acc)
	resp.status(200).send()
})
app.post("/del_acc", async(req, resp)=>{
	const del = new AccountController()
	await del.delete(req.body.id)
	resp.status(204).send()
})

app.post("/new_transfer", async(req, resp)=>{
    const tcc = new TransactionCategoryController()
    const transferCategoryID = await tcc.getCategoryIDbyName("Transfer")

    const tc = new TransactionController()
    const new_transaction_out = new Transaction()
    new_transaction_out.account_id = req.body.source_acc_id
    new_transaction_out.transaction_content = req.body.content
    new_transaction_out.transaction_value = -req.body.value // negative value for outgoing transaction
    new_transaction_out.transaction_category_id = transferCategoryID
    await tc.insert(new_transaction_out)

    const ac = new AccountController()
    const destination__acc_id = await ac.getAccountID(req.body.destination_account_no, req.body.destination_sort_code)

    const new_transaction_in = new Transaction()
    new_transaction_in.account_id = destination__acc_id
    new_transaction_in.transaction_content = req.body.content
    new_transaction_in.transaction_value = req.body.value // positive value for incoming transaction
    new_transaction_in.transaction_category_id = transferCategoryID
    await tc.insert(new_transaction_in)

    resp.status(200).send()
})


export default app;