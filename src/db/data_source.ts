import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/user.entity"
import { Account } from "./entity/account.entity"
import { Branch } from "./entity/branch.entity"
import { AccountType } from "./entity/account_type.entity"
import { Transaction } from "./entity/transaction.entity"
import { TransactionCategory } from "./entity/transaction_category.entity"

const PATH_TO_DATABASE = './src/db/bank.db';

export const AppDataSource = new DataSource({
        type: 'sqlite',
        database: PATH_TO_DATABASE,
        entities: [User, Account, Branch, AccountType, Transaction, TransactionCategory],
        synchronize: true,
    })