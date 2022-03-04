import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const AddTask = () => {
    const [userId,setUserId]=useState()
    const [title,setTitle]=useState()
    const [completed,setCompleted]=useState()
    const dispach=useDispatch()
    const Handelfunction=()=>{
        const item={userId:userId,title:title,completed:completed}
        dispach({type:"Add-List" , data:item})

    }
    return (
        <div>
            <input placeholder='userId' onChange={(ele)=>setUserId(ele.target.value)}/>
            <input placeholder='title' onChange={(ele)=>setTitle(ele.target.value)}/>
            <input placeholder='completed' onChange={(ele)=>setCompleted(ele.target.value)}/>
            <button onClick={Handelfunction}>Add Task</button>
            <Link to="/Tasks"><button>Cancel</button></Link>
            
        </div>
    );
};

export default AddTask;


// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false