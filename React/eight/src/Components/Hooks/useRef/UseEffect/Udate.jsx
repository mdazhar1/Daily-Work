
import React, { useEffect, useState } from 'react';

const Udate = () => {
    const Names = [
        "Maaz",
        "vaishali",
        "sarwat",
        "simran",
        "naheed",
        "javeriya",
        "alvina",
        "eman",
    ]

    const [text, setText] = useState("");
    const [lists, setLists] = useState(Names);

    useEffect(() => {
        const result = Names.filter((elem) => elem.toLowerCase().includes(text.toLowerCase()));
        setLists(result)
    }, [text])

    return (
        <div>
            <h1>Name Search</h1>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            {lists.map((Name) => {
                return <li>{Names}</li>
            })}
        </div>
    );
};

export default Udate;