import React, { useState } from 'react';

const Time1 = () => {
    const [time,setTime]=useState(0)
    setTimeout(() => {
        setTime(time+1)
    }, 1000);
   
    return (
        <div>
            <h1>Timer:{time}</h1>
        </div>
    );
};

export default Time1;