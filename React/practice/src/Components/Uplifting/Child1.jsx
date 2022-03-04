import React from 'react';
import { data } from './data';

const Child1 = (props) => {
    {console.log(props.data)}
    return (
        <div>
            <h2>Child 1:{props.data}</h2>
            {data.map((item)=>(
                <>
                <h3>name:{item.name}</h3>
                <h3>name:{item.rollNo}</h3>
                </>
            ))}
        </div>
    );
}; 

export default Child1;