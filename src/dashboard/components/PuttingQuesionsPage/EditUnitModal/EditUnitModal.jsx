import React, { useEffect, useState } from "react";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";
import "./EditUnitModal.css";
import { toast } from "react-toastify";
import ToggleForEdit from "../ToggelForEdit/ToggleForEdit";

const EditUnitModal = ({
  activeSubjects,
  fetchAllUnits,
  handelSelectedClass,
  activeClasses,
  RowDataOfUnite,
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
  const [formData, setFormData] = useState({
    group_id: "",
    subject_id: "",
    status: "",
    name: "",
  });
  const [modal, setModal] = useState("");

  const [errors, setErrors] = useState({});
  const element = document.getElementById("edit-Unit-dash");
  useEffect(() => {
    if (RowDataOfUnite) {
      setFormData({
        group_id: RowDataOfUnite.group.id || "",
        subject_id: RowDataOfUnite.subject.id || "",
        status: RowDataOfUnite.status === 0 ? 0 : 1,
        name: RowDataOfUnite.name || "",
      });
    }
  }, [RowDataOfUnite]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "group_id") {
      handelSelectedClass(value);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = () => {
    setFormData((prev) => ({
      ...prev,
      status: prev.status === 0 ? 1 : 0,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!formData.group_id) newErrors.group_id = "يرجى اختيار اسم الصف ";
    if (!formData.name) newErrors.name = "يرجى ادخال اسم الوحدة ";
    if (!formData.subject_id) newErrors.subject_id = "يرجي اختيار اسم المبحث";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      document.body.style.removeProperty("overflow");

      const response = await Api_Dashboard.post(
        `/units/${RowDataOfUnite.id}`,
        formData
      );
      let x = response.data.message;
      SetAlertPointSuccess(x);
      notify("تم تعديل الوحده بنجاح ");
      element.style.display = "none";
      fetchAllUnits();
    } catch (error) {
      let x = error.response.data.message;
      Errornotify(x);
      setErrors(error.response.data.errors);
    }
  };

  return (
    <>
      <div
        style={{ direction: "rtl" }}
        className="modal fade"
        id="edit-Unit-dash"
        tabIndex="-1"
        aria-labelledby="edit-manger-dash"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog my-mod-edit" role="document">
          <div className="modal-content edit-unit-content-dash">
            <div className="edit-unit-header-dash">
              <h5 className="modal-title m-auto" id="exampleModalLabel">
                تعديل بيانات الوحده
              </h5>
              <button
                type="button"
                className="edit-unit-btn-close-dash"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                ❌
              </button>
            </div>
            <div className="edit-unit-lin-dash"></div>
            <div className="modal-body-new p-0 d-flex">
              <form
                className="w-95 form-edit-unit-dash"
                onSubmit={handleSubmit}
              >
                <div className="d-flex col-12 p-0 edit-unit-subject-inputs-container-dash">
                  <div className="form-group col-5 d-flex flex-column edit-unit-input-container-dash">
                    <label
                      htmlFor="recipient2-name"
                      className="col-form-label edit-unit-input-label-dash"
                    >
                      الاسم الوحده
                    </label>
                    <input
                      placeholder="أدخل اسم المدير هنا"
                      type="text"
                      className="form-control text-end"
                      id="edit-first_name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="current-userName"
                    />
                    <span className="error-text">{errors.name}</span>
                  </div>
                  <div className="form-group col-5 d-flex flex-column edit-unit-subject-select-container-dash">
                    <label htmlFor="">اختر المبحث</label>
                    <select
                      onChange={handleChange}
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
                            value={activeSubject.id}
                          >
                            {activeSubject.name}
                          </option>
                        ))}
                    </select>
                    <span className="error-text">{errors.subject_id}</span>
                  </div>
                </div>
                <div className="edit-unit-class-select-container">
                  <div
                    style={{ width: "81%" }}
                    className="form-group col-5 d-flex flex-column"
                  >
                    <label htmlFor="">اختر الصف</label>
                    <select
                      onChange={handleChange}
                      name="group_id"
                      value={formData.group_id}
                      className="form-select form-select-lg select-ques2 mb-3"
                      aria-label=".form-select-lg example"
                      id="select1"
                    >
                      <option value="">اختر اسم الصف</option>
                      {activeClasses &&
                        activeClasses.map((activeClass) => (
                          <option key={activeClass.id} value={activeClass.id}>
                            {activeClass.name}
                          </option>
                        ))}
                    </select>
                    <span className="error-text">{errors.group_id}</span>
                  </div>
                </div>
                <div className="edit-unit-toggle-container-dash">
                  <ToggleForEdit
                    editClass={formData}
                    handleClick={handleClick}
                  />
                </div>
                <div className="modal-footer-new new-footer">
                  <button
                    type="submit"
                    data-bs-dismiss={modal}
                    className="edit-unit-submit-button-dash"
                  >
                    تعديل
                  </button>
                  <button
                    type="button"
                    className="edit-unit-close-button-dash "
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

export default EditUnitModal;
