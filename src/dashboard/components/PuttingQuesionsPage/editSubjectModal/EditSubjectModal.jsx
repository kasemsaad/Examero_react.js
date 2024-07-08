import React, { useState, useEffect, useMemo } from "react";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";
import { MultiSelect } from "react-multi-select-component";
import "./EditSubjectModal.css";
import { toast, ToastContainer } from "react-toastify";
const EditSubjectModal = ({
  rowDataOfSubjects,
  fetchAllData,
  activeClasses,
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
          <div
            className="modal-content"
            style={{ backgroundColor: "#1D195D", borderRadius: "20px" }}
          >
            <div className="modal-header">
              <h5
                style={{ color: "#FF8A00", margin: "auto" }}
                className="modal-title"
                id="exampleModalLabel"
              >
                تعديل المبحث
              </h5>
            </div>

            <div className="modal-body">
              <div className="text-white">
                <form onSubmit={onSubmit}>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <div
                      className="form-group"
                      style={{
                        justifyContent: "flex-end",
                        width: "250",
                        display: "flex",
                        height: "68px",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <label htmlFor="name">اسم المبحث</label>
                      <input
                        placeholder="أدخل أسم المبحث الجديد هنا"
                        name="name"
                        style={{ height: "41px", width: "200px" }}
                        value={editClass.name}
                        onChange={getEditingInputs}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      />
                      <span style={{ color: "red" }}>{errors.name}</span>
                    </div>
                    <div
                      style={{
                        height: 79,
                        marginRight: "10px",
                        width: "211px",
                      }}
                    >
                      <label className="mb-2 lab2" htmlFor="">
                        اختر الصفوف التى يدرس بها
                      </label>
                      {newData && (
                        <MultiSelect
                          style={{ width: "50px", backgroundColor: "black" }}
                          name="groups"
                          value={selectedFlavors}
                          options={newData}
                          onChange={handleMultiSelectChange}
                          className="multi-select-lib-edit-2"
                        />
                      )}
                      <span style={{ color: "red" }}>{errors.groupId}</span>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      style={{ marginLeft: "6px" }}
                      className={`toggle-btnn ${
                        editClass.status === 0 ? "toggled" : ""
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
                        className={
                          editClass.status === 0 ? "white-text" : "whit"
                        }
                      >
                        {editClass.status === 1 ? "مفعل" : "معطل"}
                      </span>
                      <div className="thumb"></div>
                    </button>
                  </div>
                  <div
                    className="mt-5"
                    style={{
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div className="submitButton">
                      <button
                        type="submit"
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
