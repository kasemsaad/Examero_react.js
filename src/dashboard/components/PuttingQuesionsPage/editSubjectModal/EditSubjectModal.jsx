import React, { useState, useEffect, useMemo } from "react";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";
import { MultiSelect } from "react-multi-select-component";
import "./EditSubjectModal.css";

const EditSubjectModal = ({
  rowDataOfSubjects,
  fetchAllData,
  activeClasses,
}) => {
  const [formData, setFormData] = useState({ name: "", groupIds: [] });
  const [subjectErrors, setSubjectErrors] = useState("");

  const [editClass, setEditClass] = useState({
    name: "",
    status: "",
    group_id: "",
    subject_id: "",
  });

  // Initialize the state with the values from rowDataOfSubjects
  useEffect(() => {
    if (rowDataOfSubjects) {
      setEditClass({
        name: rowDataOfSubjects.name || "",
        status: rowDataOfSubjects.status === 0 ? 0 : 1,
        groupIds: rowDataOfSubjects.groupIds || [],
      });
      console.log(rowDataOfSubjects);
      setSelectedFlavors();
    }
  }, [rowDataOfSubjects, activeClasses]);
  console.log();
  const getEditingInputs = (e) => {
    const { name, value } = e.target;
    setEditClass((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(editClass);
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
  const [selectedFlavors, setSelectedFlavors] = useState([]);

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
      await Api_Dashboard.post(`/subjects/${rowDataOfSubjects.id}`, editClass)
        .then((response) => {
          console.log(response);
          fetchAllData();
        })
        .catch((err) => {
          console.log(err);
          setSubjectErrors(err.response.data.errors);
        });
    }
  };
  const [x, setx] = useState(true);

  const handleMultiSelectChange = (selectedOptions) => {
    setSelectedFlavors(selectedOptions);
    setEditClass((prevData) => ({
      ...prevData,
      groupIds: selectedOptions.map((option) => option.value),
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

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
                تعديل الصف
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
                      }}
                    >
                      <label htmlFor="name">اسم الصف</label>
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
                          style={{ width: "50px" }}
                          name="groups"
                          value={selectedFlavors}
                          options={newData}
                          onChange={handleMultiSelectChange}
                          className="multi-select-lib-2"
                        />
                      )}
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
                        data-bs-dismiss="modal"
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
