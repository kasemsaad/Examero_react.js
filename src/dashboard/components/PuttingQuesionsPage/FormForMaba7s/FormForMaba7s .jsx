import React, { useState } from "react";
import MyButton from "../../../../common/Button/Button";
import "./FormFPMaba7s.css";

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
      <div className=" MyFormm  col-8">
        <form
          className="form-container-put  d-flex w-100 "
          onSubmit={handelSubmit}
        >
          <div className="form-group-puttt  d-flex flex-column justify-content-end">
            <label className="mb-2  lab1" htmlFor="exampleInputEmail1">
              اسم المبحث
            </label>
            <input
              style={{ fontSize: "1.3" }}
              onChange={handelValue}
              type="text"
              className="form-control inp1  "
              id="exampleInput"
              aria-describedby="nameHelp"
              placeholder=" أدخل أسم المبحث الجديد هنا"
            />
          </div>
          <div className="form-group-putt">
            <label className=" mb-2 lab2" htmlFor="exampleInputEmail1">
              اختر الصفوف التى يدرس بها
            </label>
            <input
              style={{ fontSize: "1.3" }}
              onChange={handelValue}
              type="text"
              className="form-control inp2 col-6"
              id="exampleInput"
              aria-describedby="emailHelp"
              placeholder=" اختر اسم الصف"
            />
          </div>
          <div className="button-container-puttt">
            <MyButton className="my-buttonn" content="إضافة" type={"submit"} />
          </div>
        </form>
      </div>
    </>
  );
};

export default FormForMaba7s;
