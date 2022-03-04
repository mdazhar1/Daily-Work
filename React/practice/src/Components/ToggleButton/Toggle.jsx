import React,{useState} from 'react';

const Toggle = () => {
    const [name, setName]=useState("Maaz Quadri")
    
    
    const changeName=()=>{
        setName("Mustafa Quadri")
        
    if (name === "Maaz Quadri"){
        setName("Mustafa Quadri")
    }else{
        setName("Maaz Quadri") 
    }
}
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>Click Me</button>
        </div>
    );
};

export default Toggle;