import React from "react";
const ToggleForEdit = ({ editClass, handleClick }) => {
  return (
    <button
      type="button"
      style={{ marginLeft: "12px" }}
      className={`toggle-btnn ${editClass.status === 0 ? "toggled" : ""}`}
      onClick={handleClick}
    >
      <span
        style={{
          marginTop: "-6px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={editClass.status === 0 ? "white-text" : "whit"}
      >
        {editClass.status === 1 ? "مفعل" : "معطل"}
      </span>
      <div className="thumb"></div>
    </button>
  );
};

export default ToggleForEdit;
