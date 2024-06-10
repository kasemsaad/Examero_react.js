import React from "react";
import "./Button.css";
const MyButton = ({
  className,
  onClick,
  content,
  style,
  type,
  name,
  value,
  to,
}) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className={className}
      type={type}
      name={name}
      value={value}
      to={to}
    >
      <p className="bub">{content}</p>
    </button>
  );
};

export default MyButton;
