import React, { useEffect, useState } from 'react';
import "./Navigation.css";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddTask from './AddTask';


const Tasks = () => {
    const [data,setData]=useState([])
    const details=useSelector((ele)=>ele.sampleReducer.list)
    const dispach=useDispatch();
    const getData=async ()=>{
        const result=await axios.get("http://jsonplaceholder.typicode.com/todos")
        dispach({type:"Add-List",data:result.data})
        setData(result.data)
    }
    useEffect(()=>{
        getData(details)
    },[])
    return (
        <div>
            <Link to="AddTask"><button>Add Task</button></Link>
                    {data.map((item)=>{
                         return(
                           <ul key={item.userId}>
                               <li>{item.id}</li>
                               <li>{item.title}</li>
                               <li>{item.completed}</li>
                           </ul>
                )
            })}
        </div>
    );
};

export default Tasks;