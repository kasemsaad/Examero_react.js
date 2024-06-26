import { Router,Link, useNavigate, useLocation  } from "react-router-dom";
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
import "./style.css";
import Api_website from "../../utlis/axios_utils_websit";
import imagee from '../../assets/icons/create_Exam/High Importance.svg';

// import Api_Dashboard from "../../dashboard/interceptor/interceptorDashboard";

function SidebarFullscreen() {
  const navigate = useNavigate()
  const setId = (id) => {
    localStorage.setItem("sidbarId", JSON.stringify(id));
  };

  const logout = (id)=>{
    localStorage.setItem("sidbarId", JSON.stringify(id));
    // Api_Dashboard.get('/logout').post
    // localStorage.removeItem("token")
  //  return navigate("/login_dashboard")
  }
  const logoutStudent = ()=>{
           
        Api_website.post(`/students/logout`)
    .then(response => {      
        localStorage.removeItem("token");
        navigate("/")
        setId(1)
    })
    .catch(error => {
        console.error("Error not logout ");
    });
  }
//   const logoutTeachers = ()=>{
           
//         Api_website.post(`/teachers/logout`)
//     .then(response => {      
//         localStorage.removeItem("token");
//         navigate("/")
        
//     })
//     .catch(error => {
        
//         console.error("Error not logout ");
//     });
// }

  const id=localStorage.getItem("sidbarId");
  const location=useLocation()
  // const path = location.pathname
  // const basePath=path.slice(0,11)
  // console.log(basePath)
  return (
    <>
    {
      location.pathname.startsWith('/dashboard')?
      
        <div className="sidbar p-0 pe-3 " style={{paddingRight:"100px"}} dir="rtl" >
          <div className="sidbarSidbar ">
          <ul className="pt-4 ps-4">
            <li className={`Icon  ${id === "1" ? "bgIcon":" "}`}>
              <Link to="/log" onClick={() => setId(1)} >
              <img  src={homeIcon} alt="الرئيسية" />
              </Link>
            </li>
            <li className={`Icon  ${id === "2" ? "bgIcon":" "}`}>
            <Link  to="/log" onClick={() => setId(2)} >
            <img style={{ width: 20 , height:20 }} src={manage_accounts_outline_rounded} alt="مديرو الموقع" />
              </Link>
            </li>
            <li className={`Icon  ${id === "3" ? "bgIcon":" "}`}>
            <Link  to="/" onClick={() => setId(3)}>
            <img style={{ width: 20 , height:20 }} src={account_supervisor_outline} alt="مشرفو الموقع" />
              </Link>
            </li>
            <li className={`Icon  ${id === "4" ? "bgIcon":" "}`}>
            <Link  to="/" onClick={() => setId(4)}>
            <img style={{ width: 20 , height:20 }} src={teacher} alt="المعلمين" />
              </Link>
            </li>
            <li className={`Icon  ${id === "5" ? "bgIcon":" "}`}>
            <Link  to="/" onClick={() => setId(5)}>
            <img style={{ width: 20 , height:20 }} src={octiconIcon} alt="وضع الاسئله" />
              </Link>
            </li>
            <li className={`Icon  ${id === "6" ? "bgIcon":" "}`}>
            <Link to="/" onClick={() => setId(6)}>
              <img style={{ width: 23 , height:23 }} src={akar_icons_bank} alt="وضع الاسئله"  />
              </Link>
            </li>
            <li className={`Icon  ${id === "7" ? "bgIcon":" "}`}>
            <Link to="/" onClick={() => setId(7)}>
              <img style={{ width: 23 , height:23 }} src={ph_certificate } alt="وضع الاسئله"  />
              </Link>
            </li>
            <li className={`Icon  ${id === "8" ? "bgIcon":" "}`}>
            <Link to="/" onClick={() => setId(8)}>
              <img style={{ width: 20 , height:20 }} src={lucide_file_input } alt="وضع الاسئله"  />
              </Link>
            </li>
            <li className={`Icon  ${id === "9" ? "bgIcon":" "}`}>
            <Link to="/" onClick={() => setId(9)}>
              <img style={{ width: 23 , height:23 }} src={tabel} alt="وضع الاسئله"  />
              </Link>
            </li>
            <li className={`Icon  ${id === "10" ? "bgIcon":" "}`}>
            <Link to="/mostar" onClick={() => setId(10)}>
              <img  style={{ width: 18 , height:18 }} src={create_new} alt="وضع الاسئله"  />
              </Link>
            </li>
            <li className={`Icon  ${id === "11" ? "bgIcon":" "}`}>
            <Link   onClick={() => logout(11)}>
              <img  src={iconamoon_exit_light} alt="وضع الاسئله"  />
              </Link>
            </li>
            {/* <li className={`Icon  ${id === "11" ? "bgIcon":" "}`}>
            <Link to="/" onClick={() => setId(11)}>
              <img  src={iconamoon_exit_light} alt="وضع الاسئله"  />
              </Link>
            </li> */}
          </ul>
          </div>
          <ul className="sidbarUl pt-4  " >
            <li className="sidbarli">
            <Link to="/" onClick={() => setId(1)} className={`Icon  ${id === "1" ? "Id":" "}`}>الرئيسية</Link>
            </li>
            <li className="sidbarli">
              <Link to="/" onClick={() => setId(2)} className={`Icon  ${id === "2" ? "Id":" "}`}>مديرو الموقع</Link>
            </li>
            <li className="sidbarli">
            <Link to="/" onClick={() => setId(3)} className={`Icon  ${id === "3" ? "Id":" "}`}>مشرفو الموقع</Link>
            </li>
            <li className="sidbarli">
            <Link to="/" onClick={() => setId(4)} className={`Icon  ${id === "4" ? "Id":" "}`}>المعلمين</Link>
            </li>
            <li className="sidbarli">
            <Link to="/" onClick={() => setId(5)} className={`Icon  ${id === "5" ? "Id":" "}`}>وضع الأسئلة</Link>
            </li>
            <li className="sidbarli">
            <Link to="/" onClick={() => setId(6)} className={`Icon  ${id === "6" ? "Id":" "}`}>بنك الأسئلة</Link>
            </li>
            <li className="sidbarli">
            <Link to="/" onClick={() => setId(7)} className={`Icon  ${id === "7" ? "Id":" "}`}>شهادات التقدير</Link>
            </li>
            <li className="sidbarli">
            <Link to="/" onClick={() => setId(8)} className={`Icon  ${id === "8" ? "Id":" "}`}>إدخال علامات Open Emis</Link>
            </li>
            <li className="sidbarli">
            <Link to="/" onClick={() => setId(9)} className={`Icon  ${id === "9" ? "Id":" "}`}>جدول المواصفات</Link>
            </li>
            <li className="sidbarli">
            <Link to="/" onClick={() => setId(10)} className={`Icon  ${id === "10" ? "Id":" "}`}>إنشاء الامتحان</Link>
            </li>
            <li className="sidbarli">
            <Link to="/" onClick={() => setId(11)} className={`Icon  ${id === "11" ? "Id":" "}`}>تسجيل الخروج</Link>
            </li>
              
          </ul>
        </div>
:
location.pathname.startsWith('/student')?

<div className="sidbar p-0 pe-3 " style={{paddingRight:"100px"}} dir="rtl" >
<div className="sidbarSidbar ">
<ul className="pt-4 ps-4">
  <li className={`Icon  ${id === "1" ? "bgIcon":" "}`}>
    <Link to="/student/HomeStudentview" onClick={() => setId(1)} >
    <img  src={homeIcon} alt="الرئيسية" />
    </Link>
  </li>
  <li className={`Icon  ${id === "10" ? "bgIcon":" "}`}>
  <Link to="/student/createExam" onClick={() => setId(10)}>
    <img  style={{ width: 18 , height:18 }} src={create_new} alt="إنشاء الامتحان"  />
    </Link>
  </li>
  <li className={`Icon  ${id === "11" ? "bgIcon":" "}`}>
  <Link   onClick={() =>{
    logout(11);
  }}>
    <img data-bs-toggle="modal" data-bs-target="#logout" src={iconamoon_exit_light} alt="تسجيل الخروج"  />
    </Link>
  </li>
 
</ul>
</div>
<ul className="sidbarUl pt-4  " >
  <li className="sidbarli">
  <Link to="/student/HomeStudentview" onClick={() => setId(1)} className={`Icon  ${id === "1" ? "Id":" "}`}>الرئيسية</Link>
  </li>
  <li className="sidbarli">
  <Link to="/student/createExam" onClick={() => setId(10)} className={`Icon  ${id === "10" ? "Id":" "}`}>إنشاء الامتحان</Link>
  </li>
  <li className="sidbarli">
  <Link  data-bs-toggle="modal" data-bs-target="#logout" onClick={() => setId(11)} className={`Icon  ${id === "11" ? "Id":" "}`}>تسجيل الخروج</Link>
  </li>

</ul>
</div>





////////////////////teacher//////////////////////////////////////////////////////
:location.pathname.startsWith('/teacher')?<div>keko</div>:""




}
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
          className="btn-secondary cancel-btn DElementCancel mx-1"
          data-bs-dismiss="modal"
        >
          لا
        </button>
        <button
          type="button"
          className="btn btn-danger cancel-btn DElementSave mx-1"
          data-bs-dismiss="modal"
          onClick={()=>{
            logoutStudent()
          }}
        >
          نعم
        </button>
      </div>
    </div>
  </div>
</div>
</div>
            </>
  );
}


export default SidebarFullscreen;
