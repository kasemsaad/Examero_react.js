import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import homeIcon from '../../assets/icons/sidebar/majesticons_home-line.svg';
import octiconIcon from '../../assets/icons/sidebar/octicon_question-16.svg';
import ph_certificate from '../../assets/icons/sidebar/ph_certificate.svg';
import tabel from '../../assets/icons/sidebar/ph_table.svg';
import lucide_file_input from '../../assets/icons/sidebar/lucide_file-input.svg';
import create_new from '../../assets/icons/sidebar/wpf_create-new.svg';
import iconamoon_exit_light from '../../assets/icons/sidebar/iconamoon_exit-light.svg';
import akar_icons_bank from '../../assets/icons/sidebar/akar-icons_bank.svg';
import manage_accounts_outline_rounded from '../../assets/icons/sidebar/material-symbols_manage-accounts-outline-rounded.svg';
import account_supervisor_outline from '../../assets/icons/sidebar/mdi_account-supervisor-outline.svg';
import teacher from '../../assets/icons/sidebar/mdi_teacher.svg';
import logo from '../../assets/image/لوجو examero-01 1.svg';
import list_icon from '../../assets/icons/sidebar/Group 310.svg';
import solar_moon_line_duotone from '../../assets/icons/sidebar/solar_moon-line-duotone.svg';
import personal from "./../../assets/image/IMG_20231104_171844_696.jpg"
import notifiy from "./../../assets/image/ic_baseline-notifications-none.svg"
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_THEME } from "../../redux/Types/types";
import imagee from '../../assets/icons/create_Exam/High Importance.svg';
import Api_Website from "../../utlis/axios_utils_websit";
import Api_Dashboard from "../../dashboard/interceptor/interceptorDashboard";
import Api_dashboard from "../../utlis/axios_utils_dashboard";
import ModalLogOut from "../../dashboard/modal/modalLogOut";
import { ToastContainer } from "react-toastify";
function Navsmallscreen() {
  const navigate = useNavigate()
  const location = useLocation()
  const setId = (id) => {
    localStorage.setItem("sidebarId", JSON.stringify(id));
  };

  const [toggled, setToggled] = useState(false)
  const ReducerState = useSelector((state) => state.dark);
  const count = useSelector((state) => state.dark.counter);
  const [personalDashboard, SetpersonalDashboard] = useState("")
  const [personalStudent, SetpersonalStudent] = useState("")
  const [personalTeacher, SetpersonalTeacher] = useState("")

  const dispatch = useDispatch()
  const tog = () => {
    setToggled(!toggled)
    dispatch({
      type: CHANGE_THEME,
    })
  }
 


  // const linksProfile = () => {
  //   if (location.pathname.startsWith('/dashboard')) {
  //     navigate("/dashboard/b");
  //   } else if (location.pathname.startsWith('/student')) {
  //     navigate("/student/editStudentProfaile");
  //   } else if (location.pathname.startsWith('/teacher')) {
  //     navigate("/teacher/TeacherProfile");
  //   } else {
  //     navigate("/");
  //   }
  // };


  const getRefresh = async () => {
    await Api_Dashboard.get(`/refresh`)
      .then(response => {
        let name_image = response.data.User.media.name
        SetpersonalDashboard(name_image);

      })
      .catch(error => {

        console.error("Error fetching subjects data:");
      });
  }
  const getRefreshstudent = async () => {
    await Api_Website.get(`/students/refresh`)
      .then(response => {
        let name_image = response.data.User.media.name
        SetpersonalStudent(name_image);
      })
      .catch(error => {
        console.error("Error fetching student data:");
      });
  }
  const getRefreshteacher= async()=>{
    await Api_Website.get(`/teachers/refresh`)
       .then(response => {
         let name_image = response.data.user.media.name
         SetpersonalTeacher(name_image);
       })
       .catch(error => {
           console.log("Error  data:");
         });
     };

 
const user=localStorage.getItem("user")
  useEffect(() => {
    getRefresh()
    if(user==="student"){

      getRefreshstudent()
    }else if(user==="teacher"){
      
      getRefreshteacher()
    }

  }, [personalDashboard])

const LogOutDashBoard = ()=>{
           
  Api_Dashboard.post(`/logout`)
.then(response => { 
  localStorage.removeItem("token");
  navigate("/login_dashboard")
  setId(1)
})
.catch(error => {
  console.error(error);
});
}


const log= () => {

  if (user === "student") {
    Api_Website.post(`/students/logout`)
          .then(response => {
            localStorage.removeItem("token_user");
            localStorage.removeItem("user");
            navigate("/")          })
          .catch(error => {
              console.error("Error not logout ");
          });
          
  } else if (user === "teacher") {
      Api_Website.post(`/teachers/logout`)
          .then(response => {
            // console.log("kkkkkkkkkkk ");
            localStorage.removeItem("token_user");
            localStorage.removeItem("user");
            navigate("/")
          })
          .catch(error => {

              console.error("Error not logout ");
            });
          }
}
  return (
    <>
      <ToastContainer />

      <nav className="navbar navbarsidbar  navbar-expand-lg" >
        <div className="container-fluid ">
          <div className="d-flex" style={{ alignItems: "center" }}>
            <Link className="navbar-brand" href="#"><img src={logo} alt="Logo" /></Link>
            <div style={{
              backgroundColor: "#0E0A43", width: "1.606rem", height: "1.606rem",
              borderRadius: "50%", position: "relative",
            }} >
              <Link> <img src={notifiy} width="100%" alt="notifaction"
                style={{ paddingBottom: "2px", }} /></Link>
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
                }}>
                122
              </span>
            </div>
          </div>
          <button className="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span > <img style={{ width: 20, height: 20 }} src={list_icon} alt="list_icon" /> </span>
          </button>
          <div className="collapse navbar-collapse" dir="rtl" id="navbarNav">
            {
              location.pathname.startsWith('/dashboard') ?
                <ul className="navbar-nav navbar-nav-small" dir="ltr" >
                  <li className="nav-item " >
                    <Link className="nav-link" aria-current="page" to="/dashboard" onClick={() => setId(1)}>الرئيسية
                    <img src={homeIcon} style={{width:"21px",marginLeft:"10px"}} alt="الرئيسية" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/mangers" onClick={() => setId(2)}>مديرو الموقع
                      <img style={{ width: 20, height: 20 }} src={manage_accounts_outline_rounded} alt="مديرو الموقع" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/users/teachers" onClick={() => setId(3)}> المستخدمين
                      <img style={{ width: 20, height: 20 }} src={account_supervisor_outline} alt=" المستخدمين" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/planstudent" onClick={() => setId(4)}> باقات الاشتراك
                      <img style={{ width: 20, height: 20 }} src={teacher} alt="باقات" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/qbank" onClick={() => setId(5)}> بنك الاسئلة
                      <img style={{ width: 20, height: 20 }} src={octiconIcon} alt="بنك الاسئله" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/qbank_details" onClick={() => setId(6)}> تفاصيل بنك الاسئلة
                      <img style={{ width: 20, height: 20 }} src={account_supervisor_outline} alt="بنك الأسئلة تفاصيل"  />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/rewardSupervisor" onClick={() => setId(7)}> المكافئات و العقوبات
                      <img style={{ width: 23, height: 23 }} src={ph_certificate} alt=" العقوبات" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/certify" onClick={() => setId(8)}> الشهادات
                      <img style={{ width: 20, height: 20 }} src={lucide_file_input} alt="الشهادات" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/waitingemis" onClick={() => setId(9)}> إدخال علامات Open Emis
                      <img style={{ width: 23, height: 23 }} src={tabel} alt=" إدخال علامات Open Emis" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/specify" onClick={() => setId(10)}> جدول المواصفات
                      <img style={{ width: 18, height: 18 }} src={create_new} alt=" المواصفات" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/putting/questions/levels=1" onClick={() => setId(15)}>  انشاء الامتحان
                      <img style={{ width: 18, height: 18 }} src={create_new} alt="انشاء الاسئله" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link d-flex" style={{ width: "283px", justifyContent: "space-between", alignItems: "center" }} onClick={() => setId(11)}>
                      <button style={{ marginLeft: "6px", height: "25px" }} className={`toggle-btn ${toggled ? "toggled" : ""}`} onClick={() => tog()}>
                        <span className={toggled ? "white-text" : "whit"}>{toggled ? "On" : "Off"}</span>
                        <div className='thumb'></div>
                      </button>
                      <div>

                        <span>الوضع</span>
                        <img style={{ width: 18, height: 18 }} src={solar_moon_line_duotone} alt="الوضع" />
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={() => setId(12)} style={{ textDecoration: "none" }}> الموقع
                      <i className="fas fa-globe text-white fs-4 ms-4" ></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" onClick={() => setId(11)}>تسجيل الخروج
                    <img data-bs-toggle="modal" data-bs-target="#log_out_dashboard" src={iconamoon_exit_light} alt=" تسجيل الخروج"  />
                    </Link>
                  </li>

                </ul>
                :
                location.pathname.startsWith('/student') ?
                  <ul className="navbar-nav navbar-nav-small" dir="ltr" >
                    <li className="nav-item " >
                      <Link className="nav-link" aria-current="page" to="/student/HomeStudentview" onClick={() => setId(1)}>الرئيسية
                      <img src={homeIcon} style={{width:"21px",marginLeft:"10px"}} alt="الرئيسية" />
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/student/datastudentexam" onClick={() => setId(10)}>إنشاء الامتحان
                        <img style={{ width: 18, height: 18 }} src={create_new} alt="إنشاء الامتحان" />
                      </Link>
                    </li>
                    <li className="nav-item">
                      <div className="nav-link d-flex" style={{ width: "283px", justifyContent: "space-between", alignItems: "center" }} onClick={() => setId(11)}>

                        <button style={{ marginLeft: "6px", height: "25px" }} className={`toggle-btn ${toggled ? "toggled" : ""}`} onClick={() => tog()}>
                          <span className={toggled ? "white-text" : "whit"}>{toggled ? "On" : "Off"}</span>
                          <div className='thumb'></div>
                        </button>
                        <div>

                          <span>الوضع</span>
                          <img style={{ width: 18, height: 18 }} src={solar_moon_line_duotone} alt="الوضع" />
                        </div>
                      </div>
                    </li>

                    <li className="nav-item">
                      <Link to="/" className="nav-link" onClick={() => setId(12)} style={{ textDecoration: "none" }}> الموقع
                        <i className="fas fa-globe text-white fs-4 ms-4" ></i>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" data-bs-toggle="modal" data-bs-target="#logout" onClick={() => setId(11)}>تسجيل الخروج
                        <img style={{ width: 18, height: 18 }} src={iconamoon_exit_light} alt="تسجيل الخروج" />
                      </Link>
                    </li>

                  </ul>

                  : location.pathname.startsWith('/teacher') ?



                    <ul className="navbar-nav navbar-nav-small" dir="ltr" >
                      <li className="nav-item  " >
                        <Link className="nav-link" aria-current="page" to="/teacher/Home_teacher" onClick={() => setId(1)}>الرئيسية
                          <img src={homeIcon} style={{width:"21px",marginLeft:"10px"}} alt="الرئيسية" />
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/teacher/CreateQuestation" onClick={() => setId(2)}>"وضع الاسئلة
                          <img style={{ width: 18, height: 18 }} src={octiconIcon} alt="وضع الأسئلة" />
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/teacher/QbankTeacherTable" onClick={() => setId(3)}>بنك الأسئلة
                          <img style={{ width: 18, height: 18 }} src={akar_icons_bank} alt="إنشاء الامتحان" />
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/teacher/CertificationTeacher" onClick={() => setId(4)}>شهادات التقدير
                          <img style={{ width: 18, height: 18 }} src={ph_certificate} alt=" الشهادات" />
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/teacher/InsertingOpenEmisTags" onClick={() => setId(5)}>إدخال علامات Open Emis
                          <img style={{ width: 18, height: 18 }} src={lucide_file_input} alt="وضع o.p.s" />
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/teacher/SpecificationTeacher" onClick={() => setId(6)}>جدول المواصفات
                          <img style={{ width: 18, height: 18 }} src={tabel} alt="تالمواصفات" />
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/teacher/PuttingExam1" onClick={() => setId(7)}>إنشاء الامتحان
                          <img style={{ width: 18, height: 18 }} src={create_new} alt="انشاء الامتحان" />
                        </Link>
                      </li>
                      <li className="nav-item">
                        <div className="nav-link d-flex" style={{ width: "283px", justifyContent: "space-between", alignItems: "center" }} onClick={() => setId(11)}>

                          <button style={{ marginLeft: "6px", height: "25px" }} className={`toggle-btn ${toggled ? "toggled" : ""}`} onClick={() => tog()}>
                            <span className={toggled ? "white-text" : "whit"}>{toggled ? "On" : "Off"}</span>
                            <div className='thumb'></div>
                          </button>
                          <div>

                            <span>الوضع</span>
                            <img style={{ width: 18, height: 18 }} src={solar_moon_line_duotone} alt="الوضع" />
                          </div>
                        </div>
                      </li>

                      <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={() => setId(8)} style={{ textDecoration: "none" }}> الموقع
                          <i className="fas fa-globe text-white fs-4 ms-4" ></i>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" data-bs-toggle="modal" data-bs-target="#logout" onClick={() => setId(11)}>تسجيل الخروج
                          <img style={{ width: 18, height: 18 }} src={iconamoon_exit_light} alt="تسجيل الخروج" />
                        </Link>
                      </li>

                    </ul>



                    : ""


            }
          </div>
          <div className="personal_images" style={{ position: 'relative', width: '80%', margin: 'auto', height: '10px' }}>
            <div id="svg_header" style={{ width: '55px', height: '55px', borderRadius: '50%', backgroundColor: 'blue', overflow: 'hidden', position: 'absolute' }}>
              <img style={{ objectFit: 'cover' }}

                src={

                  location.pathname.startsWith('/dashboard') ? `${Api_dashboard.defaults.baseURL}/assets/Admin/${personalDashboard}` :
                    location.pathname.startsWith('/student') ? `${Api_dashboard.defaults.baseURL}/assets/Student/${personalStudent}` :
                      location.pathname.startsWith('/teacher')? `${Api_dashboard.defaults.baseURL}/assets/Teacher/${personalTeacher}`:
                      ""
                }

                width="100%" height="100%" alt="Personal" />
            </div>
          </div>
        </div>
      </nav>
      <div

        className="modal fade DElementFade  "
        id="logout"
        tabIndex="-1"
        aria-labelledby="deleteElementModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog DElementDialog modal-dialog-centered ele_2 ">
          <div className="modal-content DElementContent modal-backdrop1">
            <div className="modal-body DElementBody text-center">
              <img src={imagee} alt="Warning Icon" className="warning-icon" />
              <p className="modal-title DElementTitle" id="deleteElementModalLabel">هل أنت متأكد ؟</p>
              <p className="parag">سيتم تسجيل الخروج </p>
            </div>
            <div className="modal-footer DElementFooter">
              <div>
                <button
                  type="button"
                  className="btn btn-danger cancel-btn DElementSave mx-1"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    log()
                  }}
                >
                  نعم
                </button>
                <button
                  type="button"
                  className="btn-secondary cancel-btn DElementCancel mx-1"
                  data-bs-dismiss="modal"
                >
                  لا
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalLogOut LogOut={LogOutDashBoard}/>         

    </>
  );
}

export default Navsmallscreen;
