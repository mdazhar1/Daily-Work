import React, { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';


const Maaz = () => {
    const [text,settext]=useState("")
  
   return(
       <div>
           <div style={{height:"200px", border:"2px solid" , backgroundColor:"red"}}>
           <h1>home</h1>
           <input type="text" onChange={(e)=>settext(e.target.value)} />
          
          
          
          {console.log("------",text)}
          
           <div style={{height:"500px", width:"500px", border:"2px solid" , backgroundColor:"blue",color:"white"}}>
           <Child1 data={text}/>
           <Child2   data={text}/>
           </div>
           </div>
       </div>
   )
}; 

export default Maaz;