import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <h1>This is Navigation Component</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="Dishes">Dishes</Link></li>
                <li><Link to="Menu">Menu</Link></li>
                <li><Link to="Contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Navigation;