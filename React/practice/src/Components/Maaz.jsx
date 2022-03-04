import React, { useState } from 'react';
import Yash from './Yash';

const Maaz = () => {
    const [count, setCount]=useState(0)
    const increase=()=>{
        setCount(count+1)
    }
    const decrease=()=>{ 
        setCount(count-1)
    }


    return (
        <div>
           <h2> count:{count}</h2>
            <Yash increase={increase} decrease={decrease}/>
            
        </div>
    );
};

export default Maaz;