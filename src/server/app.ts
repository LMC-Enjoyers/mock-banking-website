//import { BranchController } from "../db/controller/BranchController"
//import { Branch } from "../db/entity/branch.entity";
//import { TransactionCategoryController } from "../db/controller/TransactionCategoryController"
//import { TransactionCategory } from "../db/entity/transaction_category.entity";
//import { TransactionController } from "../db/controller/TransactionController"
//import { Transaction } from "../db/entity/transaction.entity";
//import { UserController } from "../db/controller/UserController"
//import { User } from "../db/entity/user.entity";
//import { AccountController } from "../db/controller/AccountController"
//import { Account } from "../db/entity/account.entity";
//import { AccountTypeController } from "../db/controller/AccountTypeController"
//import { AccountType } from "../db/entity/account_type.entity";
const express = require('express');
const app = express();
app.use(express.json())

//app.use(express.static(path.join(__dirname, "src/App.tsx")))


app.get("/user_details", function(req, resp){
	console.log("passed thru here 3")
	resp.send("yes 4")
})
app.get("/user_details/accounts_details", function(req, resp){
	//insert sort code, account number, balance
    // needs to do ^^ for all account - should be easy with a query
})
app.get("/user_details/accounts_details/transactions_made", function(req, resp){
	//lists all transactions from the specified account - The listed transactions should state amount in/out, sort code and account number
    // needs to do ^^ for all transactions - should be easy with a query
})

app.post("/user_create", function(req, resp){
	//new user is created
})
app.post("/user_details/accounts/create", function(req, resp){
	//new account created from a specific user
    // will need to assign it a sort code and account number (mock)
})
app.post("/user_details/accounts/delete", function(req, resp){
	//simply removes an account from a specific user
})
app.post("/user_details/accounts/transactions", function(req, resp){
	//a user has moved money from Account A to Account B (doesn't matter abt the user)
    //subtract money from balance A and add equivalent to Account B
    //create a transaction instance and put it under both Account A and B, where A will show negation of B money in.
})

app.listen(5050)
export default app;