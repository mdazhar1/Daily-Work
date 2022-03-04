import React, { useEffect, useRef, useState } from 'react';

const UserefTimer = () => {
   const [time, setTime]=useState(0);
   const Timer=useRef(null);
   useEffect(()=>{
       Timer.current = setInterval(() => {
           setTime((e)=> e + 1)
       }, 1000);
},[])
return(
    <div>
        <h1>Timer:{time}</h1>
    </div>
)
};

export default UserefTimer;