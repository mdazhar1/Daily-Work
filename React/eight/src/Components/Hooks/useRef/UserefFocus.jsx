import React from 'react';
// import { useEffect } from 'react';
import { useRef } from 'react';

const UserefFocus = () => {
    const inputRef= useRef(null);
    console.log(inputRef)
    const handleFocus=()=>{
        inputRef.current.focus();
    }

    // useEffect(()=>{
    //         inputRef.current.focus();
    // },[])
    return (
        <div>
            <h1>Hello useRef</h1>
            <input ref={inputRef} type="text"  />
            <button onClick={handleFocus}>Focus the input box</button>
        </div>
    );
};

export default UserefFocus;