import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "./All.css";

const ProductCard = ({item}) => {
    const dispatch=useDispatch();
    return (
        <div className='M' style={{margin:"50px"}}>
            <img src={item.image} width="250px" height="250px" alt="" />
            <h4>Price:${item.price}</h4>
            <h4>{item.title.slice(0, 20)}</h4>
            <button onClick={()=> dispatch({type: "Add-Cart", data:item})}>Add to Cart</button>
            <Link to="/details">
                <button onClick={()=> dispatch({type: "Selected-item", data:item})}>View Details</button></Link>
        </div>
    );
};

export default ProductCard;