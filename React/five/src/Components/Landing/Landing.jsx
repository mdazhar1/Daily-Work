import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';
import Product from '../Products/Product';

const Landing = () => {
    return (
        <div>
            <BrowserRouter>
            <Navigation/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="Product" element={<Product/>}/>
                    <Route path="Contact" element={<Contact/>}/>
                    <Route path="About" element={<About/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Landing;