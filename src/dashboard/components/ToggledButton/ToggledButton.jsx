import React, { useState } from "react";
import "./ToggleButton.css";
const ToggledButton = ({ togel, flag }) => {
  const [toggled, setToggled] = useState(togel);

  const tog = () => {
    setToggled(!toggled);
  };
  return (
    <>
      {flag ? (
        <button
          style={{ marginLeft: "6px" }}
          className={`toggle-btnn ${togel === "Unactive" ? "toggled" : ""}`}
        >
          <span
            style={{
              marginTop: "-6px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className={togel === "Unactive" ? "white-text" : "whit"}
          >
            {togel === "Unactive" ? "معطل" : "مفعل"}
          </span>
          <div className="thumb"></div>
        </button>
      ) : (
        <button
          style={{ marginLeft: "6px" }}
          className={`toggle-btnn ${togel === 0 ? "toggled" : ""}`}
        >
          <span
            style={{
              marginTop: "-6px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className={togel === 0 ? "white-text" : "whit"}
          >
            {togel === 0 ? "معطل" : "مفعل"}
          </span>
          <div className="thumb"></div>
        </button>
      )}
    </>
  );
};

export default ToggledButton;
