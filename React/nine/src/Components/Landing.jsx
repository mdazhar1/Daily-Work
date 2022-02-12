import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from './Navigation';
import Home from './Home';
import Dishes from './Dishes';
import Menu from './Menu';
import Contact from '../Contact';

const Landing = () => {
    return (
        <div>
            <h1>This is Landing Component</h1>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="Dishes" element={<Dishes />} />
                    <Route path="Menu" element={<Menu />} />
                    <Route path="Contact" element={<Contact />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Landing;