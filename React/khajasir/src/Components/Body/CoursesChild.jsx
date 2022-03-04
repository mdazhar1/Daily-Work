import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
const CoursesChild = () => {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const dispatch = useDispatch();
  const handleDispatch = () => {
    
    const data = {
      title: title,
      desc: description,
      img: image,
    };
    if(!title && !image && !description){
      alert("sharam kar kuch bhi nahi dala of output hona ")
    }else if(!title){
      alert("title daal")
      
    }else if(!image){
      alert("image daal")
    }else if(!description){
      alert("description daal")
    }else
    dispatch({
      type: "ADD_COURSES",
      data,
    });
  };
  return (
    <div>
      <input
        type="text"
        id="html"
        className="m-2"
        placeholder="Add Course Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        id="css"
        className="m-2"
        placeholder="Add Course Image"
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        id="react"
        className="m-2"
        placeholder="Add Course Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="m-2" onClick={handleDispatch}>
        Add Course
      </button>
    </div>
  );
};

export default CoursesChild;
