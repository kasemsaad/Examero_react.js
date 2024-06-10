import React, { useState } from "react";
import MyButton from "../../../../common/Button/Button";
import "./FormForAll.css";
const FormForAll = () => {
  const [classData, setClassData] = useState("");

  const handelValue = (e) => {
    console.log(e.target.value);
    setClassData(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(classData);
  };
  return (
    <>
      <form className="form-container-putt " onSubmit={handelSubmit}>
        <div className="form-group-putt col-8 mx-3 d-flex flex-column justify-content-end">
          <label className="mb-2" htmlFor="exampleInputEmail1">
            اسم الصف
          </label>
          <input
            style={{ fontSize: "1.3" }}
            onChange={handelValue}
            type="text"
            className="form-control col-8"
            id="exampleInput"
            aria-describedby="emailHelp"
            placeholder=" أدخل أسم الصف الجديد هنا"
          />
        </div>
        <div className="button-container-putt">
          <MyButton className="my-button" content="إضافة" type={"submit"} />
        </div>
      </form>
    </>
  );
};

export default FormForAll;
