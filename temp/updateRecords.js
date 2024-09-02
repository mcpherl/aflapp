// db/updateRecords.js
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const db = new sqlite3.Database('./playerCards.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Read the JSON data
const data = JSON.parse(fs.readFileSync('updatedData.json', 'utf8'));

// Update each record with the new Rarity  
data.forEach(player => {
    db.run(`
        UPDATE cards
        SET Rarity = ?
        WHERE id = ?
    `, [player.Rarity, player.id], (err) => {
        if (err) {
            console.error(`Error updating record for id ${player.id}:`, err.message);
        } else {
            console.log(`Record for id ${player.id} updated successfully.`);
        }
    });
});

// Close the database connection
db.close((err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Database connection closed.');
    }
});
