import React, { useState } from "react";
import { useDispatch } from "react-redux";
const OurMentorsChild = () => {
  const [mentorName, setMentorName] = useState();
  const [mentorImage, setMentorImage] = useState();
  const [mentorDesc, setMentorDesc] = useState();
  const mentorsDispatch = useDispatch();
  const handleDispatch = () => {
    const mentors = {
      name: mentorName,
      img: mentorImage,
      desc: mentorDesc,
    };
    if(!mentorName && !mentorImage && !mentorDesc){
      alert("sharam kar kuch bhi nahi dala of output hona ")
    }else if(!mentorName){
      alert("title daal")
    }else if(!mentorImage){
      alert("image daal")
    }else if(!mentorDesc){
      alert("description daal")
    }else
    mentorsDispatch({
      type: "ADD_MENTORS",
      mentors,
    });

    document.getElementById("name").value = "";
    document.getElementById("image").value = "";
    document.getElementById("desc").value = "";
  };
  return (
    <div>
      <input
        id="name"
        type="text"
        placeholder="Mentor's Name"
        className="m-2"
        onChange={(e) => setMentorName(e.target.value)}
      />
      <input
        id="image"
        type="text"
        placeholder="Mentor's Image"
        className="m-2"
        onChange={(e) => setMentorImage(e.target.value)}
      />
      <input
        id="desc"
        type="text"
        placeholder="Mentor's Description"
        className="m-2"
        onChange={(e) => setMentorDesc(e.target.value)}
      />
      <button onClick={handleDispatch}>Add Mentors</button>
    </div>
  );
};

export default OurMentorsChild;
