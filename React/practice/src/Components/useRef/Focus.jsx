import React, { useEffect, useRef } from "react";

const Focus=()=>{
    const Maaz= useRef(null);

    useEffect(()=>{
            Maaz.current.focus();
    },[])
    return (
        <div>
            <h1>Hello useRef</h1>
            <input ref={Maaz} type="text"  />
            <button>Focus the input box</button>
        </div>
    );
}
export default Focus;