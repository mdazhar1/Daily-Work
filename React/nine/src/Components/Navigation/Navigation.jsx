import React from 'react';
import "./Navigation.css";
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <ul>
                <input type="search" placeholder='Search Here...' />
                <button>Search</button>
                <li><Link to="/">Home</Link></li>
                <li><Link to="Dishes">Dishes</Link></li>
                <li><Link to="Menu">Menu</Link></li>
                <li><Link to="Contact">Contact</Link></li> 
            </ul>
            
        </div>
    );
};

export default Navigation;