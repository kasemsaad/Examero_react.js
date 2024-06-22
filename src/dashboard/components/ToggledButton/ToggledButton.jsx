import React, { useState } from "react";
import "./ToggleButton.css";
const ToggledButton = () => {
  const [toggled, setToggled] = useState(false);

  const tog = () => {
    setToggled(!toggled);
  };
  return (
    <>
      <button
        style={{ marginLeft: "6px" }}
        className={`toggle-btnn ${toggled ? "toggled" : ""}`}
        onClick={() => tog()}
      >
        <span
          style={{
            marginTop: "-6px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className={toggled ? "white-text" : "whit"}
        >
          {toggled ? "معطل" : "مفعل"}
        </span>
        <div className="thumb"></div>
      </button>
    </>
  );
};

export default ToggledButton;
