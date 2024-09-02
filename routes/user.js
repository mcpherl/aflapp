// routes/user.js
const express = require('express');
const router = express.Router();
const db = require('../db/database');

// Register a new user
router.post('/register', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    db.run(`INSERT INTO users (name) VALUES (?)`, [name], function(err) {
        if (err) {
            return res.status(500).json({ error: 'User already exists or another error occurred' });
        }
        res.json({ id: this.lastID, name });
    });
});

// Get user by name
router.get('/:name', (req, res) => {
    const { name } = req.params;
    db.get(`SELECT * FROM users WHERE name = ?`, [name], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(row);
    });
});

module.exports = router;
