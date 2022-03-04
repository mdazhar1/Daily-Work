import React, { useReducer } from 'react';


const initiailState = 0;
const reducer = (state,action)=>{
if (action.type === "Increament"){
    return state + 1;
}
if (action.type === "Decreament"){
    return state - 1;
}
return state;
}

const Counter1 = () => {
    const [state, dispatch]= useReducer(reducer, initiailState)
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={()=> dispatch({type: "Increament"})}>increament</button>
            <button onClick={()=> dispatch({type: "Decreament"})}>decreament</button>
        </div>
    );
};

export default Counter1;