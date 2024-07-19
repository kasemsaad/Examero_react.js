import React, { useState } from "react";
import "./ForUnites.css";
import MyButton from "../../../../common/Button/Button";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";
import { toast, ToastContainer } from "react-toastify";
const FormForPQUnits = ({
  fetchAllUnits,
  activeClasses,
  handelSelectedClass,
  activeSubjects,
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
  const man = "Rady";
  const handelSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.group_id) {
      newErrors.group_id = "يرجى اختيار اسم الصف ";
    }
    if (!formData.name) newErrors.name = "يرجى ادخال اسم الوحدة ";
    if (!formData.subject_id) newErrors.subject_id = "يرجي اختيار اسم المبحث";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const handlePostUnit = async (data) => {
      if (data) {
        await Api_Dashboard.post("/units", data)
          .then((response) => {
            let x = response.data.message;
            SetAlertPointSuccess(x);
            notify("تم اضافة الوحده بنجاح ");

            fetchAllUnits();
          })
          .catch((err) => {
            let x = err.response.data.message;
            SetAlertPoint(x);
            Errornotify(x);
            setErrors(err.response.data.errors);
          });
      }
    };
    handlePostUnit(formData);
  };
  const [formData, setFormData] = useState({
    group_id: "",
    subject_id: "",
    name: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setErrors({});
    if (name === "group_id") {
      handelSelectedClass(value);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log();
  return (
    <>
              <ToastContainer position="top-center" />

      <div className="formUnits container">
        <form className="form-container-unite row-fel" onSubmit={handelSubmit}>
          <div className="form-group-unite  mr-3  justify-content-end">
            <div className="col-12 wrape-inpu">
              <div
                style={{ height: "75px" }}
                className="col-12  raw-ques d-flex "
              >
                <div className="col-10 inner-raw  ">
                  <div className="col-12 col-sm-6 col-md-3 col-sm-2 input-ques">
                    <label className="" htmlFor="exampleInputEmail1">
                      اسم الوحده
                    </label>
                    <input
                      name="name"
                      style={{}}
                      onChange={handleChange}
                      type="text"
                      className="form-control  iput1"
                      id="exampleInput"
                      aria-describedby="emailHelp"
                      placeholder=" أدخل الوحده هنا"
                    />
                    <span style={{ fontSize: "12px", color: "red" }}>
                      {errors.name}
                    </span>
                  </div>
                  <div className="col-12 col-sm-6 col-md-3  div-ques1">
                    <label htmlFor="">اختر اسم المبحث</label>
                    <select
                      onChange={handleChange}
                      name="subject_id"
                      defaultValue="1"
                      className="form-select form-select-lg select-ques1 mb-3"
                      aria-label=".form-select-lg example"
                    >
                      <option value="1" disabled>
                        اختر المبحث
                      </option>

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
                    <span style={{ fontSize: "12px", color: "red" }}>
                      {errors.subject_id}
                    </span>
                  </div>
                  <div className="col-12 col-sm-6 col-md-3  div-ques2">
                    <label htmlFor="">اختراسم الصف</label>
                    <select
                      onChange={handleChange}
                      defaultValue="1"
                      name="group_id"
                      className="form-select form-select-lg select-ques2 mb-3"
                      aria-label=".form-select-lg example"
                      id="select1"
                    >
                      <option value="1">اختر اسم الصف </option>
                      {activeClasses &&
                        activeClasses.map((activeClass, index) => {
                          return (
                            <option
                              style={{
                                background: "#4941A6",
                                color: "white",
                              }}
                              key={index}
                              value={activeClass.id}
                            >
                              {activeClass.name}
                            </option>
                          );
                        })}
                    </select>
                    <span style={{ fontSize: "12px", color: "red" }}>
                      {errors.group_id}
                    </span>
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
