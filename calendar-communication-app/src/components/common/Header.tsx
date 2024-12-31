import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styling

const Header = () => {
    return (
        <header className="app-header">
            <h1>Communication Tracker</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/admin">Admin</Link></li>
                    <li><Link to="/user">User</Link></li>
                    <li><Link to="/reports">Reports</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;