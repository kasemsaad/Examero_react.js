import React, { useState } from "react";
import { Link } from "react-router-dom";
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

function Navsmallscreen() {
  const setId = (id) => {
    localStorage.setItem("sidebarId", JSON.stringify(id));
  };
  
  const [toggled , setToggled] = useState(false)
  const ReducerState = useSelector((state)=>state.dark);
  const count = useSelector((state)=>state.dark.counter);

  const dispatch = useDispatch()
  const tog=()=>{
    setToggled(!toggled)
    dispatch({
      type:CHANGE_THEME,
    }
    )
  }
  return (
    <>
    
    <nav className="navbar navbarsidbar  navbar-expand-lg" >
        <div className="container-fluid ">
          <div className="d-flex" style={{alignItems:"center"}}>
          <Link className="navbar-brand" href="#"><img  src={logo} alt="Logo" /></Link>
          <div style={{ backgroundColor: "#0E0A43", width: "1.606rem", height: "1.606rem",
        borderRadius: "50%",  position: "relative", }} >
       <a href="#"> <img src={notifiy}  width="100%"  alt="notifaction"
        style={{paddingBottom: "2px",}}/></a>
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
          <span > <img style={{ width: 20 , height:20 }} src={list_icon} alt="list_icon" /> </span>
          </button>
          <div className="collapse navbar-collapse"   dir="rtl" id="navbarNav">
            <ul className="navbar-nav navbar-nav-small"   dir="ltr" >
              <li className="nav-item " >
                <Link className="nav-link" aria-current="page" to="/log" onClick={() => setId(1)}>الرئيسية
                <img  src={homeIcon} alt="الرئيسية" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/log" onClick={() => setId(2)}>مديرو الموقع
                <img style={{ width: 20 , height:20 }} src={manage_accounts_outline_rounded} alt="مديرو الموقع" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/log" onClick={() => setId(3)}>مشرفو الموقع
                <img style={{ width: 20 , height:20 }} src={account_supervisor_outline} alt="مشرفو الموقع" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/log" onClick={() => setId(4)}>مشرفو الموقع
                <img style={{ width: 20 , height:20 }} src={teacher} alt="المعلمين" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/log" onClick={() => setId(5)}>مشرفو الموقع
                <img style={{ width: 20 , height:20 }} src={octiconIcon} alt="وضع الاسئله" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/log" onClick={() => setId(6)}>بنك الأسئلة
                <img style={{ width: 20 , height:20 }} src={account_supervisor_outline} alt="بنك الأسئلة" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/log" onClick={() => setId(7)}>شهادات التقدير
                <img style={{ width: 23 , height:23 }} src={ph_certificate } alt="شهادات التقدير"  />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/log" onClick={() => setId(8)}>إدخال علامات Open Emis
                <img style={{ width: 20 , height:20 }} src={lucide_file_input } alt="إدخال علامات Open Emis"  />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/log" onClick={() => setId(9)}>جدول المواصفات
                <img style={{ width: 23 , height:23 }} src={tabel} alt="جدول المواصفات"  />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/log" onClick={() => setId(10)}>إنشاء الامتحان
                <img  style={{ width: 18 , height:18 }} src={create_new} alt="إنشاء الامتحان"  />
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-link d-flex" style={{width:"283px", justifyContent:"space-between" ,alignItems:"center"}}   onClick={() => setId(11)}>
                  
                <button style={{marginLeft:"6px", height:"25px"}} className={`toggle-btn ${toggled ? "toggled" : ""}`} onClick={()=>tog()}>
                <span className={toggled ? "white-text" : "whit"}>{toggled ? "On" : "Off"}</span>
           <div className='thumb'></div>
                </button>
                <div>

                 <span>الوضع</span>
                <img  style={{ width: 18 , height:18 }} src={solar_moon_line_duotone} alt="الوضع"  />
                </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/log" onClick={() => setId(11)}>تسجيل الخروج
                <img  style={{ width: 18 , height:18 }} src={iconamoon_exit_light} alt="تسجيل الخروج"  />
                </Link>
              </li>
             
            </ul>
  
          </div>
          <div className="personal_images" style={{ position: 'relative', width: '80%', margin: 'auto', height: '10px' }}>
      <div id="svg_header" style={{ width: '55px', height: '55px', borderRadius: '50%', backgroundColor: 'blue', overflow: 'hidden', position: 'absolute' }}>
        <img style={{ objectFit: 'cover' }} src={personal} width="100%" height="100%" alt="Personal" />
      </div>
    </div>
        </div>
      </nav>     
    </>
  );
}

export default Navsmallscreen;
