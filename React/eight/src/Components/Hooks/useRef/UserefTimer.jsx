import React from 'react';
import { useState,useEffect,useRef } from 'react';

const UserefTimer = () => {
    const [timer,setTimer]=useState(0);
    const refValue=useRef(null);
    useEffect(()=>{
        refValue.current = setInterval(() => {
            setTimer((preState)=> preState+1)
        }, 1000);
    },[])

    return (
        <div>
            <h1>Timer:{timer}</h1>
        </div>
    );
};

export default UserefTimer;