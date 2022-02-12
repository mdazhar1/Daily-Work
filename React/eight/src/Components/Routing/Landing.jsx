import React from 'react';
import NavigationBar from './NavigationBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home"
import Services from "./Services"
import Products from "./Products"
import ContactUs from "./ContactUs"

const Landing = () => {
    return (
        <div>
            <h1>This is Landing Component</h1>
            <BrowserRouter>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="Services" element={<Services />} />
                    <Route path="Products" element={<Products />} />
                    <Route path="ContactUs" element={<ContactUs />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Landing;