import React, { useEffect, useState } from 'react';

const DidUpdate = () => {
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thirsday",
        "Friday",
        "Saturday",
        "Sunday",
    ]
    const [text, setText] = useState("");
    const [lists, setLists] = useState(days);
    useEffect(() => {
        const filtered = days.filter((elem) => elem.toLowerCase().includes(text.toLowerCase()));
        setLists(filtered);
    }, [text]);
    return (
        <div>
            <h1>This is DidUpdate Component</h1>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <ul>
                {lists.map((days) => {
                    return <li>{days}</li>
                })}
            </ul>
        </div>
    );
};

export default DidUpdate;