import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Inventory.css'; // Assuming you create a separate CSS file for styles

function Inventory() {
    const { name } = useParams();
    const [inventory, setInventory] = useState([]);
    const [showOwned, setShowOwned] = useState(true);
    const [rarityFilter, setRarityFilter] = useState('');
    const [allPlayers, setAllPlayers] = useState([]);

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const response = await fetch(`http://localhost:3001/inventory/${name}`);
                const data = await response.json();
                console.log("Fetched inventory:", data);  // Debugging line
                setInventory(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        const fetchAllPlayers = async () => {
            try {
                const response = await fetch(`http://localhost:3001/inventory/allPlayers`);
                const data = await response.json();
                console.log("Fetched all players:", data);  // Debugging line
                setAllPlayers(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchInventory();
        fetchAllPlayers();
    }, [name]);

    const filteredPlayers = allPlayers
        .map(player => {
            const ownedPlayer = inventory.find(item => item.id === player.id);
            return ownedPlayer ? { ...player, quantity: ownedPlayer.quantity } : { ...player, quantity: 0 };
        })
        .filter(player => {
            if (showOwned && player.quantity === 0) return false;
            if (rarityFilter && player.Rarity !== rarityFilter) return false;
            return true;
        })
        .sort((a, b) => a.rank - b.rank);

    console.log("Filtered players:", filteredPlayers);  // Debugging line

    return (
        <div className="inventory-container">
            <h1>{name}'s Inventory</h1>

            <div className="filters">
                <label>
                    <input 
                        type="checkbox" 
                        checked={showOwned} 
                        onChange={() => setShowOwned(!showOwned)} 
                    /> 
                    Owned
                </label>

                <label>
                    Rarity:
                    <select value={rarityFilter} onChange={e => setRarityFilter(e.target.value)}>
                        <option value="">All</option>
                        <option value="Common">Common</option>
                        <option value="Rare">Rare</option>
                        <option value="Epic">Epic</option>
                        <option value="Legendary">Legendary</option>
                    </select>
                </label>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Team</th>
                        <th>Position</th>
                        <th>Rarity</th>
                        <th>Rank</th>
                        <th className="hidden-header">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPlayers.map((player, index) => (
                        <tr key={index} style={{ color: player.quantity === 0 ? 'lightgrey' : 'black' }}>
                            <td>{player.first_name} {player.last_name}</td>
                            <td>{player.team}</td>
                            <td>{player.position1}</td>
                            <td>{player.Rarity}</td>
                            <td>{player.rank}</td>
                            <td>{player.quantity > 1 ? `x ${player.quantity}` : ''}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Inventory;
