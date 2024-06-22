import React, { useEffect, useState } from 'react'
import TablePlan from '../../common/Table/Table'
import plansLogo from "./../../assets/image/fluent_payment-32-regular.svg"
import plus from "./../../assets/image/+.svg"
import FirstTriangle from '../components/FirstTriangle/FirstTriangle'
import SecondTriangle from '../components/SecondTriangl/SecondTriangle'
import './Plans.css'
import Api_Dashboard from '../interceptor/interceptorDashboard'
import { Link, useLocation } from 'react-router-dom'

export default function Plans(props) {
    const [colorSpin, SetColorSpin] = useState('grey')
    const location = useLocation()
    let header = {
        col1: "اسم الباقه",
        col2: "السعر",
        col3: "الامتحانات المتاحه ",
        col5: "الاسئله المتاحه",
        col6: "الحاله",
        col4: "الخصائص",
    }
    let icon = {
        trash: true,
        edit: true
    }


    return (
        <>

            <div className="container  pb-4 " style={{ overflow: 'auto', marginTop: '18px', direction: 'rtl', height: '100vh', border: "2px solid purble", borderRadius: "10px", width: "90%", margin: "auto" }}>

                <div className='col-12  mt-3 d-flex ' style={{ alignItems: "center", }}>
                    <div className="" style={{ width: "5.333333%" }}>
                        <img src={plansLogo} className="img-fluid rounded-circle" alt="صورة شخصية" />
                    </div>
                    <div className='col-6'>
                        <p style={{ margin: '0', padding: "0", color: "#FFFFFF", fontWeight: "700", fontSize: '24px' }}>باقات الاشتراك</p>
                    </div>
                </div>


                <div className='spins  ' style={{ display: "flex" }}>
                    <div className='Frist_tria' onClick={() => {
                        localStorage.setItem('SpinColor', "#4941A6");

                    }}>
                        <Link to="/dashboard/PlansTeacher">
                            {
                                location.pathname === '/dashboard/PlansTeacher' ? <FirstTriangle content={"المعلمين"} style={{ backgroundColor: localStorage.getItem("SpinColor") }} /> :
                                <FirstTriangle content={"المعلمين"} style={{ backgroundColor: "#1D195D" }} />
                            }
                        </Link>
                    </div>


                    <div className='sec_tri' onClick={() => {
                        localStorage.setItem('SpinColor', "#4941A6");

                    }}>
                        <div className='wraber_student_div' style={{ transform: " translate(25px, -3px)" }}>
                            <Link to="/dashboard/planstudent">

                                {
                                    location.pathname === '/dashboard/planstudent' ?
                                    <SecondTriangle content={"الطلاب"} style={{ backgroundColor: localStorage.getItem("SpinColor") }} /> :
                                    <SecondTriangle content={"الطلاب"} style={{ backgroundColor: "#1D195D" }} />
                                }
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="wrapper_towbutt mt-4  ">
                    <div className='col-12' style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div>
                            <button className='btn' style={{ backgroundColor: "#FE4F60", height: "30px", borderRadius: "10px", color: "#000000" }}>{props.dataConnect}
                            </button>
                        </div>
                        <div>
                            <button     type="button"
                    data-bs-toggle="modal"
                    data-bs-target={props.nameOfPageModalTarget}
                            
                            className='btn' style={{ backgroundColor: "#C01F59", height: "29px", borderRadius: "10px", color: "#FFFFFF" }}  ><img src={plus} alt="plus" />  إضافة باقه
                            </button>
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <TablePlan header={header} body={props.dataRender} icons={icon} editButtonName={props.edit} delteModalName={props.delete} handel={props.handel}  Deletehandel={props.Deletehandel}/>
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
                        style={{
                            backgroundColor: "#4941A6",
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
                    <button
                        style={{
                            marginLeft: "5px",
                            backgroundColor: "#120E4D",
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
















        </>
    )
}
