import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css";

const Navigation = () => {
    return (
        <div>
            <ul>
                <li><Link to="LoginPage">Login</Link></li> 
                <li><Link to="/">Home</Link></li> 
                <li><Link to="Tasks">Tasks</Link></li> 
                <li><Link to="User">User</Link></li> 
            </ul>
        </div>
    );
};

export default Navigation;