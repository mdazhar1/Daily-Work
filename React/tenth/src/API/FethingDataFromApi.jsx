import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const FethingDataFromApi = () => {
    const [data, setData] = useState([])
    const getPostDetail = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/posts")
        // console.log("result==>", result.data);
        setData(result.data)
    }
    useEffect(() => {
        getPostDetail();
    }, [])
    return (
        <div>
            <h1>Main Component</h1>
            {data.map((myData) => {
                return (
                    <div key={myData.id}>
                        <h4>{myData.title}</h4>
                        <p>{myData.body}</p>
                    </div>
                );
            })}

        </div>
    );
};

export default FethingDataFromApi;