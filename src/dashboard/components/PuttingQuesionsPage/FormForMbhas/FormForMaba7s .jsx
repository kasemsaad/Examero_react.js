import React, { useState } from "react";
import MyButton from "../../../../common/Button/Button";
import "./FormForMaba7s ";

const FormForMaba7s = () => {
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
      <form className="form-container-puttt " onSubmit={handelSubmit}>
        <div className="form-group-puttt col-8 mx-3 d-flex flex-column justify-content-end">
          <label className="mb-2" htmlFor="exampleInputEmail1">
            اسم المبحث
          </label>
          <input
            style={{ fontSize: "1.3" }}
            onChange={handelValue}
            type="text"
            className="form-control-puttt col-8"
            id="exampleInput"
            aria-describedby="emailHelp"
            placeholder=" أدخل أسم المبحث الجديد هنا"
          />
        </div>
        <div>
          <label className="mb-2" htmlFor="exampleInputEmail1">
            اختر صف الصفوف التى يدرسب يها
          </label>
          <input
            style={{ fontSize: "1.3" }}
            onChange={handelValue}
            type="text"
            className="form-control-puttt col-8"
            id="exampleInput"
            aria-describedby="emailHelp"
            placeholder=" اختر اسم الصف"
          />
        </div>
        <div className="button-container-puttt">
          <MyButton className="my-buttonn" content="إضافة" type={"submit"} />
        </div>
      </form>
    </>
  );
};

export default FormForMaba7s;
