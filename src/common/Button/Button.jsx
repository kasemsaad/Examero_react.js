import React from "react";
import "./Button.css";
const MyButton = ({ className, onClick, content, style }) => {
  return (
    <button style={style} onClick={onClick} className={className}>
      <p className="bub">{content}</p>
    </button>
  );
};

export default MyButton;
