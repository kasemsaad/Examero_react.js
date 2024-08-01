import React, { useState, useEffect, useMemo } from "react";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";
import { MultiSelect } from "react-multi-select-component";
import "./EditSubjectModal.css";
import { toast, ToastContainer } from "react-toastify";
import ToggleForEdit from "../ToggelForEdit/ToggleForEdit";

const EditSubjectModal = ({
  rowDataOfSubjects,
  fetchAllData,
  activeClasses,
}) => {
  // Toast notification functions
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
  const [selectedFlavors, setSelectedFlavors] = useState([]);
  const [errors, setErrors] = useState(true);
  const element = document.getElementById("editSubjectModal");
  const [editClass, setEditClass] = useState({
    name: "",
    status: "",
    group_id: "",
    subject_id: "",
  });
  const [modal, setModal] = useState("");

  // Initialize the state with the values from rowDataOfSubjects
  useEffect(() => {
    if (rowDataOfSubjects) {
      setEditClass({
        name: rowDataOfSubjects.name || "",
        status: rowDataOfSubjects.status === 0 ? 0 : 1,
        groupIds: rowDataOfSubjects.groupIds || [],
      });
      setSelectedFlavors();
    }
  }, [rowDataOfSubjects, activeClasses]);

  const getEditingInputs = (e) => {
    const { name, value } = e.target;
    setErrors({});
    setEditClass((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const newData0 = useMemo(() => {
    if (rowDataOfSubjects && rowDataOfSubjects.groups) {
      return rowDataOfSubjects.groups.map((option) => ({
        value: option.id,
        label: option.name,
      }));
    }
    return [];
  }, [rowDataOfSubjects]);

  const newData = useMemo(() => {
    if (activeClasses) {
      return activeClasses.map((option) => ({
        value: option.id,
        label: option.name,
      }));
    }
    return [];
  }, [activeClasses]);

  // Initialize selectedFlavors with newData0 when the component mounts
  useEffect(() => {
    setEditClass((prevData) => ({
      ...prevData,
      groupIds: newData0.map((option) => option.value),
    }));
    setSelectedFlavors(newData0);
  }, [newData0]);

  const handelEdit = async (editClass) => {
    if (rowDataOfSubjects) {
      document.body.style.removeProperty("overflow");

      await Api_Dashboard.post(`/subjects/${rowDataOfSubjects.id}`, editClass)
        .then((response) => {
          let x = response.data.message;
          SetAlertPointSuccess(x);
          notify("تم تعديل المبحث بنجاح ");
          element.style.display = "none";
          fetchAllData();
        })
        .catch((err) => {
          setErrors(err.response.data.errors);
          let x = err.response.data.message;
          SetAlertPoint(x);
          Errornotify(x);
        });
    }
  };

  const handleMultiSelectChange = (selectedOptions) => {
    setSelectedFlavors(selectedOptions);
    setErrors({});
    setEditClass((prevData) => ({
      ...prevData,
      groupIds: selectedOptions.map((option) => option.value),
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (editClass.groupIds.length === 0) {
      newErrors.groupId = "يرجى اختيار الصف ";
    }
    if (!editClass.name) newErrors.name = "يرجى ادخال اسم الوحدة ";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    handelEdit(editClass);
  };

  const handleClick = () => {
    setEditClass((prev) => ({
      ...prev,
      status: prev.status === 0 ? 1 : 0,
    }));
  };

  return (
    <>
      <div
        className="modal fade"
        id="editSubjectModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content edit-subject-content-dash">
            <div className="modal-header">
              <h5 className="modal-title-dash" id="exampleModalLabel">
                تعديل المبحث
              </h5>
            </div>

            <div className="modal-body">
              <div className="text-white">
                <form onSubmit={onSubmit}>
                  <div className="edit-subject-class-inputs-container">
                    <div className="form-group edit-subject-input-container-dash">
                      <label htmlFor="name">اسم المبحث</label>
                      <input
                        placeholder="أدخل أسم المبحث الجديد هنا"
                        name="name"
                        value={editClass.name}
                        onChange={getEditingInputs}
                        className="form-control edit-subject-input-dash"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      />
                      <span className="error-text">{errors.name}</span>
                    </div>
                    <div className="edit-subject-class-select-container-dash">
                      <label className="mb-2 lab2" htmlFor="">
                        اختر الصفوف التى يدرس بها
                      </label>
                      {newData && (
                        <MultiSelect
                          name="groups"
                          value={selectedFlavors}
                          options={newData}
                          onChange={handleMultiSelectChange}
                          className="multi-select-lib-edit-2"
                        />
                      )}
                      <span className="error-text">{errors.groupId}</span>
                    </div>
                  </div>
                  <div className="edit-subject-toggle-container-dash">
                    <ToggleForEdit
                      editClass={editClass}
                      handleClick={handleClick}
                    />
                  </div>
                  <div className="edit-subject-submit-close-button-container-dash mt-5">
                    <div className="submitButton">
                      <button
                        type="submit"
                        className="edit-subject-button-dash"
                      >
                        تعديل
                      </button>
                      <button
                        type="button"
                        className="edit-subject-cancel-button-dash"
                        data-bs-dismiss="modal"
                      >
                        إلغاء
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditSubjectModal;
