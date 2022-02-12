import React, { useReducer } from 'react';

export const initialState = {
    countOne: 0,
    countTwo: 10,
};

export const reducer = (state, action) => {
    if (action.type === "IncrementOne") {
        return { counter: state.counter + 1 };
    }
    if (action.type === "DecrementOne") {
        return { counter: state.counter - 1 };
    }
    if (action.type === "IncrementTwo") {
        return { counter: state.counter + 1 };
    }
    if (action.type === "DecrementTwo") {
        return { counter: state.counter - 1 };
    }


}
const CounterWithReducer = () => {
    const [count, dispach] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Hello useReducer!</h1>
            <h1>CountOne:{count.countOne}</h1>
            <button onClick={() => dispach({ type: "Increment" })}>IncrementCountOne</button>
            <button onClick={() => dispach({ type: "Decrement" })}>DecrementCountOne</button>
            <h2>CountTwo:{count.countTwo}</h2>
            <button onClick={() => dispach({ type: "Increment" })}>IncrementCountTwo</button>
            <button onClick={() => dispach({ type: "Decrement" })}>DecrementCountTwo</button>
        </div>
    );
};

export default CounterWithReducer;