import React from 'react';
import Grandchild from "./Grandchild"

const Child2 = ({data}) => {
    return (
        <div>
            <h1>Child2:{data}</h1>
            <Grandchild data={data}/>
        </div>
    );
};

export default Child2;