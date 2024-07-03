import React, { useState } from 'react'
import openEmisimage from "./../../assets/image/Group.svg"
import forowrd from "./../../assets/image/Forward.svg"
import SecondTriangle from '../components/SecondTriangl/SecondTriangle';
import FirstTriangle from '../components/FirstTriangle/FirstTriangle';
import { Link, useLocation } from 'react-router-dom';
import MyTable from '../../common/Table/Table';
import TableOpenEmis from '../../common/Table/tableOpenEmis/tableOpenEmes';
import './openEmis.css'


function OpenEmis(props) {
    let location =useLocation()
    const [openEmisAllData,SetopenEmisAllData]=useState([])
    const [editId,SeteditId]=useState('')

    let header = {
        col1: "اسم المستخدم",
        col2: "كلمة المرور",
        col3: " رقم الهاتف ",
        col5: " اسم الصف",
        col6: "اسم المبحث",
        col4: "صورة الدفتر",
        // col7: props.col7 ? "تعديل" : ""
    }
    let icon = {
        edit: props.icon
    }

    if (props.col7) {
        header.col7 = "تعديل";
    }
    let array=[
        {
            name:'mostafa',
            price:"aahme",
            id:"khaled",
            allow_exam:"mkish",
            jsjjh:"ojdi",
            ksdjih:"ksn",
        }
    ]
    



    return (
        <>
            <div className="container pb-4" style={{ overflow: 'auto', marginTop: '18px', direction: 'rtl', border: "2px solid purble", borderRadius: "10px", width: "90%", margin: "auto" ,height:"auto"}}>
              

            <div className='col-12  mt-3 d-flex  ' style={{ alignItems: "center", }}>
                    <div className="" style={{ width: "4.333333%" }}>
                        <img src={openEmisimage} className="img-fluid rounded-circle" alt="صورة شخصية" style={{ width: '16px', height: '16px' }} />
                    </div>
                    <div className='col-6 '>
                        <p style={{ margin: '0', padding: "0", color: "#FFFFFF", fontWeight: "700", fontSize: '24px' }}> إدخال علامات Open Emis
                        </p>
                    </div>
                </div>
                
                <div className='spins  ' style={{ display: "flex" }}>
                    <div className='Frist_tria' onClick={() => {
                        localStorage.setItem('SpinColor', "#4941A6");

                    }}>
                        <Link to="/dashboard/waitingemis">
                            {
                                location.pathname === '/dashboard/waitingemis' ? <FirstTriangle content={"الانتظار"} style={{ backgroundColor: localStorage.getItem("SpinColor") }} /> :
                                <FirstTriangle content={"الانتظار"} style={{ backgroundColor: "#1D195D" }} />
                            }
                        </Link>
                    </div>


                    <div className='sec_tri' onClick={() => {
                        localStorage.setItem('SpinColor', "#4941A6");

                    }}>
                        <div className='wraber_student_div' style={{ transform: " translate(25px, -3px)" }}>
                            <Link to="/dashboard/recivedemis">

                                {
                                    location.pathname === '/dashboard/recivedemis' ?
                                    <SecondTriangle stylep={{color:"#ffff"}} content={"المستلمه"} style={{ backgroundColor: localStorage.getItem("SpinColor") }} /> :
                                    <SecondTriangle stylep={{color:"#ffff"}} content={"المستلمه"} style={{ backgroundColor: "#1D195D" }} />
                                }
                            </Link>
                        </div>
                    </div>


                    <div className='sec_tri' onClick={() => {
                        localStorage.setItem('SpinColor', "#4941A6");

                    }}>
                        <div className='third_wraber_div' style={{ transform: " translate(48px, -3px)" }}>
                            <Link to="/dashboard/finishedEmis">

                                {
                                    location.pathname === '/dashboard/finishedEmis' ?
                                    <SecondTriangle stylep={{color:"#ffff"}} content={"المنتهية"} style={{ backgroundColor: localStorage.getItem("SpinColor") }} /> :
                                    <SecondTriangle stylep={{color:"#ffff"}} content={"المنتهية"} style={{ backgroundColor: "#1D195D" }} />
                                }
                            </Link>
                        </div>
                    </div>
                </div>



            

                <div className='col-12 mt-2'>
                    <div style={{ width: "200px", height: "27px", backgroundColor: '#FF7380', borderRadius: '112px', display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div>
                            <p style={{ margin: "0", padding: "0", color: "#000000", fontSize: "14px" }}>تحميل بيانات دفتر العلامات</p>
                        </div>
                        <div style={{ marginRight: "20px" }}>
                            <img src={forowrd} alt="fowrword" />
                        </div>
                    </div>
                </div>


                {location.pathname === '/dashboard/finishedEmis' ? 

              <div className='mt-4'>

                <button className='btn btn-outline-dark' style={{color:"#A6A0F4"}} onClick={props.checkallFn}>
                    تحديد الكل 
                </button>

                <button  className='btn btn-outline-danger' data-bs-target={props.deleteModalFinished}                   data-bs-toggle="modal"
               style={{marginRight:"20px"}}>
                    حذف المحدد

                </button>




              </div>
                
                : ""}






                <div className='mt-3'>
                    <TableOpenEmis header={header} body={props.dataRender} icons={icon} flag={props.flag}
                    editButtonName={props.edit}
                    //  delteModalName={props.delete}
                      handel={props.handel} 

                      checkboxHandler={props.checkboxHandler}
                      dataCheckedRender={props.dataCheckedRender}
                      checkallFn={props.checkAllHandler}
                    //    Deletehandel={props.Deletehandel}
                    

                       />
                </div>
                


                <div
                    style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        height: " 74px",
                        alignItems: "center",
                    }}
                    className="footer-manger"
                >
                    <button 
                    type='button'

                    onClick={()=>props.next()}
                        style={{
                            backgroundColor: props.totalPages===props.current_page ? "#120E4D":"#4941A6",
                            height: "26px",
                            width: "26px",
                            display: "flex",
                            fontSize: "18px",
                            fontWeight: "700",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "none",
                        }}
                    >
                        <p style={{ margin: "0", color: "white" }}>&gt;</p>
                    </button>
                    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          {Array.from({ length: props.totalPages }, (_, i) => (
            <div
              key={i}
              style={{
                backgroundColor:  props.current_page === i + 1 ? "#4941A6 " : "#120E4D",
                height: "26px",
                width: "26px",
                display: "flex",
                fontSize: "18px",
                fontWeight: "700",
                alignItems: "center",
                justifyContent: "center",
                margin: "2px", // Added margin for better visual spacing
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>
                    <button
                    type='button'
                    onClick={()=>props.handelPrev()}
                        style={{
                            marginLeft: "5px",
                            backgroundColor: props.current_page ===1? "#120E4D":"#4941A6",
                            height: "26px",
                            width: "26px",
                            display: "flex",
                            fontSize: "18px",
                            fontWeight: "700",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "none",
                        }}
                    >
                        <p style={{ margin: "0", color: "white" }}>&lt;</p>
                    </button>
                </div>









            </div>
        </>)
}
export default OpenEmis;