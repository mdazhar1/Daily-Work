import React, { useState } from 'react';

const Timer = () => {
    const [time,setTime]=useState(0);
     setTimeout(() => {
        setTime(time+1)
    },1000);
    return (
        <div>
            <h1>{time}</h1>
        </div>
    );
};

export default Timer;