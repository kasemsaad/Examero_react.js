import React, { useMemo, useState } from "react";
import MyButton from "../../../../common/Button/Button";
import "./FormFPMaba7s.css";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";
import { MultiSelect } from "react-multi-select-component";
const FormForMaba7s = ({ activeClasses, fetchAllData }) => {
  const [formData, setFormData] = useState({ name: "", groupIds: "" });
  const [subjectErrors, setSubjectErrors] = useState("");
  const [selectedFlavors, setSelectedFlavors] = useState([]);

  console.log(activeClasses);
  const newData = useMemo(() => {
    if (Array.isArray(activeClasses)) {
      return activeClasses.map((option) => ({
        value: option.id,
        label: option.name,
      }));
    }
  }, [activeClasses]);
  const [x, setX] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) {
      setX("يرجى كتابة اسم المبحث");
      return;
    }
    if (!formData.groupIds) {
      setX("يرجى اختيار اسم الصف");
      return;
    }

    const handleRegistration = async (data) => {
      if (data) {
        await Api_Dashboard.post("/subjects", data)
          .then((response) => {
            console.log(data);
            console.log(response);

            fetchAllData();
          })
          .catch((err) => {
            console.log(err.response.data.errors);
            setSubjectErrors(err.response.data.errors);
          });
      }
    };
    handleRegistration(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
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
    <form className="form-container-puttt" onSubmit={handleSubmit}>
      <div style={{ margin: "auto", color: "red", whiteSpace: "pre-wrap" }}>
        {x}
      </div>
      <span style={{ margin: "auto", color: "red", whiteSpace: "pre-wrap" }}>
        {subjectErrors.name}
      </span>

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
  );
};

export default FormForMaba7s;
