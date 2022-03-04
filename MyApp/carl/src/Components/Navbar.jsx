import React from 'react';
import { useSelector } from 'react-redux';
import "./Product.css";

const Navbar = () => {
    const nav=useSelector((state)=>state.navReducers.navData);
    return (
        <div className='p'>
           {nav.map((e)=>{
               return(
                  <div className='m'>
                    <a href={e.link} target={e.target}>{e.title}</a>
                  </div>
               )
           })} 
        </div>
    ); 
};

export default Navbar;