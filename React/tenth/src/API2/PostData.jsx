import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const postData = () => {
    const [userId, setUserId] = useState();
    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const postDetails = () => {
        const request = { userId, title, body };
        axios.post("http://localhost:3000/data", request)
    }
    return (
        <div>
            <input type="text" placeholder='userId' onChange={(e) => setUserId(e.target.value)} />
            <br />
            <input type="text" placeholder='title' onChange={(e) => setTitle(e.target.value)} />
            <br />
            <input type="text" placeholder='body' onChange={(e) => setBody(e.target.value)} />
            <br />
            <button>Post{postDetails}</button>
        </div>
        
    );
};

export default postData;