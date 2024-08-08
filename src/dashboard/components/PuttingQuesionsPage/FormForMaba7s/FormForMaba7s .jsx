import React, { useMemo, useState } from "react";
import MyButton from "../../../../common/Button/Button";
import "./FormFPMaba7s.css";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";
import { MultiSelect } from "react-multi-select-component";
import { toast, ToastContainer } from "react-toastify";
const FormForMaba7s = ({ activeClasses, fetchAllData }) => {
  const [formData, setFormData] = useState({ name: "", groupIds: "" });
  const [subjectErrors, setSubjectErrors] = useState("");
  const [selectedFlavors, setSelectedFlavors] = useState([]);

  console.log(activeClasses);
  const newData = useMemo(() => {
    if (activeClasses) {
      return activeClasses.map((option) => ({
        value: option.id,
        label: option.name,
      }));
    }
  }, [activeClasses]);

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
  const reset = () => {
    setFormData({ name: "", groupIds: "" });
  };
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) {
      setError("يرجى كتابة اسم المبحث");
      return;
    }
    if (!formData.groupIds) {
      setError("يرجى اختيار اسم الصف");
      return;
    }

    const handleRegistration = async (data) => {
      if (data) {
        await Api_Dashboard.post("/subjects", data)
          .then((response) => {
            let x = response.data.message;
            SetAlertPointSuccess(x);

            notify("تم اضافة المبحث بنجاح ");
            reset();

            fetchAllData();
          })
          .catch((err) => {
            let x = err.response.data.message;
            SetAlertPoint(x);
            Errornotify(x);
            setError(err.response.data.errors.name);
          });
      }
    };
    handleRegistration(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError("");
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMultiSelectChange = (selectedOptions) => {
    if (selectedOptions !== selectedFlavors) {
      setSelectedFlavors(selectedOptions);
      setFormData((prevData) => ({
        ...prevData,
        groupIds: selectedOptions.map((option) => option.value),
      }));
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />

      <form className="form-container-puttt" onSubmit={handleSubmit}>
        <div style={{ margin: "auto", color: "red", whiteSpace: "pre-wrap" }}>
          {error}
          {subjectErrors.name}
        </div>

        <div className="MyFormm">
          <div className="form-group-puttt">
            <label className="mb-2 lab1" htmlFor="exampleInputEmail1">
              اسم المبحث
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              className="form-control inp1"
              id="exampleInput"
              aria-describedby="nameHelp"
              placeholder="أدخل أسم المبحث الجديد هنا"
            />
          </div>

          <div style={{ height: 79, marginRight: "10px", width: "191px" }}>
            <label className="mb-2 lab2" htmlFor="">
              اختر الصفوف التى يدرس بها
            </label>
            {newData && (
              <MultiSelect
                name="groups"
                value={selectedFlavors}
                options={newData}
                onChange={handleMultiSelectChange}
                className="multi-select-lib"
              />
            )}
          </div>

          <div className="butt-mabhas">
            <MyButton
              className="my-button-mabhas"
              content="إضافة"
              type="submit"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default FormForMaba7s;
