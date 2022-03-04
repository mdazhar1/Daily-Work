import React, { useState } from "react";
import { useDispatch } from "react-redux";
const MyCarouselChild = () => {
  const [carouselImg, setCarouselImg] = useState();
  const [carouselTitle, setCarouselTitle] = useState();
  const [carouselDescription, setCarouselDescription] = useState();
  const myDispatch = useDispatch();
  const dispatchHandle=()=>{
  if (!carouselImg && !carouselTitle && ! carouselDescription){
    alert("sharam kar kuch bhi nahi dala of output hona")
  }else if(!carouselImg){
    alert("carousalImage daal ")
    
  }else if(!carouselTitle){
    alert("Title daal")
  }else if(!carouselDescription){
    alert("Description daal")
  }else
  myDispatch({
    type: "ADD_CAROUSEL",
    data: { carouselImg, carouselTitle, carouselDescription },
  })}

  return (
    <div>
      <input
        type="text"
        placeholder="dispatch image url here"
        className="m-2"
        onChange={(e) => setCarouselImg(e.target.value)}
      />
      <input
        type="text"
        placeholder="dispatch title here"
        className="m-2"
        onChange={(e) => setCarouselTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="dispatch desc "
        className="m-2"
        onChange={(e) => setCarouselDescription(e.target.value)}
      />
      <button
        onClick={dispatchHandle}
      >
        Add Carosal
      </button>
    </div>
  );
};

export default MyCarouselChild;
