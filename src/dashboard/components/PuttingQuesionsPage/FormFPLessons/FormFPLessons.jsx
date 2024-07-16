import React, { useState } from "react";
import MyButton from "../../../../common/Button/Button";
import "./FormFLessons.css";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";
import { toast, ToastContainer } from "react-toastify";
const FormFPLessons = ({
  activeClasses,
  fetchSubjectByIdOfClass,
  fetchUnitsBySubjectId,
  activeSubjects,
  activeUnits,
  fechAlllessons,
}) => {
  const notify = (AlertPointSuccess) => {
    toast.success(AlertPointSuccess, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const Errornotify = (AlertPoint) => {
    toast.error(AlertPoint, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const [AlertPoint, SetAlertPoint] = useState("");
  const [AlertPointSuccess, SetAlertPointSuccess] = useState("");
  const [errors, setErrors] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    unit_id: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setErrors("");
    if (name === "group_id") {
      fetchSubjectByIdOfClass(value);
    }
    if (name === "subject_id") {
      fetchUnitsBySubjectId(value);
    }
    if (name === "unit_id" || name === "name") {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleAddLesson = async (data) => {
    if (data) {
      await Api_Dashboard.post("/lessons", data)
        .then((response) => {
          fechAlllessons();

          let x = response.data.message;
          SetAlertPointSuccess(x);
          notify("تم اضافة الدرس بنجاح ");
        })
        .catch((err) => {
          let x = err.response.data.message;
          SetAlertPoint(x);
          Errornotify(x);
          setErrors(err.response.data.errors);
        });
    }
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("dfdsf");
    const newErrors = {};

    if (!formData.unit_id) newErrors.unit_id = "يرجى ادخال اسم الوحدة ";
    if (!formData.name) newErrors.name = "يرجى ادخال اسم الدرس ";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    handleAddLesson(formData);
  };

  return (
    <>
      <div className="container">
        <form action="" onSubmit={handelSubmit}>
          <div className="row form-content-lessons">
            <div className="col-5 col-md-6 col-lg-3 ">
              <label htmlFor="exampleInput" className="form-label ">
                اسم الدرس
              </label>
              <input
                onChange={handelChange}
                type="text"
                name="name"
                className="form-control select-lesson"
                id="exampleInput"
                aria-describedby="emailHelp"
                placeholder="أدخل اسم الدرس هنا"
              />

              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.name}
              </span>
            </div>
            <div className="col-5 col-md-6 col-lg-3 ">
              <label htmlFor="select1" className="form-label mb-2">
                اختر الوحده
              </label>
              <select
                onChange={handelChange}
                name="unit_id"
                defaultValue="1"
                className="form-select select-lesson"
                id="select1"
                aria-label="example"
              >
                <option value="1">اختر اسم الوحده</option>
                {activeUnits &&
                  activeUnits.map((activeUnit) => {
                    return (
                      <option
                        key={activeUnit.id}
                        style={{ background: "#4941A6", color: "white" }}
                        value={activeUnit.id}
                      >
                        {activeUnit.name}
                      </option>
                    );
                  })}
              </select>
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.unit_id}
              </span>
            </div>
            <div className="col-5 col-md-6 col-lg-3 ">
              <label htmlFor="select2" className="form-label mb-2">
                اخترالمبحث
              </label>

              <select
                defaultValue="1"
                name="subject_id"
                className="form-select select-lesson rmsc multi-select-lib-les"
                aria-label="example"
                onChange={handelChange}
              >
                <option value="1">اختر المبحث</option>
                {activeSubjects &&
                  activeSubjects.map((activeSubject) => {
                    return (
                      <option
                        key={activeSubject.id}
                        style={{ background: "#4941A6", color: "white" }}
                        value={activeSubject.id}
                      >
                        {activeSubject.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="col-5 col-md-6 col-lg-3 ">
              <label htmlFor="select3" className="form-label">
                اختر الصف
              </label>
              <select
                defaultValue="1"
                name="group_id"
                className="form-select select-lesson"
                onChange={handelChange}
                aria-label="example"
              >
                <option value="1">اختر الصف</option>
                {activeClasses &&
                  activeClasses.map((activeClass) => {
                    return (
                      <option
                        key={activeClass.id}
                        style={{ background: "#4941A6", color: "white" }}
                        value={activeClass.id}
                      >
                        {activeClass.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="col-12  button-lesson ">
              <MyButton
                // onClick={}
                className=" mt-2 my-button"
                content="إضافة"
                type={"submit"}
              />
            </div>
          </div>
          <ToastContainer position="top-center" />
        </form>
      </div>
    </>
  );
};

export default FormFPLessons;
