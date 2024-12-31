import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Assuming you have a CSS file for styling

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Navigation</h2>
            <ul>
                <li>
                    <Link to="/admin">Admin Module</Link>
                </li>
                <li>
                    <Link to="/user">User Module</Link>
                </li>
                <li>
                    <Link to="/reports">Reporting Module</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;