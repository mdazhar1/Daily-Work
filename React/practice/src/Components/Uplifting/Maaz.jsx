import React, { useState } from 'react';
import Child1 from './Child1';


const Maaz = () => {
    const [text, setText]=useState("maaz")
    const handleFunction=(e)=>{
        setText(e)
    }
   return(
       <div>
           <h1>home</h1>
           <Child1 handleFunction={handleFunction} text={text}/>
       </div>
   )
};

export default Maaz;