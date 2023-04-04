import { AccountTypeController } from "./controller/AccountTypeController";
import { BranchController } from "./controller/BranchController";
import { TransactionCategoryController } from "./controller/TransactionCategoryController";
import { UserController } from "./controller/UserController";
import { AccountType } from "./entity/account_type.entity";
import { Branch } from "./entity/branch.entity";
import { User } from "./entity/user.entity";
import { TransactionCategory } from "./entity/transaction_category.entity";
import { AccountController } from "./controller/AccountController";
import { Account } from "./entity/account.entity";
import { TransactionController } from "./controller/TransactionController";
import { Transaction } from "./entity/transaction.entity";

let savingAccountID;
let currentAccountID;

let depositID;
let withdrawalID;

let branchDurhamSortCode;
let branchNewcastleSortCode;

let userID;

let account1ID;
let account2ID;


async function test() {
    await addAccountTypes();
    await addTransactionCategories();
    await addBranches();
    await AddUser();
    await addAccounts();
    await addTransactions();

    const tt_c = new TransactionCategoryController();

    const deposit = new TransactionCategory();
    deposit.category_name = "Transfer";
    await tt_c.insert(deposit);
};

async function addAccountTypes() {
    const at_c = new AccountTypeController();

    const currentAccount = new AccountType();
    currentAccount.type_name = "Current Account";
    currentAccount.interest_rate = 0.0;
    await at_c.insert(currentAccount);
    currentAccountID = currentAccount.getID();

    const savingsAccount = new AccountType();
    savingsAccount.type_name = "Savings Account";
    savingsAccount.interest_rate = 3.0;
    await at_c.insert(savingsAccount);
    savingAccountID = savingsAccount.getID();
}

async function addTransactionCategories() {
    const tt_c = new TransactionCategoryController();

    const deposit = new TransactionCategory();
    deposit.category_name = "Deposit";
    await tt_c.insert(deposit);
    depositID = deposit.getID();

    const withdrawal = new TransactionCategory();
    withdrawal.category_name = "Withdrawal";
    await tt_c.insert(withdrawal);
    withdrawalID = withdrawal.getID();
}

async function addBranches() {
    const b_c = new BranchController();
    
    const branchDurham = new Branch();
    branchDurham.branch_name = "Durham";
    branchDurham.branch_sort_code = "123456";
    await b_c.insert(branchDurham);
    branchDurhamSortCode = branchDurham.branch_sort_code;

    const branchNewcastle = new Branch();
    branchNewcastle.branch_name = "Newcastle";
    branchNewcastle.branch_sort_code = "654321";
    await b_c.insert(branchNewcastle);
    branchNewcastleSortCode = branchNewcastle.branch_sort_code;
}

async function AddUser() {
    const u_c = new UserController();

    const user = new User();
    user.username = "johnny12";
    user.password = "password";
    user.first_name = "John";
    user.middle_name = "Paul";
    user.last_name = "Smith";
    user.email_address = "test@gmail.com";
    user.mobile_number = "07777777777";
    user.dob = new Date("1990-01-01");
    await u_c.insert(user);
    userID = user.getID();
}

async function addAccounts() {
    const a_c = new AccountController();

    const account1 = new Account();
    account1.user_id = userID;
    account1.account_no = "12345678";
    account1.sort_code = branchDurhamSortCode;
    account1.account_type_id = savingAccountID;
    await a_c.insert(account1);
    account1ID = account1.getID();

    const account2 = new Account();
    account2.user_id = userID;
    account2.account_no = "87654321";
    account2.sort_code = branchNewcastleSortCode;
    account2.account_type_id = currentAccountID;
    await a_c.insert(account2);
    account2ID = account2.getID();
}

async function addTransactions() {
    const t_c = new TransactionController();

    const transaction1 = new Transaction();
    transaction1.account_id = account1ID;
    transaction1.transaction_content = "Deposit";
    transaction1.transaction_value = 1000.00;
    transaction1.transaction_category_id = depositID;
    await t_c.insert(transaction1);

    const transaction2 = new Transaction();
    transaction2.account_id = account1ID;
    transaction2.transaction_content = "Deposit";
    transaction2.transaction_value = 500.00;
    transaction2.transaction_category_id = depositID;
    await t_c.insert(transaction2);

    const transaction3 = new Transaction();
    transaction3.account_id = account1ID;
    transaction3.transaction_content = "Withdrawal";
    transaction3.transaction_value = -200.00;
    transaction3.transaction_category_id = withdrawalID;
    await t_c.insert(transaction3);

    const transaction4 = new Transaction();
    transaction4.account_id = account2ID;
    transaction4.transaction_content = "Deposit at branch in Durham";
    transaction4.transaction_value = 3200.00;
    transaction4.transaction_category_id = depositID;
    await t_c.insert(transaction4);

    const transaction5 = new Transaction();
    transaction5.account_id = account2ID;
    transaction5.transaction_content = "Deposit at ATM in Newcastle";
    transaction5.transaction_value = 100.00;
    transaction5.transaction_category_id = depositID;
    await t_c.insert(transaction5);

    const transaction6 = new Transaction();
    transaction6.account_id = account2ID;
    transaction6.transaction_content = "Deposit at ATM in London";
    transaction6.transaction_value = 400.00;
    transaction6.transaction_category_id = depositID;

    const transaction7 = new Transaction();
    transaction7.account_id = account2ID;
    transaction7.transaction_content = "Withdrawal at ATM in Newcastle";
    transaction7.transaction_value = -200.00;
    transaction7.transaction_category_id = withdrawalID;
    await t_c.insert(transaction7);

    const transaction8 = new Transaction();
    transaction8.account_id = account2ID;
    transaction8.transaction_content = "Deposit at Tesco ATM";
    transaction8.transaction_value = 210.00;
    transaction8.transaction_category_id = depositID;
    await t_c.insert(transaction8);
}

test();
