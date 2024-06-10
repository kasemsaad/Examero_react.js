import React, { useState } from "react";
import "./ForUnites.css";
import MyButton from "../../../../common/Button/Button";
const FormForPQUnits = () => {
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
      <div className="formUnits container">
        <form className="form-container-unite row" onSubmit={handelSubmit}>
          <div className="form-group-unite  mr-3  justify-content-end">
            <div className="col-12">
              <div
                style={{ height: "75px" }}
                className="col-12  raw-ques d-flex "
              >
                <div className="col-10 inner-raw ">
                  <div className="col-12 col-sm-6 col-md-3 col-sm-2 input-ques">
                    <label className="" htmlFor="exampleInputEmail1">
                      اسم الصف
                    </label>
                    <input
                      style={{}}
                      onChange={handelValue}
                      type="text"
                      className="form-control  "
                      id="exampleInput"
                      aria-describedby="emailHelp"
                      placeholder=" أدخل الوحده هنا"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-3  div-ques1">
                    <label htmlFor="">اختر المبحث</label>
                    <select
                      class="form-select form-select-lg select-ques1 mb-3"
                      aria-label=".form-select-lg example"
                    >
                      <option selected>اختر المبحث</option>
                      <option
                        style={{ background: "#4941A6", color: "white" }}
                        value="1"
                      >
                        One
                      </option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-6 col-md-3  div-ques2">
                    <label htmlFor="">اختر الصف</label>
                    <select
                      class="form-select form-select-lg select-ques2 mb-3"
                      aria-label=".form-select-lg example"
                    >
                      <option selected>اختر اسم الصف </option>
                      <option
                        style={{ background: "#4941A6", color: "white" }}
                        value="1"
                      >
                        One
                      </option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="button-container-quese col-md-2 mb-3 h-100">
                  <MyButton
                    className="my-button-ques "
                    content="إضافة"
                    type={"submit"}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormForPQUnits;
