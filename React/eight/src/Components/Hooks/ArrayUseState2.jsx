import React from 'react';
import { useState } from 'react';

const ArrayUseState2 = () => {
    const [text, setText] = useState()
    const [data, setData] = useState()

    const handleText = (e) => {
        setText(e.target.value)
    }
    const handleData = () => {
        setData(...data, text) 
    }

    return (
        <div>
            <input type="text" onChange={handleText} />
            <button onClick={handleData}>Add</button>
            <ul>{data.map((e) => {
                return <li>{e}</li>
            })}
            </ul>
        </div>
    );
};

export default ArrayUseState2;