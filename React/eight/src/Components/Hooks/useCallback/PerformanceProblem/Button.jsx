import React, { Children } from 'react';
import "./Button.css"

const Button = ({handleFunction,children}) => {
    console.log("Button comp Rendered",children)
    return (
        <div>
            <button className='button' onClick={handleFunction}>{children}</button>
        </div>
    );
};

export default React.memo(Button);