import { TransactionController } from "../db/controller/TransactionController"
import { Transaction } from "../db/entity/transaction.entity";
import { UserController } from "../db/controller/UserController"
import { AccountController } from "../db/controller/AccountController"
import { Account } from "../db/entity/account.entity";
const express = require('express');
const app = express();
app.use(express.json())


app.get("/user", async(req, resp)=>{
	const user = new UserController()
	const user_det = await user.getUser(req.body.username, req.body.password)
	resp.send(user_det)
})
app.get("/acc", async(req, resp)=>{
	const acc = new UserController()
	const acc_det = await acc.getAccounts(req.body.user_id)
	resp.send(acc_det)
})
app.get("/transac_made", async(req, resp)=>{
	const transc = new AccountController()
	const trans_made = await transc.getTransactions(req.body.acc_id)
	resp.send(trans_made)
})


app.post("/new_acc", async(req, resp)=>{
	const new_acc = new Account()
	const ac = new AccountController()
	new_acc.account_no = "12345"//mock numbers obv
	new_acc.sort_code = "54321"
	new_acc.user_id = req.body.user_id
	await ac.insert(new_acc)
	resp.status(200).send()
})
app.post("/del_acc", async(req, resp)=>{
	const del = new AccountController()
	await del.delete(req.body.id)
	resp.status(204).send()
})
app.post("/new_transac", async(req, resp)=>{
	const new_tr = new Transaction()
	const tc = new TransactionController()
	new_tr.account_id = req.body.acc_id
	new_tr.transaction_content = req.body.content
	new_tr.transaction_value = req.body.val
	await tc.insert(new_tr)
	resp.status(200).send()
})

export default app;