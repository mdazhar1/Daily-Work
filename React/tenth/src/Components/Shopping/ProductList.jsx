import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import "./ProductItem.css";
import axios from 'axios';



const ProductList = () => {
    const [data, setData] = useState([]);
    const getProducts = async () => {
        const result = await axios.get("https://fakestoreapi.com/products");
        setData(result.data)
        // console.log(result.data);
    }
    useEffect(() => {
        getProducts();
    }, [])


    return (
        <div className='plist'>
            {data.map((item) => {

                return (
                    <div>
                        <ProductItem item={item} key={item.id} />
                        <p>{item.title}</p>
                        <p>{item.category}</p>
                    </div>
                )
            })}

        </div>
    );
};

export default ProductList;