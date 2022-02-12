import React from 'react';

const Yash = (prpos) => {
    
    return (
        <div>
            
            <button onClick={prpos.increase}>Increase</button>
            <button onClick={prpos.decrease}>Decrease</button>

        </div>
    );
};

export default Yash;