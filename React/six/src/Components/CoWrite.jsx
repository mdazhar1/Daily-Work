import React, {useState} from 'react';

export const CoWrite = () => {
    const [data, setData]=useState("pdac");
    return (
        <div>
            <input onChange={(e)=> setData(e.target.value)}></input>
            <h1>{data}</h1>
        </div>
    );
};