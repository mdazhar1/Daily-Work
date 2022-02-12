import React from 'react';

const ProductItem = (props) => {
    console.log(props.item)
    return (
        <div className='pitem'>
            <h3>{props.item.title}</h3>
            <img src={props.item.image} alt="ProductImage" width="200px" />
            <p>{props.item.price}</p>
            <p>{props.item.discription}</p>
        </div>
    );
};

export default ProductItem;