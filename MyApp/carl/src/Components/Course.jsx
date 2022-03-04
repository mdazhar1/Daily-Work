import React from 'react';
import { useSelector } from 'react-redux';
import "./Product.css";
const Course = () => {
    const course=useSelector((state)=>state.courseReducer.courses);
    return (
        <div >
           {course.map((e)=>{
               return(
                  <div className='pdiv'>
                    <h1>{e.Name}</h1>
                    <img src={e.image} alt="" />
                    <p>{e.description}</p>
                  </div>
               )
           })} 
        </div>
    );
};

export default Course;