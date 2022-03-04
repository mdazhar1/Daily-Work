import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';

const ProductsList = ({text}) => {
    const allProducts=useSelector((state)=>state.productReducer.products)
    const [products, setProducts]=useState([])
    const dispatch=useDispatch();
    const getProducts=async()=>{
        const apiData=await axios.get("https://fakestoreapi.com/products")
        console.log("api data ==>" ,apiData.data)
        allProducts.length === 0 && dispatch({type: "Add-Products", data: apiData.data})
        setProducts(apiData.data)
    };
    useEffect(()=>{
        const filtered = allProducts.filter((item)=>item.title.toLowerCase().includes(text.toLowerCase()))
        setProducts(filtered);
    },[text])
    useEffect(()=>{
        getProducts();
    },[])
    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {products.map((item)=>{
                return <ProductCard item={item}/>;
            })}
        </div>
    );
};

export default ProductsList;