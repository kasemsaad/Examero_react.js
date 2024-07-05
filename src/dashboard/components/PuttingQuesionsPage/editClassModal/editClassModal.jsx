import React, { useState, useEffect } from "react";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";

const EditClassModal = ({ rowDataOfClass, fetchAllData }) => {
  const [errors, setErrors] = useState("");
  const [modal, setModal] = useState("");

  const [editClass, setEditClass] = useState({
    name: "",
    status: "",
  });
  // Initialize the state with the values from rowDataOfClass
  useEffect(() => {
    if (rowDataOfClass) {
      setEditClass({
        name: rowDataOfClass.name,
        status: rowDataOfClass.status === 0 ? 0 : 1,
      });
    }
  }, [rowDataOfClass]);

  const getEditingInputs = (e) => {
    const { name, value } = e.target;
    setErrors("");
    setEditClass((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelEdit = async (editClass) => {
    if (rowDataOfClass) {
      console.log(editClass);
      await Api_Dashboard.post(`/groups/${rowDataOfClass.id}`, editClass)
        .then((response) => {
          setModal("modal");
          fetchAllData();
        })
        .catch((err) => {
          setErrors(err.response.data.errors);
        });
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newError = {};
    if (!editClass.name) {
      newError.name = "يرجي ادخال اسم الصف";
      return setErrors(newError);
    }

    handelEdit(editClass);
  };

  const [toggled, setToggled] = useState(true);
  const [editTog, setEditTog] = useState("");

  const tog = () => {
    setToggled(!toggled);
    if (toggled) {
      setEditTog(1);
    } else {
      setEditTog("");
    }
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
        id="editClassModal"
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
              <div className="container  text-white">
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">اسم الصف</label>
                    <input
                      name="name"
                      value={editClass.name || ""}
                      onChange={(e) => {
                        getEditingInputs(e);
                      }}
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    />
                    <span style={{ color: "red" }}>{errors.name} </span>
                  </div>
                  <div
                    style={{
                      height: "46px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <button
                      type="button"
                      style={{ marginLeft: "12px" }}
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
                        data-bs-dismiss={modal}
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

export default EditClassModal;
