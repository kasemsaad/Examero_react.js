import React, { useEffect, useState } from "react";
import "./header.css";
import personal from "./../../assets/image/man 2 (1).svg";
import Examiro from "./../../assets/image/image 9.svg";
import notifiy from "./../../assets/image/ic_baseline-notifications-none.svg";
import moon from "./../../assets/image/solar_moon-line-duotone.svg";
import logo from "./../../assets/image/لوجو examero-01 1.svg";
// import SidebarFullscreen from '../sidebar/structure'
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_THEME } from "../../redux/Types/types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Api_Dashboard from "../../dashboard/interceptor/interceptorDashboard";
import Api_website from "../../utlis/axios_utils_websit";
import Api_dashboard from "../../utlis/axios_utils_dashboard";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [toggled, setToggled] = useState(false);
  const ReducerState = useSelector((state) => state.dark);
  const count = useSelector((state) => state.dark.counter);
  const [personalDashboard, SetpersonalDashboard] = useState("");
  const [personalStudent, SetpersonalStudent] = useState("");
  const [personalTeacher, SetpersonalTeacher] = useState("");
  const notification = useSelector((state) => state.not.not);

  const dispatch = useDispatch();
  const tog = () => {
    setToggled(!toggled);
    dispatch({
      type: CHANGE_THEME,
    });
  };

  const linksProfile = () => {
    if (location.pathname.startsWith("/dashboard")) {
      navigate("/dashboard/b");
    } else if (location.pathname.startsWith("/student")) {
      navigate("/student/editStudentProfaile");
    } else if (location.pathname.startsWith("/teacher")) {
      navigate("/teacher/TeacherProfile");
    } else {
      navigate("/");
    }
  };

  const getRefresh = async () => {
    await Api_Dashboard.get(`/refresh`)
      .then((response) => {
        let name_image = response.data.User.media.name;
        SetpersonalDashboard(name_image);
      })
      .catch((error) => {
        console.error("Error fetching subjects data:");
      });
  };
  




const getRefreshstudent = async()=>{
 await Api_website.get(`/students/refresh`)
    .then(response => {
      let name_image = response.data.User.media.name
      console.log(name_image)
      SetpersonalStudent(name_image);
    })
    .catch(error => {
        console.error("Error fetching student data:");
      });
  };
  const getRefreshteacher = async()=>{
    await Api_website.get(`/teachers/refresh`)
       .then(response => {
         let name_image = response.data.user.media.name
         console.log(name_image)
         SetpersonalTeacher(name_image);
       })
       .catch(error => {
           console.error("Error fetching teacher data:");
         });
     };

  useEffect(() => {
    getRefresh();
    getRefreshteacher();
    getRefreshstudent();
  }, [personalDashboard]);

  return (
    <>
      <div
        className="image"
        style={{ width: "100%", position: "absolute", zIndex: -44 }}
      >
        <img src={Examiro} alt="examiro" width="100%" />
      </div>

      <nav className="navbar-expand-lg navbar-light">
        <div
          className="container-fluid left_burger"
          style={{ margin: "0", padding: "0" }}
        >
          <div
            className="row row_rev_"
            id="navbarSupportedContent"
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <ul className="navbar-nav mb-lg-0 col-3 ul_resp_sm">
              <div
                className="d-flex"
                style={{ alignItems: "center", width: "100%" }}
              >
                <li className="nav-item">
                  <div
                    style={{
                      backgroundColor: "#0E0A43",
                      width: "1.606rem",
                      height: "1.606rem",
                      borderRadius: "50%",
                      position: "relative",
                    }}
                  >
                    <Link to="/dashboard/activity/all">
                      {" "}
                      <img
                        src={notifiy}
                        width="100%"
                        alt="notifaction"
                        style={{ paddingBottom: "2px" }}
                      />
                    </Link>
                    <span
                      style={{
                        width: "auto",
                        height: "14px",
                        position: "absolute",
                        top: "0px",
                        left: "20px",
                        color: "#FFFFFF",
                        fontSize: "12px",
                        backgroundColor: "#991111",
                        borderRadius: "50%",
                        fontFamily: "'Times New Roman', Times, serif",
                        fontWeight: "800",
                      }}
                    >
                      {notification
                        ? notification
                        : localStorage.getItem("not")}
                    </span>
                  </div>
                </li>
                <div
                  className="notify_btn_tog"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <li className="nav-item">
                    <div
                      className="image_of_light"
                      style={{
                        backgroundColor: "#0E0A43",
                        width: "25.7px",
                        height: "25.7px",
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        src={moon}
                        alt="moon"
                        style={{ paddingLeft: "4px", paddingBottom: "2px" }}
                      />
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <button
                      style={{ marginLeft: "6px" }}
                      className={`toggle-btn ${toggled ? "toggled" : ""}`}
                      onClick={() => tog()}
                    >
                      <span className={toggled ? "white-text" : "whit"}>
                        {toggled ? "Light" : "Dark"}
                      </span>
                      <div className="thumb"></div>
                    </button>
                  </li>
                </div>
              </div>
            </ul>
            <div
              className="col-3 text-center logo_width_small"
              style={{ margin: "0", padding: "0" }}
            >
              <div className="logo_examiro">
                <img
                  className="r"
                  src={logo}
                  alt="examiro"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* <div className="personal_image" style={{  position: "relative",}}>
   <div id="svg_header" style={{ width: "3.437rem", height: "3.437rem", borderRadius: "50%", backgroundColor: "blue", overflow: "hidden",}}>
        <img  style={{ objectFit: "cover" }} src={personal} width="100%"  height="100%" alt='presonal_img'/>
        </div>
     </div> */}

      <div
        className="personal_image"
        style={{
          position: "relative",
          width: "90%",
          margin: "auto",
          height: "10px",
        }}
      >
        <div
          id="svg_header"
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            backgroundColor: "blue",
            overflow: "hidden",
            position: "absolute",
          }}
        >
          <img
            style={{ objectFit: "cover" }}


            
            src={
              
              location.pathname.startsWith('/dashboard')? `${Api_dashboard.defaults.baseURL}/assets/Admin/${personalDashboard}`:
              location.pathname.startsWith('/student')? `${Api_dashboard.defaults.baseURL}/assets/Student/${personalStudent}`:
              location.pathname.startsWith('/teacher')? `${Api_dashboard.defaults.baseURL}/assets/Teacher/${personalTeacher}`:
""  
                        }
            width="100%"
            height="100%"
            alt="Personal"
            onClick={() => {
              linksProfile();
            }}
          />
        </div>
      </div>

    </>
  );
}
export default Header;
