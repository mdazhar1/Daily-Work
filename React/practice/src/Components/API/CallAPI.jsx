import React,{useEffect, useState} from 'react';
import axios from "axios";

const CallAPI = () => {
    const [pdata, setData]=useState([]);

    const getData=async()=>{
        const result=await axios.get("https://fakestoreapi.com/products")
        // console.log("====>",result)
        setData(result.data)
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <div>
            {pdata.map((ele)=>{
                return(
                <div>
                    <h1>{ele.title}</h1>
                    <img src={ele.image} alt="" />
                    <p>{ele.description}</p>
                </div>
                )
            })}
        </div>
    );
};

export default CallAPI;