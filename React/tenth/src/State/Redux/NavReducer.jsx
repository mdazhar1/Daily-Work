import React from 'react';
import { useSelector } from 'react-redux';

const NavReducer = () => {
    const selector=useSelector((ele)=>ele.NavReducer.NavData)
    return (
        <div>
            {selector.map((ele)=>(
                <>
                <a href={ele.link}>{ele.title}</a> </>
            ))}
        </div>
    );
};

export default NavReducer;