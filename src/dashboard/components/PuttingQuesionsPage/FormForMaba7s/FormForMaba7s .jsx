import React, { useState } from "react";
import MyButton from "../../../../common/Button/Button";
import "./FormFPMaba7s.css";

const FormForMaba7s = () => {
  const [formData, setFormData] = useState({ name: "", choice: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.choice) {
      return;
    }
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="form-container-puttt" onSubmit={handleSubmit}>
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
        <div className="form-group-puttt">
          <label className="mb-2 lab2" htmlFor="">
            اختر الصفوف التى يدرس بها
          </label>
          <select
            name="choice"
            value={formData.choice}
            onChange={handleChange}
            className="form-select inp2"
            aria-label="example"
          >
            <option value="">اختر اسم الصف</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
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
