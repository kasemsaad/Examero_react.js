import React from "react";
import "./Button.css";
const MyButton = ({ className, onClick, content, style,to }) => {
  return (
    <button style={style} onClick={onClick} to={to} className={className}>
      {content}
    </button>
  );
};

export default MyButton;
