import React, { useReducer } from "react";

const initialValue=(0) 

const reducer=(state, action)=>{
    if (action.type === "Increament"){
        return state + 1;
    }
    if (action.type === "Decreament"){
        return state - 1;
    }
        return state;
}

const Counter=()=>{
    const [state, dispatch]=useReducer(reducer, initialValue)
    return(
        <div>
            <h1>Count:{state}</h1>
            <button onClick={()=> dispatch ({type: "Increament"})}>Inc</button>
            <button onClick={()=> dispatch ({type: "Decreament"})}>Dec</button>
        </div>
    )
}
export default Counter;