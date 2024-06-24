import React, { useEffect } from "react";
import "./Button.css";
const MyButton = ({
  className,
  onClick,
  content,
  style,
  type,
  name,
  value,
}) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className={className}
      type={type}
      name={name}
      value={value}
    >
      <p style={stylep} className="bub">
        {content}
      </p>
    </button>
  );
};

export default MyButton;
