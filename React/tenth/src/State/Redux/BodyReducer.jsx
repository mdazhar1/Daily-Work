import React from 'react';
import { useSelector } from 'react-redux';

const BodyReducer = () => {
    const selector=useSelector((ele)=>ele.bodyReducer.Data)
    return (
        <div>
            {selector.map((ele)=>(
                <div key={ele.id}>
                    <h1>{ele.title}</h1>
                    <img src={ele.image}/>
                    <p>{ele.description}</p>
                    </div>
                    ))},
        </div>
    );
};

export default BodyReducer; 

