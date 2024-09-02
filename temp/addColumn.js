// db/addColumn.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./playerCards.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Add the Rank column
const sqlAddColumn = `
ALTER TABLE cards
ADD COLUMN Rarity STRING;
`;

db.run(sqlAddColumn, (err) => {
    if (err) {
        console.error('Error adding column:', err.message);
    } else {
        console.log('Rarity column added successfully.');
    }
    db.close();
});
