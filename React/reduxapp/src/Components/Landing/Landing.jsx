import React,{useState} from 'react';
import NavigationBar from '../A-Navigation/NavigationBar';
import ProductsList from '../B-Products/ProductsList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductDetails from '../Details/ProductDetails';
import CartItems from '../C-Cart/CartItems';

const Landing = () => {
    const [text, setText]=useState("");
    return (
        <div>
            <BrowserRouter>
            <NavigationBar setText={setText}/>
            <Routes>
                <Route path="/" element={<ProductsList text={text}/>}/>
                <Route path="Cart" element={<CartItems/>}/>
                <Route path="Details" element={<ProductDetails/>}/>
            </Routes>
            </BrowserRouter>
            
        </div>
    );
};

export default Landing;