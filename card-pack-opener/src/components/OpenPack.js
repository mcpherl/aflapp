import React, { useState } from 'react';

function OpenPack({ user }) {
    const [cards, setCards] = useState([]);

    const handleOpenPack = async () => {
        try {
            const response = await fetch(`http://localhost:3001/openPack/${user}`, {
                method: 'POST',
            });

            const data = await response.json();
            setCards(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error:', error);
            setCards([]);
        }
    };

    return (
        <div className="open-pack-container">
            <h1>Welcome, {user}!</h1>
            <button onClick={handleOpenPack}>Open Pack</button>
            <div className="cards-container">
                {cards.map((card, index) => (
                    <div key={index} className={`card ${card.rarity.toLowerCase()}`}>
                        <h3>{card.first_name} {card.last_name}</h3>
                        <p>Team: {card.team}</p>
                        <p>Position: {card.position1}</p>
                        <p>Rarity: {card.rarity}</p>
                        <p>Rank: {card.rank}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OpenPack;
