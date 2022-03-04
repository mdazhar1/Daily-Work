   
import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const days = [
    "monday",
    "Tuesday",
    "Wenasday",
    "Tharsday",
    "Friday",
    "Saterday",
    "sunday",
  ];
  const [list, setlist] = useState(days);
  const [text, setText] = useState("");
  useEffect(() => {
    const filtered = days.filter((elem) =>
      elem.toLowerCase().includes(text.toLowerCase())
    );
    setlist(filtered);
  }, [text]);
  return (
    <div>
      <h1>This is list</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <ul>
        {list.map((days) => (
          <li>{days}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;