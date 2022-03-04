import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Products = () => {
    const [pdata,setdata]=useState([]);
    const getData=async ()=>{
        const result =await axios.get ("https://fakestoreapi.com/products");
        setdata(result.data);
    }
    useEffect(()=>{
        getData();
    },[])
    return (
        <div>
            {pdata.map((item)=>(
                <div>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt="" />
                </div>
            ))}
        </div>
    );
};

export default Products;