import { Router, Link, useNavigate, useLocation } from "react-router-dom";
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
import imagee from '../../assets/icons/create_Exam/High Importance.svg';
import Api_website from "../../utlis/axios_utils_websit";
import Api_Dashboard from "../../dashboard/interceptor/interceptorDashboard";
import ModalLogOut from "../../dashboard/modal/modalLogOut";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


function Sidmedscreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const setId = (id) => {
    localStorage.setItem("sidbarId", JSON.stringify(id));
  };
  const id = localStorage.getItem("sidbarId");

  const logoutStudent = () => {
    Api_website.post(`/students/logout`)
      .then(response => {
        localStorage.removeItem("token_user");
        navigate("/");
        setId(1);
      })
      .catch(error => {
        console.error("Error not logout ", error);
      });
  };

  const logoutTeachers = () => {
    Api_website.post(`/teachers/logout`)
      .then(response => {
        localStorage.removeItem("token_user");
        navigate("/");
      })
      .catch(error => {
        console.error("Error not logout ", error);
      });
  };

  const logout = (id) => {
    localStorage.setItem("sidbarId", JSON.stringify(id));
  };

  const LogOutDashBoard = () => {
    Api_Dashboard.post(`/logout`)
      .then(response => {
        localStorage.removeItem("token_user");
        navigate("/login_dashboard");
        setId(1);
      })
      .catch(error => {
        console.error(error);
      });
  };

  //         console.error("Error not logout ");
  //     });
  // }
  const logout = (id) => {
    localStorage.setItem("sidbarId", JSON.stringify(id));
    // Api_Dashboard.get('/logout').post
    // localStorage.removeItem("token")
    //  return navigate("/login_dashboard")
  }
    
const LogOutDashBoard = ()=>{
           
  Api_Dashboard.post(`/logout`)
.then(response => { 
  // console.log("mosyafa ");     
  localStorage.removeItem("token");
  navigate("/login_dashboard")
  setId(1)
})
.catch(error => {
  console.error(error);
});
}

const [roleAceessToNav,SetroleAceessToNav]=useState(true)
const role = useSelector((state) => state.RoleAccess.role); 
const acccessDenied = ()=>{
    if (role != "owner"){
      SetroleAceessToNav(false)
        // navigate('/dashboard/accessDenied')
    }
}
useEffect(() => {
  if (role) {
    acccessDenied();
  }
}, [role]);


  return (
    <>
      {
        location.pathname.startsWith('/dashboard') ?
          <div className="sidbarmed p-0 " dir="rtl" >
            <div className="sidbarSidbar " style={{height:"98vh"}}>
              <ul className="pt-5 ps-4">
                <li className={`Icon  ${id === "1" ? "bgIcon" : " "}`}>
                  <Link to="/dashboard" onClick={() => setId(1)} >
                    <img src={homeIcon} alt="الرئيسية" />
                  </Link>
                </li>
                <li className={`Icon  ${id === "2" ? "bgIcon" : " "}`}>
                  <Link to="/dashboard/mangers" onClick={() => setId(2)} >
                    <img style={{ width: 20, height: 20 }} src={manage_accounts_outline_rounded} alt="مديرو الموقع" />
                  </Link>
                </li>
                <li className={`Icon  ${id === "3" ? "bgIcon" : " "}`}>

                  <Link to="/dashboard/users/teachers" onClick={() => setId(3)}>
                    <img style={{ width: 20, height: 20 }} src={account_supervisor_outline} alt="مشرفو الموقع" />
                  </Link>
                </li>
                <li className={`Icon  ${id === "4" ? "bgIcon" : " "}`}>

                  <Link to="/dashboard/planstudent" onClick={() => setId(4)}>
                    <img style={{ width: 20, height: 20 }} src={teacher} alt="المعلمين" />
                  </Link>
                </li>
                <li className={`Icon  ${id === "5" ? "bgIcon" : " "}`}>

                  <Link to="/dashboard/qbank" onClick={() => setId(5)}>
                    <img style={{ width: 20, height: 20 }} src={octiconIcon} alt="وضع الاسئله" />
                  </Link>
                </li>
                <li className={`Icon  ${id === "6" ? "bgIcon" : " "}`}>

                  <Link to="/dashboard/qbank_details" onClick={() => setId(6)}>
                    <img style={{ width: 23, height: 23 }} src={akar_icons_bank} alt="وضع الاسئله" />
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/rewardSupervisor" onClick={() => setId(6)}>
                    <img style={{ width: 20, height: 20 }} src={account_supervisor_outline} alt="مشرفو الموقع" />
                  </Link>
                </li>
               {roleAceessToNav? <li className={`Icon  ${id === "7" ? "bgIcon" : " "}`}>
                  <Link to="/dashboard/certify" onClick={() => setId(7)}>
                    <img style={{ width: 23, height: 23 }} src={ph_certificate} alt="وضع الاسئله" />
                  </Link>
                </li>:""}
              { roleAceessToNav? <li className={`Icon  ${id === "8" ? "bgIcon" : " "}`}>
                  <Link to="/dashboard/waitingemis" onClick={() => setId(8)}>
                    <img style={{ width: 20, height: 20 }} src={lucide_file_input} alt="وضع الاسئله" />
                  </Link>
                </li>:""}
            {  roleAceessToNav?  <li className={`Icon  ${id === "9" ? "bgIcon" : " "}`}>
                  <Link to="/dashboard/specify" onClick={() => setId(9)}>
                    <img style={{ width: 23, height: 23 }} src={tabel} alt="وضع الاسئله" />
                  </Link>
                </li>:""}
                <li className={`Icon  ${id === "10" ? "bgIcon" : " "}`}>

                  <Link to="/dashboard/putting/questions/levels=1" onClick={() => setId(10)}>
                    <img style={{ width: 18, height: 18 }} src={create_new} alt="وضع الاسئله" />
                  </Link>
                </li>
                {/* <li className={`Icon  ${id === "12" ? "bgIcon" : " "}`}>
                  <Link to="/" onClick={() => setId(12)} style={{ textDecoration: "none" }}>
                    <i className="fas fa-globe text-white" ></i>
                  </Link>
                </li> */}
                <li className={`Icon  ${id === "11" ? "bgIcon" : " "}`}>
                  <Link onClick={() => logout(11)}>
                  <img data-bs-toggle="modal" data-bs-target="#log_out_dashboard" src={iconamoon_exit_light} alt=" تسجيل الخروج"  />

                  </Link>
                </li>
              </ul>
            </div>
          </div>
          : location.pathname.startsWith('/student') ?
            <div className="sidbarmed p-0 pe-2" dir="rtl" >
              <div className="sidbarSidbar " style={{height:"340px", width:""}}>
                <ul className="pt-4 ps-1">
             
                  <li className={`Icon ${id === "1" ? "bgIcon" : ""}`}>
                    <Link to="/student/HomeStudentview" onClick={() => setId(1)}>
                      <img src={homeIcon} alt="الرئيسية" />
                    </Link>
                  </li>
                  <li className={`Icon ${id === "10" ? "bgIcon" : ""}`}>
                    <Link to="/student/datastudentexam" onClick={() => setId(10)}>
                      <img style={{ width: 18, height: 18 }} src={create_new} alt="إنشاء الامتحان" />
                    </Link>
                  </li>
                  <li className={`Icon ${id === "12" ? "bgIcon" : ""}`}>
                    <Link to="/" onClick={() => setId(12)} style={{ textDecoration: "none" }}>
                      <i className="fas fa-globe text-white"></i>
                    </Link>
                  </li>
                  <li className={`Icon ${id === "11" ? "bgIcon" : ""}`}>
                    <Link onClick={() => setId(11)}>
                      <img data-bs-toggle="modal" data-bs-target="#logout" src={iconamoon_exit_light} alt="تسجيل الخروج" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            : location.pathname.startsWith('/teacher') ?
              <div className="sidbarmed p-0" dir="rtl">
                <div className="sidbarSidbar pe-4">
                <ul className="pt-4 " style={{paddingLeft:"50px"}}>
                    <li className={`Icon  ${id === "1" ? "bgIcon" : " "}`}>
                      <Link to="/teacher/Home_teacher" onClick={() => setId(1)} >
                        <img src={homeIcon} alt="الرئيسية" />
                      </Link>
                    </li>
                    <li className={`Icon  ${id === "2" ? "bgIcon" : " "}`}>
                      <Link to="/teacher/CreateQuestation" onClick={() => setId(2)}>
                        <img style={{ width: 20, height: 20 }} src={octiconIcon} alt="تفاصيل بنك الاسئلة" />
                      </Link>
                    </li>
                    <li className={`Icon  ${id === "3" ? "bgIcon" : " "}`}>
                  <Link to="/teacher/QbankTeacherTable" onClick={() => setId(3)}>
                    <img style={{ width: 23, height: 23 }} src={akar_icons_bank} alt="بنك الاسءله " />
                  </Link>
                </li>
                    <li className={`Icon  ${id === "4" ? "bgIcon" : " "}`}>
                      <Link to="/teacher/CertificationTeacher" onClick={() => setId(4)}>
                        <img style={{ width: 23, height: 23 }} src={ph_certificate} alt="الشهادات" />
                      </Link>
                    </li>
                    <li className={`Icon  ${id === "5" ? "bgIcon" : " "}`}>
                      <Link to="/teacher/InsertingOpenEmisTags" onClick={() => setId(5)}>
                        <img style={{ width: 20, height: 20 }} src={lucide_file_input} alt=" وضع o.p.s" />
                      </Link>
                    </li>
                    <li className={`Icon  ${id === "6" ? "bgIcon" : " "}`}>
                      <Link to="/teacher/SpecificationTeacher" onClick={() => setId(6)}>
                        <img style={{ width: 23, height: 23 }} src={tabel} alt=" تالمواصفات" />
                      </Link>
                    </li>
                    <li className={`Icon  ${id === "7" ? "bgIcon" : " "}`}>
                      <Link to="/teacher/PuttingExam1" onClick={() => setId(7)}>
                        <img style={{ width: 18, height: 18 }} src={create_new} alt="انشاء الامتحان" />
                      </Link>
                    </li>
                    <li className={`Icon  ${id === "8" ? "bgIcon" : " "}`}>
                    <Link to="/" onClick={() => setId(8)} style={{ textDecoration: "none" }}>
                      <i className="fas fa-globe text-white" alt="الموقع" ></i>
                    </Link>
                    </li>

                    <li className={`Icon  ${id === "11" ? "bgIcon" : " "}`}>
                      <Link onClick={() => {
                        logout(11);
                      }}>
                        <img data-bs-toggle="modal" data-bs-target="#logout" src={iconamoon_exit_light} alt="تسجيل الخروج" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              : ""
      }

      <div
        className="modal fade DElementFade"
        id="logout"
        tabIndex="-1"
        aria-labelledby="deleteElementModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog DElementDialog modal-dialog-centered ele_2">
          <div className="modal-content DElementContent modal-backdrop1">
            <div className="modal-body DElementBody text-center">
              <img src={imagee} alt="Warning Icon" className="warning-icon" />
              <p className="modal-title DElementTitle" id="deleteElementModalLabel">هل أنت متأكد ؟</p>
              <p className="parag">سيتم تسجيل الخروج</p>
            </div>
            <div className="modal-footer DElementFooter">
              <div>
                <button
                  type="button"
                  className="btn btn-danger cancel-btn DElementSave mx-1"
                  data-bs-dismiss="modal"
                  onClick={() => logoutStudent()}
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

export default Sidmedscreen;
