// routes/openPack.js
const express = require('express');
const router = express.Router();
const db = require('../db/database');

// Function to select a card based on weighted probabilities
function weightedRandomSelect(players) {
    let sum = 0;
    const r = Math.random();
    for (let player of players) {
        sum += player.probability;
        if (r <= sum) {
            return {
                id: player.id,
                first_name: player.first_name,
                last_name: player.last_name,
                team_id: player.team_id,
                previous_average: player.previous_average,
                team: player.team,
                position1: player.position1,
                rarity: player.Rarity,
                rank: player.rank,
                probability: player.probability
            };
        }
    }
    return null; // In case of rounding errors
}

// Function to open a pack of cards
function openPack() {
    return new Promise((resolve, reject) => {
        db.all("SELECT id, first_name, last_name, team_id, previous_average, team, position1, probability, Rarity, rank FROM cards", [], (err, players) => {
            if (err) {
                return reject(err);
            }

            const totalProbability = players.reduce((acc, curr) => acc + curr.probability, 0);
            const scalingFactor = 1 / totalProbability;
            const normalizedPlayers = players.map(player => ({
                ...player,
                probability: player.probability * scalingFactor
            }));

            const result = [];
            for (let i = 0; i < 5; i++) {
                result.push(weightedRandomSelect(normalizedPlayers));
            }
            resolve(result);
        });
    });
}

// Open a pack and optionally save to inventory
router.post('/:username?', (req, res) => {
    const { username } = req.params;

    if (username) {
        db.get(`SELECT id FROM users WHERE name = ?`, [username], (err, user) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            openPack()
                .then(pack => {
                    const insertStmt = db.prepare(`INSERT INTO inventory (user_id, card_id) VALUES (?, ?)`);
                    pack.forEach(card => {
                        insertStmt.run(user.id, card.id);
                    });
                    insertStmt.finalize();
                    res.json(pack); // Return the opened pack
                })
                .catch(err => res.status(500).json({ error: err.message }));
        });
    } else {
        openPack()
            .then(pack => {
                res.json(pack); // Return the opened pack
            })
            .catch(err => res.status(500).json({ error: err.message }));
    }
});

module.exports = router;
