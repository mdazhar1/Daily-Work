import React, { useEffect, useState } from 'react';

const Filter = () => {
    const data=[
        "Monday",
        "Tuesday",
        "Thersday",
        "wenusday",
        "thersday",
        "friday",
        "saterday"
    ]
    const[text,setext]=useState("")
    const[list,setlist]=useState(data)
        useEffect(()=>{
            const fill= list.filter((ele)=>ele.toLowerCase().includes(text.toLowerCase()))
            setlist(fill)
        },[text])
    return (
        <div>
            <input type="text" onChange={(e)=>setext(e.target.value)} />
            {list.map((ele)=>(<h2>{ele}</h2>))}
            
        </div>
    );
};

export default Filter;

