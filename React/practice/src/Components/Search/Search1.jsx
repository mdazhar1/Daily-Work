import React, { useEffect, useState } from 'react';

const Search1 = () => {
    const Names=[
        "Dariya",
        "Eman",
        "Ayat",
        "Seema",
        "Fariha",
        "Amena",
        "Zainab"
    ]
    const [list, setList]=useState(Names)
    const [text, setText]=useState("")

    useEffect(()=>{
        const filtered = Names.filter((e)=>e.toLowerCase().includes(text.toLocaleLowerCase()))
        setList(filtered)
    },[text])

    return (
        <div>
            <input type="text" onChange={(e)=> setText(e.target.value)}/>
            {list.map((e)=>{
                return <li>{e}</li>
            })}
        </div>
    );
};

export default Search1;