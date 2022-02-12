import React from 'react';
import { useSelector } from 'react-redux';

const FetchDataFromRedux = () => {
    const selector= useSelector((ele)=> ele.sampleReducer.myState);
    return (
        <div>
            {selector.map((ele)=>(
                <div key={ele.id}>
                    <h1>ID:{ele.id}</h1>
                    <h1>Title:{ele.title}</h1>
                    <h3>Price: {ele.price}</h3>
                    <p>Discription:{ele.description}</p>
                    <h1>Category:{ele.category}</h1>
                    <img src={ele.image} />
                </div>
                ))},
        </div>
        
    );
};

export default FetchDataFromRedux;