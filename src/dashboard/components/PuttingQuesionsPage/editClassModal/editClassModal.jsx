import React, { useState, useEffect } from "react";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";
import { toast, ToastContainer } from "react-toastify";
import ToggleForEdit from "../ToggelForEdit/ToggleForEdit";
import "./editclass.css"; // Import the CSS file

const EditClassModal = ({ rowDataOfClass, fetchAllData }) => {
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
  const [modal, setModal] = useState("");

  const [editClass, setEditClass] = useState({
    name: "",
    status: "",
  });
  const element = document.getElementById("editClassModal");
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
      document.body.style.removeProperty("overflow");
      await Api_Dashboard.post(`/groups/${rowDataOfClass.id}`, editClass)
        .then((response) => {
          let x = response.data.message;
          // SetAlertPointSuccess(x);
          notify("تم تعديل الصف بنجاح ");
          element.style.display = "none";
          fetchAllData();
        })
        .catch((err) => {
          let x = err.response.data.message;
          SetAlertPoint(x);
          Errornotify(x);
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
      <ToastContainer position="top-center" />
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
          <div className="modal-content content-dash">
            <div className="modal-header modal-header-dash">
              <h5 className="modal-title-dash " id="exampleModalLabel">
                تعديل الصف
              </h5>
            </div>

            <div className="modal-body">
              <div className="container text-white">
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
                  <div className="toggle-container-dash">
                    <ToggleForEdit
                      editClass={editClass}
                      handleClick={handleClick}
                    />
                  </div>
                  <div className="mt-5 buttons-container-dash">
                    <div className="submitButton">
                      <button
                        type="submit"
                        className="text-white submit-edit-class-dash"
                      >
                        تعديل
                      </button>
                      <button
                        className="  cancel-edit-class-dash"
                        type="button"
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

export default EditClassModal;
