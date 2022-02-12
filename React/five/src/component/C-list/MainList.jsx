import React from 'react';
import Staff from './Lists/Staff';
import Student from './Lists/Student';
import Teachers from './Lists/Teachers';

const MainList = () => {
    return (
        <div>
            <h1>This is Main List Component</h1>
            <Student/>
            <Teachers/>
            <Staff/>
        </div>
    );
};

export default MainList;