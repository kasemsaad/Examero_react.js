import React, { useState } from "react";
import "./ForUnites.css";
import MyButton from "../../../../common/Button/Button";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";
const FormForPQUnits = ({
  fetchAllUnits,
  activeClasses,
  handelSelectedClass,
  activeSubjects,
}) => {
  // const [classData, setClassData] = useState("");
  // const handelValue = (e) => {
  //   console.log(e.target.value.select1);

  //   setClassData(e.target.value);
  // };
  // console.log(activeSubjects);
  // const handelSelectChangeForclass = (e) => {
  //   console.log(e.target.value);
  // };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(activeClasses);
    const handlePostUnit = async (data) => {
      if (data) {
        await Api_Dashboard.post("/units", data)
          .then((response) => {
            console.log(data);
            console.log(response);

            fetchAllUnits();
          })
          .catch((err) => {
            console.log(err.response.data.errors);
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

    if (name === "group_id") {
      handelSelectedClass(value);
    }

    // handelSelcetedClass(event.target.groupId);

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log();
  return (
    <>
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
                  </div>
                  <div className="col-12 col-sm-6 col-md-3  div-ques1">
                    <label htmlFor="">اختر المبحث</label>
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
                  </div>
                  <div className="col-12 col-sm-6 col-md-3  div-ques2">
                    <label htmlFor="">اختر الصف</label>
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
