import React, { useMemo, useState } from "react";
import MyButton from "../../../../common/Button/Button";
import "./FormFPMaba7s.css";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";
import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";
import DeleteUserModal from "../../UsersPages/DeletUserModal/DeleteUserModal";

const FormForMaba7s = ({ activeClasses, fetchAllData }) => {
  const [formData, setFormData] = useState({ name: "", groupIds: "" });
  const [subjectErrors, setSubjectErrors] = useState("");
  const [selectedFlavors, setSelectedFlavors] = useState([]);

  const [selected, setSelected] = useState([]);
  if (activeClasses) {
  }
  const newData = useMemo(() => {
    if (Array.isArray(activeClasses)) {
      return activeClasses.map((option) => ({
        value: option.id,
        label: option.name,
      }));
    }
  }, [activeClasses]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.groupIds) {
      return;
    }

    const handleRegistration = async (dat) => {
      if (dat) {
        await Api_Dashboard.post("/subjects", dat)
          .then((response) => {
            console.log(dat);
            console.log(response);

            fetchAllData();
          })
          .catch((err) => {
            console.log(err);
            setSubjectErrors(err);
          });
      }
      console.log(formData);
    };

    handleRegistration(formData);
  };
  const [x, stx] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMultiSelectChange = (selectedOptions) => {
    setSelectedFlavors(selectedOptions);
    setFormData((prevData) => ({
      ...prevData,
      groupIds: selectedOptions.map((option) => option.value),
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

        <div style={{ height: 79, marginRight: "10px" }}>
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
