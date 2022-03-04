import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Product = () => {
    const[data,setData]=useState([])
    const getData=async()=>{
       const result=await axios.get("https://fakestoreapi.com/products")
        setData(result.data)
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <div>
            {data.map((item)=>{
                return(
                    <div>
                       <h1>{item.title}</h1> 
                       {/* <img src={item.image} alt="" /> */}
                       <p>{item.description}</p>

                    </div>
                )
            })}
        </div>
    );
};

export default Product;