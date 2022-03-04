import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";

const Navigation = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="Products">Products</Link></li>
                <li><Link to="Contact">Contact</Link></li>
                <li><Link to="About">About</Link></li>
            </ul>
        </div>
    );
};

export default Navigation;