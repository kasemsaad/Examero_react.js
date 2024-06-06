// src/components/Checkbox/Checkbox.jsx
import React from "react";

const Checkbox = ({
  id,
  name,
  handleClick,
  isChecked,
  className,
  Checkbox,
}) => {
  return (
    <input
      id={id}
      className={className}
      name={name}
      type={Checkbox}
      onChange={handleClick}
      checked={isChecked}
    />
  );
};

export default Checkbox;
