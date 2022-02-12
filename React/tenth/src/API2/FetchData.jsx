import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const FetchData = () => {
    const [apiData, setApiData] = useState([]);
    const getPosts = async () => {
        const result = await axios.get("http://localhost:3000/data");
        setApiData(result.data);
        // .then((responce) => {
        //     console.log(responce);
        // })
        // .catch((error) => {
        //     console.log(error);
        // })
            // window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    }
    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div>
            {apiData.map((item) => {
                return (
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.discription}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default FetchData;