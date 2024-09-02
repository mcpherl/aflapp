import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Registration from './components/Registration';
import OpenPack from './components/OpenPack';
import Inventory from './components/Inventory';
import Compete from './components/Compete';
import './App.css';


function App() {
    const [user, setUser] = useState(null);

    const handleLogin = (name) => {
        setUser(name);
    };

    const handleLogout = () => {
        setUser(null);
    };

    return (
        <Router>
            <div>
                {user && (
                    <nav className="nav-bar">
                        <Link to="/openPack">Open Pack</Link>
                        <Link to={`/inventory/${user}`}>Inventory</Link>
                        <Link to="/compete">Compete</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </nav>
                )}
                <Routes>
                    <Route path="/" element={<Registration onLogin={handleLogin} />} />
                    {user ? (
                        <>
                            <Route path="/openPack" element={<OpenPack user={user} />} />
                            <Route path="/inventory/:name" element={<Inventory user={user} />} />
                            <Route path="/compete" element={<Compete user={user} />} />
                        </>
                    ) : (
                        <Route path="*" element={<Navigate to="/" />} />
                    )}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
