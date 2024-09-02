// routes/inventory.js
const express = require('express');
const router = express.Router();
const db = require('../db/database');

// Get all players (no user check required)
router.get('/allPlayers', (req, res) => {
    db.all(`SELECT * FROM cards ORDER BY rank ASC`, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Get a user's inventory (user-specific)
router.get('/:username', (req, res) => {
    const { username } = req.params;

    db.get(`SELECT id FROM users WHERE name = ?`, [username], (err, user) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        db.all(`SELECT cards.*, inventory.quantity FROM inventory
                JOIN cards ON inventory.card_id = cards.id
                WHERE inventory.user_id = ?`, [user.id], (err, rows) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(rows);
        });
    });
});

module.exports = router;
