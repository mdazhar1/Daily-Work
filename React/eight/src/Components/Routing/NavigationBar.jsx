import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <h1>This is NavigationBar Component</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Products">Products</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/ContactUs">ContactUs</Link></li>
            </ul>
        </div>
    );
};

export default NavigationBar;