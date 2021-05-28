import React, {useState} from 'react';

const ErrorExample = () => {
  const [title, setTitle] = useState("title");
  const handleClick = () => {
    if(title === "title"){
      setTitle("new title");
    } else {
      setTitle("title");
    }
  }

  return <div>
    <h2>{title}</h2>
    <button className="btn" onClick={handleClick}>Change Title</button>
  </div>;
};

export default ErrorExample;
