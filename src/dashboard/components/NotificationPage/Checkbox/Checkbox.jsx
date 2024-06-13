// src/components/Checkbox/Checkbox.jsx
import React from "react";

const Checkbox = ({
  id,
  name,
  handleClick,
  isChecked,
  className,
  value,
  Checkbox,
}) => {
  return (
    <input
      id={id}
      value={value}
      className={className}
      name={name}
      type={Checkbox}
      onChange={handleClick}
      checked={isChecked}
    />
  );
};

export default Checkbox;
