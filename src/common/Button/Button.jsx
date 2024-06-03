import React from "react";
import "./Button.css";
const MyButton = ({ className, onClick, content, style }) => {
  return (
    <button style={style} onClick={onClick} className={className}>
      {content}
    </button>
  );
};

export default MyButton;
