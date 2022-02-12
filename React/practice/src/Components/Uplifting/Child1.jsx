import React from 'react';

const Child1 = (props) => {
    
    return (
        <div>
            <input type="text" onChange={(e)=> props.handleFunction(e.target.value)}/>
            <h2>Text:{props.text}</h2>
        </div>
    );
};

export default Child1;