import React, { useEffect, useState } from 'react';

const UE = () => {
    const[cont,setcont]=useState(0)
useEffect(()=>{
    return(console.log("Die"))
},[cont])


    return (
        <div>
            <h1>This is mu UseEffect component</h1>
            <h2>{cont}</h2>
            <button >Incriment</button>
            <input/>
            <button>onClick</button>


        </div>
    );
};

export default UE;