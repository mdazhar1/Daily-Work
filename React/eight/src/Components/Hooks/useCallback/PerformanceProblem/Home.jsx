import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import Button from './Button';
import Title from './Title';
import Value from './Value';

const Home = () => {
    const [age, setAge]= useState(24);
    const [income, setIncome]=useState(10000);
    const handleAge = useCallback(()=>{
        setAge(age+1)
    },[age])
    const handleIncome = useCallback(()=>{
        setIncome(income+5000)
    },[income])

    // const handleAge=()=>{
    //     setAge(age+1);
    // };
    // const handleIncome=()=>{
    //     setIncome(income + 5000);
    // }
    return (
        <div>
            <h1>This is Home Component</h1>
            <Title />
            <Value text="Age" count={age}/>
            <Button handleFunction={handleAge}>Add Age</Button>
            <Value text="Income" count={income}/>
            <Button handleFunction={handleIncome}>Add Income</Button>
        </div>
    );
};

export default Home;