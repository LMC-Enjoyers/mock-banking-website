import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const PATH_TO_DATABASE = 'bank.db';

async function connectToDatabase() {
  const db = await open({
    filename: PATH_TO_DATABASE,
    driver: sqlite3.Database
  });
  return db;
}

async function getAllUsers() {
    try {
        const db = await connectToDatabase();
  
        const rows = await db.all('SELECT * FROM tblUser');
      
        return rows;
        
    } catch (error: any) {
        console.error(error.message);
    }

  }