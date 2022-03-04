import React from 'react';
import { useSelector } from 'react-redux';
import "./Dishes.css";

const Dishes = () => {
    const result=useSelector((state)=>state.DishesReducer.dishesData)
    return (
        <div>
           {result.map((e)=>{
               return(
                  <div className='pdiv'>
                      <img src={e.image} alt="" />
                      <h2 className='H'>{e.title}</h2>
                      <button>Details</button>
                      <button>Order</button>
                  </div>
               )
           })} 
        </div>
    );
};

export default Dishes;