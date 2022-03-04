import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./navigation.css";


const NavigationBar = ({setText}) => {
    const cartItems=useSelector((state)=>state.productReducer.cart)
    return (
        <div className='nav'>
            <Link to="/" >Home</Link>
            <input type="search" placeholder='Search Here...' onChange={(e)=> setText(e.target.value)}/>
           <button>Search</button>
            <Link to="Cart">Cart:{cartItems.length}</Link>
         
        </div>
    );
};

export default NavigationBar;