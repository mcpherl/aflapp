import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registration({ onLogin }) {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3001/users/${name}`);

            if (response.ok) {
                onLogin(name);
                navigate(`/openPack`);
            } else {
                const registerResponse = await fetch('http://localhost:3001/users/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name })
                });

                if (registerResponse.ok) {
                    onLogin(name);
                    navigate(`/openPack`);
                } else {
                    alert('Failed to register or login.');
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="registration-container">
            <h1>Register or Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Registration;
