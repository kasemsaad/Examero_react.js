import React, { useEffect, useState } from "react";
import MyButton from "../../../../common/Button/Button";
const SearchAndAddUsers = ({ newData, FilteredUsers, buttonContent }) => {
  const [dataOfSearch, setDataOfSearch] = useState("");

  useEffect(() => {
    if (dataOfSearch === "") {
      FilteredUsers(newData);
    } else {
      const filteredItems = newData.filter((item) =>
        item.fullName.toLowerCase().startsWith(dataOfSearch.toLowerCase())
      );
      FilteredUsers(filteredItems);
    }
  }, [dataOfSearch]);
  // function for handel the Change value

  const handelChangeForSearch = (e) => {
    const searchData = e.target.value;
    setDataOfSearch(searchData);
  };
  // handel("sfd");
  return (
    <>
      {/* Start Search input and button for add manger */}
      <div
        className="add-manger "
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        {/* Start input for search */}
        <div
          style={{ position: "relative" }}
          data-mdb-input-init
          className="form-outline"
        >
          <input
            value={dataOfSearch}
            onChange={handelChangeForSearch}
            className="form-control ps-5"
            type="text"
            style={{
              backgroundColor: "#0E0A43",
              color: "white",
              width: "195px",
              height: "36px",
              borderRadius: "9.47px",
              border: "#4941A6 solid 1px",
              paddingRight: "37px",
            }}
            placeholder="جدول البحث هنا"
          />
          <div
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
              width: "36px",
              height: "36px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "9.47px",
              backgroundColor: "#4941A6",
              color: "white",
            }}
          >
            <i className="fa-solid fa-magnifying-glass "></i>
          </div>
        </div>
        {/* End input for search */}

        {/* Start button for add manger */}
        <div style={{ position: "relative" }} className="add-butt">
          <MyButton
            databstoggle="modal"
            databstarget="#manger-dash"
            style={{
              backgroundColor: " #C01F59",
              width: "115px",
              border: "none",
              height: "36px",
              color: "white",
              borderRadius: "30px",
              padding: "3px, 15px, 3px, 0px",
            }}
            className={"but-manger"}
            content={buttonContent}
          />
          <div
            style={{
              borderRadius: "100%",
              backgroundColor: "white",
              color: "red",
              width: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              height: "15px",
              position: "absolute",
              top: "11px",
              right: "17px",
            }}
          >
            +
          </div>
        </div>
        {/* End button for add manger */}
      </div>
      {/* End fro button and input search */}
    </>
  );
};

export default SearchAndAddUsers;
