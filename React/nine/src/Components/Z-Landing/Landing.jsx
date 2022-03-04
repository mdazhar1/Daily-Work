import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from '../Navigation/Navigation';   
import Home from '../Home/Home';
import Dishes from '../Dishes/Dishes';
import Menu from '../Menu/Menu';
import Contact from '../Contact/Contact';

const Landing = () => {
    return (
        <div>
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