import React, { useEffect, useState } from "react";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";
import "./EditUnitModal.css";
import { toast } from "react-toastify";

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

    document.body.style.removeProperty('overflow')
    const newErrors = {};
    if (!formData.group_id) newErrors.group_id = "يرجى اختيار اسم الصف ";
    if (!formData.name) newErrors.name = "يرجى ادخال اسم الوحدة ";
    if (!formData.subject_id) newErrors.subject_id = "يرجي اختيار اسم المبحث";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await Api_Dashboard.post(
        document.body.style.removeProperty('overflow')
        `/units/${RowDataOfUnite.id}`,
        formData
      );
      let x = response.data.message;
      SetAlertPointSuccess(x);
      notify("تم تعديل الوحده بنجاح ");
      element.style.display = "none";
      // setModal("modal");
      element.style.display = "none";
      fetchAllUnits();
    } catch (error) {
      let x = error.response.data.message;
      SetAlertPoint(x);
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
                      style={{ direction: "rtl", height: "35px" }}
                    />
                    <span style={{ color: "red" }}>{errors.name}</span>
                  </div>

                  {/* ///////////////last name input ///////////////////////////// */}

                  <div
                    className="form-group col-5 d-flex flex-column"
                    style={{ direction: "rtl", justifyContent: "center" }}
                  >
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
                    style={{ display: "flex", width: "89%" }}
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
                      formData.status === 0 ? "toggled" : ""
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
                      className={formData.status === 0 ? "white-text" : "whit"}
                    >
                      {formData.status === 1 ? "مفعل" : "معطل"}
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

export default EditUnitModal;
