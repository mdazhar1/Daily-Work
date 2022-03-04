import React,{useEffect, useRef, useState,} from "react";

const UseRef=()=>{
    const [time, setTime]=useState(0)
    const Timer=useRef(null)

    useEffect(()=>{
        Timer.current = setInterval(()=>{
            setTime((ele)=> ele + 1)
        },1000)
    },[])

    return(
        <div>
                <h1>Timer:{time}</h1>
        </div>
    )
}
export default UseRef;