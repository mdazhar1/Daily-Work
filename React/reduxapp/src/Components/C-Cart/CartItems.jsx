import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartItems = () => {
    const dispatch=useDispatch()
    const cartItems=useSelector((state)=>state.productReducer.cart)
    return (
        <div style={{display: "flex", flexWrap:"wrap"}}>
            
            {cartItems!== undefined && cartItems.map((item)=>{
                return(
                <div>
                     <img src={item.image} width="250px" height="250px" alt="" />
            <h4>Price:${item.price}</h4>
            <h4>{item.title.slice(0, 20)+"..."}</h4>
           
            <Link to="/details">
                <button>View Details</button></Link>
                <button onClick={()=> dispatch({type: "Remove-Item", data: item})}>remove</button>
                </div>
                )
            })}
        </div>
    );
};

export default CartItems;