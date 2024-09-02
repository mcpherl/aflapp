const sqlite3 = require('sqlite3').verbose();

// Create a new database file and open a connection to it
let db = new sqlite3.Database('./playerCards.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// SQL statement to create a new table with more columns
const sqlCreateTable = `
CREATE TABLE IF NOT EXISTS cards (
  id INTEGER PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  team_id INTEGER NOT NULL,
  previous_average REAL,
  team TEXT NOT NULL,
  position1 TEXT,
  probability REAL NOT NULL
);`;

// Execute the SQL to create the table
db.run(sqlCreateTable, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Table created or already exists.');
  }
});

// Close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Closed the database connection.');
  }
});
