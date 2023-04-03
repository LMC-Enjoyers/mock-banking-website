
import { UserController } from "./controller/UserController";
import { User } from "./entity/user.entity";
import { AccountController } from "./controller/AccountController";
import { Account } from "./entity/account.entity";
import { Transaction } from "./entity/transaction.entity";
import { TransactionController } from "./controller/TransactionController";

async function test() {
    // Display all users
    const u_c = new UserController();
    const users: User[] = await u_c.getAll();
    console.log("Users:", users);

    // Get specific user
    const user = users[0];

    // Display all accounts for user
    const accounts: Account[] = await u_c.getAccounts(user.getID());
    console.log("Accounts:", accounts);

    // Get specific accounts
    const account1 = accounts[0];
    const account2 = accounts[1];

    // Display all transactions for each account
    const a_c = new AccountController();
    const transactions1: Transaction[] = await a_c.getTransactions(account1.getID());
    const transactions2: Transaction[] = await a_c.getTransactions(account2.getID());
    console.log("Transactions for account 1:", transactions1);
    console.log("Transactions for account 2:", transactions2);

    // Display current balance for each account
    console.log("Current balance for account 1:", await a_c.getCurrentBalance(account1.getID()));
    console.log("Current balance for account 2:", await a_c.getCurrentBalance(account2.getID()));

    // Display all transactions
    const t_c = new TransactionController();
    console.log("All transactions:", await t_c.getAll());
}

test();
