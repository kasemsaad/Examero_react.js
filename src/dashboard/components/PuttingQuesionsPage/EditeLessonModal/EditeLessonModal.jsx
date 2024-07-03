import { useForm } from "react-hook-form";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";
import React, { useEffect, useState } from "react";

const EditLessonModal = ({
  activeSubjects,
  fetchAllLessons,
  fetchSubjectByIdOfClass,
  activeClasses,
  activeUnits,
  RowDataOfLesson,
  fetchUnitsBySubjectId,
}) => {
  const [formData, setFormData] = useState({
    group_id: "",
    subject_id: "",
    unit_id: "",
    status: "",
    name: "",
  });
  const [modal, setModal] = useState("");

  const [errors, setErrors] = useState({});
  const [edit, setEdit] = useState({
    group_id: "",
    status: "",
    name: "",
  });

  useEffect(() => {
    if (RowDataOfLesson) {
      setEdit({
        unit_id: RowDataOfLesson.unit.id || "",
        name: RowDataOfLesson.name || "",
        status: RowDataOfLesson.status === 0 ? 0 : 1,
      });
      setFormData({
        group_id: RowDataOfLesson.unit.group.id || "",
        unit_id: RowDataOfLesson.unit.id || "",
        subject_id: RowDataOfLesson.unit.subject.id || "",
        status: RowDataOfLesson.status === 0 ? 0 : 1,
        name: RowDataOfLesson.name || "",
      });
    }
  }, [RowDataOfLesson]);

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
      setEdit({
        ...edit,
        [name]: value,
      });
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = () => {
    setEdit((prev) => ({
      ...prev,
      status: prev.status === 0 ? 1 : 0,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!formData.unit_id) newErrors.unit_id = "يرجى ادخال اسم الوحدة ";
    if (!formData.name) newErrors.name = "يرجى ادخال اسم الدرس ";
    if (!formData.subject_id) newErrors.subject_id = "يرجى اختيار اسم المبحث ";
    if (!formData.group_id) newErrors.group_id = "يرجى ادخال اسم الدرس ";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      // Simulate API call
      const response = await Api_Dashboard.post(
        `/lessons/${RowDataOfLesson.id}`,
        edit
      ); // Update with correct API path
      setModal("modal");
      fetchAllLessons();
    } catch (error) {
      setErrors({
        apiError: error.response?.data?.message || "Error submitting form",
      });
    }
  };

  return (
    <>
      <div
        style={{ direction: "rtl" }}
        className="modal fade"
        id="edit-lesson-dash"
        tabIndex="-1"
        aria-labelledby="edit-lesson-dash"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog my-mod-edit" role="document">
          <div
            className="modal-content"
            style={{ backgroundColor: "#1D195D", borderRadius: "13.97px" }}
          >
            <div
              className="modal-header-new"
              style={{
                flexDirection: "row-reverse",
                width: "100%",
                height: "86px",
                color: "#FF8A00",
                fontSize: "20px",
                fontWeight: "700",
                display: "flex",
                textAlign: "center",
              }}
            >
              <h5 className="modal-title m-auto" id="exampleModalLabel">
                تعديل بيانات الوحده
              </h5>
              <button
                type="button"
                className="btn-close-new"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{
                  margin: "9px",
                  borderRadius: "100%",
                  backgroundColor: "white",
                  width: "32px",
                  height: "32px",
                  fontSize: "14px",
                  border: "none",
                }}
              >
                ❌
              </button>
            </div>
            <div
              style={{
                margin: "auto",
                width: "514px",
                backgroundColor: "#A6A0F4",
                height: "1px",
              }}
            ></div>
            <div
              className="modal-body-new p-0 d-flex"
              style={{ height: "305px" }}
            >
              <form
                style={{ width: "95%", margin: "auto" }}
                className="w-95"
                onSubmit={handleSubmit}
              >
                <div
                  className="d-flex col-12 p-0"
                  style={{
                    width: "91%",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "space-evenly",
                    height: "85px",
                  }}
                >
                  {/*////////////// first name ////////////////// */}
                  <div
                    className="form-group col-5 d-flex flex-column"
                    style={{
                      direction: "rtl",
                      justifyContent: "center",
                      height: "70px",
                    }}
                  >
                    <label
                      htmlFor="recipient2-name"
                      className="col-form-label"
                      style={{
                        flexDirection: "column-reverse",
                        color: "white",
                        justifyContent: "end",
                        display: "flex",
                      }}
                    >
                      الاسم الاول
                    </label>
                    <input
                      placeholder="أدخل اسم المدير هنا"
                      type="text"
                      className="form-control text-end"
                      id="edit-first_name"
                      name="name"
                      value={formData.name}
                      onChange={handelChange}
                      autoComplete="current-userName"
                      style={{ direction: "rtl", height: "35px" }}
                    />
                    <span style={{ color: "red" }}>{errors.name}</span>
                  </div>

                  <div
                    className="col-5"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "center",
                    }}
                  >
                    <label htmlFor="">اختر الوحده</label>

                    <select
                      onChange={handelChange}
                      name="unit_id"
                      value={formData.unit_id}
                      className="form-select form-select-lg select-ques2 mb-3"
                      aria-label=".form-select-lg example"
                      id="select1"
                    >
                      <option value="">اختر اسم الوحده</option>
                      {activeUnits &&
                        activeUnits.map((activeUnits) => (
                          <option
                            key={activeUnits.id}
                            style={{
                              background: "#4941A6",
                              color: "white",
                            }}
                            value={activeUnits.id}
                          >
                            {activeUnits.name}
                          </option>
                        ))}
                    </select>
                    <span style={{ color: "red" }}>{errors.unit_id}</span>
                  </div>
                  {/* ///////////////last name input ///////////////////////////// */}
                </div>
                <div
                  className="d-flex col-12 p-0"
                  style={{
                    width: "91%",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div className="form-group col-5 d-flex flex-column"></div>
                </div>
                <div
                  style={{
                    width: "91%",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div
                    className="form-group col-5 d-flex flex-column "
                    style={{ display: "flex" }}
                  >
                    <label htmlFor="">اختر الصف</label>
                    <select
                      onChange={handelChange}
                      name="group_id"
                      value={formData.group_id}
                      className="form-select form-select-lg select-ques2 mb-3"
                      aria-label=".form-select-lg example"
                      id="select1"
                    >
                      <option value="">اختر اسم الصف</option>
                      {activeClasses &&
                        activeClasses.map((activeClass) => (
                          <option
                            key={activeClass.id}
                            style={{
                              background: "#4941A6",
                              color: "white",
                            }}
                            value={activeClass.id}
                          >
                            {activeClass.name}
                          </option>
                        ))}
                    </select>
                    <span style={{ color: "red" }}>{errors.group_id}</span>
                  </div>
                  {/*  */}
                  <div
                    className="form-group col-5 d-flex flex-column"
                    style={{ direction: "rtl", justifyContent: "center" }}
                  >
                    <label htmlFor="">اختر المبحث</label>
                    <select
                      onChange={handelChange}
                      name="subject_id"
                      value={formData.subject_id}
                      className="form-select form-select-lg select-ques1 mb-3"
                      aria-label=".form-select-lg example"
                    >
                      <option value="" disabled>
                        اختر المبحث
                      </option>
                      {activeSubjects &&
                        activeSubjects.map((activeSubject) => (
                          <option
                            key={activeSubject.id}
                            style={{ background: "#4941A6", color: "white" }}
                            value={activeSubject.id}
                          >
                            {activeSubject.name}
                          </option>
                        ))}
                    </select>
                    <span style={{ color: "red" }}>{errors.subject_id}</span>
                  </div>
                </div>
                <div
                  style={{
                    height: "40px",
                    width: " 81%",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <button
                    type="button"
                    style={{ marginLeft: "6px" }}
                    className={`toggle-btnn ${
                      edit.status === 0 ? "toggled" : ""
                    }`}
                    onClick={handleClick}
                  >
                    <span
                      style={{
                        marginTop: "-6px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      className={edit.status === 0 ? "white-text" : "whit"}
                    >
                      {edit.status === 1 ? "مفعل" : "معطل"}
                    </span>
                    <div className="thumb"></div>
                  </button>
                </div>
                <div className="modal-footer-new new-footer">
                  <button
                    type="submit"
                    data-bs-dismiss={modal}
                    className="btn btn-primary"
                    style={{
                      borderRadius: "30px",
                      border: "none",
                      backgroundColor: "#C01F59",
                      width: "96px",
                      height: "40px",
                      marginLeft: "12px",
                    }}
                  >
                    تعديل
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    style={{
                      borderRadius: "30px",
                      color: "#FE4F60",
                      border: "#FE4F60 solid 2px",
                      backgroundColor: "#1D195D",
                      width: "96px",
                      height: "40px",
                    }}
                  >
                    إلغاء
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditLessonModal;
