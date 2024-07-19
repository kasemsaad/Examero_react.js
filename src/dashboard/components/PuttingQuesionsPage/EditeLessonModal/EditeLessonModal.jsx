import { toast, ToastContainer } from "react-toastify";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";
import React, { useEffect, useState } from "react";
import ToggleForEdit from "../ToggelForEdit/ToggleForEdit";
import "./editeLesson.css";

const EditLessonModal = ({
  activeSubjects,
  fetchAllLessons,
  fetchSubjectByIdOfClass,
  activeClasses,
  activeUnits,
  RowDataOfLesson,
  fetchUnitsBySubjectId,
}) => {
  // toast fuctions for alert
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
  const [modal, setModal] = useState("");
  const [errors, setErrors] = useState({});
  const element = document.getElementById("edit-lesson-dash");
  const [formData, setFormData] = useState({
    group_id: "",
    subject_id: "",
    unit_id: "",
    status: "",
    name: "",
  });

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
      document.body.style.removeProperty("overflow");
      const response = await Api_Dashboard.post(
        `/lessons/${RowDataOfLesson.id}`,
        edit
      );
      let x = response.data.message;
      SetAlertPointSuccess(x);
      notify("تم تعديل الدرس بنجاح ");
      element.style.display = "none";
      fetchAllLessons();
    } catch (error) {
      setErrors({
        apiError: error.response?.data?.message || "Error submitting form",
      });
      let x = error.response.data.message;
      SetAlertPoint(x);
      Errornotify(x);
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
          <div className="modal-content content-edit-unit-dash">
            <div className="modal-header-new">
              <h5 className="modal-title m-auto" id="exampleModalLabel">
                تعديل بيانات الدرس
              </h5>
              <button
                type="button"
                className="btn-close-lesson-dash"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                ❌
              </button>
            </div>
            <div className="lin-edit-lesson-dash"></div>
            <div className="modal-body-lesson-dash">
              <form
                style={{ width: "95%", margin: "auto" }}
                className="w-95 form-edit-lesson-dash"
                onSubmit={handleSubmit}
              >
                <div className="col-12 p-0 lesson-unit-inputs-dash">
                  <div className="form-group col-5 d-flex flex-column lesson-input-container-dash">
                    <label
                      htmlFor="recipient2-name"
                      className="col-form-label lesson-input-label-dash"
                    >
                      اسم الدرس
                    </label>
                    <input
                      placeholder="أدخل اسم الدرس هنا"
                      type="text"
                      className="form-control text-end lesson-input-dash"
                      id="edit-first_name"
                      name="name"
                      value={formData.name}
                      onChange={handelChange}
                      autoComplete="current-userName"
                    />
                    <span style={{ color: "red" }}>{errors.name}</span>
                  </div>

                  <div className="col-5 unit-edit-input-container-dash">
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
                            style={{ background: "#4941A6", color: "white" }}
                            value={activeUnits.id}
                          >
                            {activeUnits.name}
                          </option>
                        ))}
                    </select>
                    <span style={{ color: "red" }}>{errors.unit_id}</span>
                  </div>
                </div>

                <div className="class-subject-inputs-container-dash">
                  <div className="form-group col-5 d-flex flex-column edit-lesson-class-input-container">
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
                            style={{ background: "#4941A6", color: "white" }}
                            value={activeClass.id}
                          >
                            {activeClass.name}
                          </option>
                        ))}
                    </select>
                    <span style={{ color: "red" }}>{errors.group_id}</span>
                  </div>

                  <div className="form-group col-5 d-flex flex-column edit-lesson-subject-select-container-">
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
                            className="option-edit-lesson"
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
                <div className="edit-lesson-toggle-container-dash">
                  <ToggleForEdit editClass={edit} handleClick={handleClick} />
                </div>
                <div className="modal-footer-new new-footer">
                  <button
                    type="submit"
                    data-bs-dismiss={modal}
                    className=" edit-lesson-submit-dash text-light"
                  >
                    تعديل
                  </button>
                  <button
                    type="button"
                    className="edit-lesson-cancel-dash"
                    data-bs-dismiss="modal"
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
