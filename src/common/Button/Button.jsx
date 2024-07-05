import React, { useEffect } from "react";
import "./Button.css";
import { Link } from "react-router-dom";
const MyButton = ({
  className,
  onClick,
  content,
  style,
  type,
  name,
  value,
  stylep,
  databstoggle,
  databstarget,
}) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className={className}
      type={type}
      name={name}
      value={value}
      data-bs-toggle={databstoggle}
      data-bs-target={databstarget}
    >
      <p style={stylep} className="bub">
        {content}
      </p>
    </button>
  );
};

export default MyButton;
