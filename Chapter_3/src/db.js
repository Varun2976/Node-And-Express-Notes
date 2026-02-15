import {DatabaseSync} from 'node:sqlite'
const db = new DatabaseSync(':memory:')

// Auto - incremenet increases the id by 1 everytime a new user is added
db.exec(`
    CREATE TABLE users(
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        username TEXT UNIQUE,
        password TEXT
    )
    `)
db.exec(`
    CREATE TABLE todos(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        task TEXT,
        completed BOOLEAN DEFAULT 0,
        FOREIGN KEY(user_id) references users(id)
    )
    `)

export default db