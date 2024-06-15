import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import Homeicon from '../../../assets/icons/home_student_view/majesticons_home-line copy.svg';
import delet from '../../../assets/image/fluent_delete-12-regular.svg';
import edit from '../../../assets/image/uil_edit.svg';
import plus from '../../../assets/image/+.svg';
import request from '../../../utlis/axios_utils_websit.jsx';
import '../Student_View/homeStudentView.css';
import "../../../dashboard/Home_Dashboard/home_dashboard.css";

function HomeStudentview(props) {
  // Hooks are called unconditionally at the top level
  const layoutBackground = useSelector((state) => state.dark.lay);
  const [teacher_data, setTeacher_data] = useState(null);

  // Fetch data in useEffect
  // useEffect(() => {
  //   request({ url: '/students/notes', method: 'get' })
  //     .then(response => {
  //       setTeacher_data(response.data);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching teacher data:", error);
  //     }) 
  // }, []);

  // // Handle loading state
  // if ( !teacher_data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="container py-5 mb-2 d-flex align-items-center justify-content-center flex-column">
      <div className=" " style={{ width: "85%", paddingTop: "4.25px" }}>
        <img className="" src={Homeicon} alt="HomeIcon" style={{ backgroundColor: "transparent" }} />
        <Link
          className="btn"
          to="#"
          style={{
            backgroundColor: "transparent",
            color: layoutBackground === "#0E0A43" ? "white" : "#0E0A43",
            fontSize: "18px"
          }}
        >
          الرئيسية
        </Link>
      </div>

      <div className="row m-0 Bold" style={{ width: "88%", paddingTop: "4.25px" }}>
        <div className="row rowHomestudent pt-2 m-0 col-md-8 d-flex align-items-start justify-content-evenly">
          <div className="col-3 rounded-4 shadow-box" style={{ backgroundColor: "#4941A6", width: "10rem" }}>
            <p>عدد الامتحانات المستخدمة </p>
            <p className="fs-6">17</p>
          </div>

          <div className="col-3 rounded-4 shadow-box" style={{ backgroundColor: "#C01F59", width: "10rem" }}>
            <p>عدد الامتحانات المتبقية</p>
            <p className="fs-6">2</p>
          </div>

          <div className="col-3 rounded-4 shadow-box" style={{ backgroundColor: "#C17011", width: "10rem" }}>
            <p>متوسط الدرجات</p>
            <p className="fs-6">70%</p>
          </div>

          <div className="row child pt-4 p-0 m-0 rounded-4" style={{ width: "100%", backgroundColor: "#4941A6" }}>
            <div className="col-md-7">
              <Link
                className="btn rounded-5 px-5 py-1"
                to="#"
                style={{
                  backgroundColor: layoutBackground === "#0E0A43" ? "#1D195D" : "white",
                  color: layoutBackground === "#0E0A43" ? "#C01F59" : "black",
                  fontSize: "18px"
                }}
              >
                رسالة اليوم
              </Link>
              <p className="p-3 pt-4">“ ينقسم الفاشِلون إلى نصفين: هؤلاء الذين يُفكرون ولا يعملون، وهؤلاء الذين يَعملون ولا يُفكرون أبدًا. “</p>
            </div>
            <div className="col-md-4 mb-4 boxday"></div>
          </div>
        </div>

        <div className="homeStudentcalender pt-3 col-md-4 d-flex align-items-center justify-content-center flex-column">
          <div className="rounded-5 d-flex align-items-center justify-content-center" style={{ width: "100%", height: "auto", backgroundColor: "#4941A6" }}>
            <div className="wrapper_todo_calender mt-3 d-flex align-items-center justify-content-center flex-column" style={{ backgroundColor: "#4941A6", border: "1px #4941A6 solid", borderRadius: "20px", width: "100%" }}>
              <div className="calender calenderhomestudent d-flex align-items-center justify-content-center" style={{ width: "100%" }}>
                <Calendar onChange={props.onChange} value={props.date} />
              </div>

              {3 > 0 && (
                <div className="mt-4 todo_app_wrapper d-flex justify-content-center" style={{ height: "30vh", overflow: "auto" }}>
                  <div className="todo_app" style={{ overflow: "auto" }}>
                    <div className="mb-3 mt-2 change_width_in_sm" style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
                      <div className="input_contain_value">
                        <input type="text" className="form-control" value="دون ملاحظتك" readOnly />
                      </div>
                      <div className="wraber_delete d-flex justify-content-center align-items-center" style={{ backgroundColor: "#1D195D", width: "2vw", height: "2vw", borderRadius: "8px" }}>
                        <img src={delet} alt="Delete" width="17px" height="17px" />
                      </div>
                      <div className="wraber_delete d-flex justify-content-center align-items-center" style={{ backgroundColor: "#4941A6", width: "2vw", height: "2vw", borderRadius: "8px", boxShadow: 'rgba(0, 0, 0, 0.75) -2px 3px 5px 0px' }}>
                        <img src={edit} alt="Edit" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div style={{ textAlign: "center", display: 'flex', justifyContent: "center", marginTop: "10px" }}>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="submit" className="btn mx-2" style={{ backgroundColor: "#FE4F60", color: '#FFFFFF' }}>
                  <span style={{ marginLeft: "10px" }}>
                    <img src={plus} alt="Plus Icon" />
                  </span>
                  إضافة ملحوظة
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeStudentview;
