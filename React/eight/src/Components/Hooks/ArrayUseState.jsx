import React, { useState } from 'react';

const ArrayUseState = () => {
    const [text, setText] = useState("");
    const [data, setData] = useState([]);
    const handleInputValue = (elem) => {
        setText(elem.target.value);
    };
    const handleData = () => {
        setData([...data, text]);
        console.log("check data--", data)
    }
    return (
        <div>
            <h1>This is Array in UseState</h1>
            <input type="text" onChange={handleInputValue} />
            <button onClick={handleData}>Add</button>
            <ul>
                {data.map((element) => {
                    return <li>{element}</li>;
                })}
            </ul>
        </div>
    );
};

export default ArrayUseState;