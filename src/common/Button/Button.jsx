import React from "react";
import "./Button.css";
const MyButton = ({ className, onClick, content }) => {
  return (
    <button onClick={onClick} className={className}>
      {content}
    </button>
  );
};

export default MyButton;
