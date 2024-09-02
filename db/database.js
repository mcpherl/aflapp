// db/database.js
const sqlite3 = require('sqlite3').verbose();

const dbPath = './playerCards.db';
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(`Connected to the SQLite database at ${dbPath}`);
    }
});

module.exports = db;
