const express = require('express');
const path = require("path")
const fs = require("fs")
const app = express();
app.use(express.json())
const JSON_file_name = "../mockDB.json"
const the_db = require(JSON_file_name)
//app.use(express.static(path.join(__dirname, "src/App.tsx")))


app.get("/user_details", function(req, resp){
	const username = the_db.username
    resp.send(username)
})
app.get("/user_details/accounts_details", function(req, resp){
	//insert sort code, account number, balance
    // needs to do ^^ for all account - should be easy with a query
    const account = the_db.account
    resp.send(account)
})
app.get("/user_details/accounts_details/transactions_made", function(req, resp){
	//lists all transactions from the specified account - The listed transactions should state amount in/out, sort code and account number
    // needs to do ^^ for all transactions - should be easy with a query
    const transaction = the_db.transaction
    resp.send(transaction)
})

app.post("/user_create", function(req, resp){
	//new user is created
    the_db.username = "new_user"
    fs.writeFileSync(JSON_file_name, JSON.stringify(the_db))
    const username = the_db.username
    resp.send(username)
})
app.post("/user_details/accounts/create", function(req, resp){
	//new account created from a specific user
    // will need to assign it a sort code and account number (mock)
    the_db.account = "new_account"
    fs.writeFileSync(JSON_file_name, JSON.stringify(the_db))
    const account = the_db.account
    resp.send(account)
})
app.post("/user_details/accounts/delete", function(req, resp){
	//simply removes an account from a specific user
    the_db.account = "delete_account"
    fs.writeFileSync(JSON_file_name, JSON.stringify(the_db))
    const account = the_db.account
    resp.send(account)
})
app.post("/user_details/accounts/transactions", function(req, resp){
	//a user has moved money from Account A to Account B (doesn't matter abt the user)
    //subtract money from balance A and add equivalent to Account B
    //create a transaction instance and put it under both Account A and B, where A will show negation of B money in.
    the_db.transaction = "transaction made"
    fs.writeFileSync(JSON_file_name, JSON.stringify(the_db))
    const transaction = the_db.transaction
    resp.send(transaction)
})

app.listen(5050)
export default app;