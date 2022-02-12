import React from 'react';
import { useRef } from 'react';

const UserefMutableData = () => {
    const inputRefFile=useRef();
    return (
        <div>
            <input ref={inputRefFile} type="file" style={{display: "none"}} /><br />
            <button onClick={()=> inputRefFile.current.click()}>upload</button>
        </div>
    );
};

export default UserefMutableData;