import React from "react";
import MyButton from "../../../../common/Button/Button";
import "./FormFLessons.css";
const FormFPLessons = () => {
  const using = () => {
    console.log("READ");
  };
  return (
    <>
      <div className="container">
        <form action="">
          <div className="row form-content-lessons">
            <div className="col-5 col-md-6 col-lg-3 ">
              <label htmlFor="exampleInput" className="form-label mb-3">
                اسم الدرس
              </label>
              <input
                type="text"
                className="form-control select-lesson"
                id="exampleInput"
                aria-describedby="emailHelp"
                placeholder="أدخل اسم الدرس هنا"
              />
            </div>
            <div className="col-5 col-md-6 col-lg-3 ">
              <label htmlFor="select1" className="form-label mb-2">
                اختر الوحده
              </label>
              <select
                className="form-select select-lesson"
                id="select1"
                aria-label="example"
              >
                <option selected>اختر اسم الوحده</option>
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
            <div className="col-5 col-md-6 col-lg-3 ">
              <label htmlFor="select2" className="form-label mb-2">
                اخترالمبحث
              </label>
              <select
                className="form-select select-lesson"
                id="select2"
                aria-label="example"
              >
                <option selected>اختر الصف</option>
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
            <div className="col-5 col-md-6 col-lg-3 ">
              <label htmlFor="select3" className="form-label">
                اختر الصف
              </label>
              <select
                className="form-select select-lesson"
                id="select3"
                aria-label="example"
              >
                <option selected>اختر الصف</option>
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
            <div className="col-12  button-lesson ">
              <MyButton
                onClick={using}
                className=" mt-2 my-button"
                content="إضافة"
                type={"submit"}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormFPLessons;
