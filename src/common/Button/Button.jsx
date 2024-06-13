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
  linkTo,
}) => {
  return (
    <Link className="lin-b" to={linkTo}>
      <button
        style={style}
        onClick={onClick}
        className={className}
        type={type}
        name={name}
        value={value}
      >
        <p className="bub">{content}</p>
      </button>
    </Link>
  );
};

export default MyButton;
