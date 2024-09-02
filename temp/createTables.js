// db/createTables.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./playerCards.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Create Users table
db.run(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
);`, (err) => {
    if (err) {
        console.error("Error creating users table:", err.message);
    } else {
        console.log("Users table created successfully.");
    }
});

// Create Inventory table
db.run(`
CREATE TABLE IF NOT EXISTS inventory (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    card_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (card_id) REFERENCES cards(id)
);`, (err) => {
    if (err) {
        console.error("Error creating inventory table:", err.message);
    } else {
        console.log("Inventory table created successfully.");
    }
    db.close();
});
