import React, { useState } from 'react';

const Counter = () => {
    const [count,setCount]=useState(0)

    const Increament=()=>{
        setCount(count+1)
    }
    const Decreament=()=>{
        setCount(count-1)
    }


    return (
        <div>
            <h2>Count:{count}</h2>
            <button onClick={Increament}>Increament</button>
            <button onClick={Decreament}>Decreament</button>
        </div>
    );
};

export default Counter;