import React from 'react'
import FirstTriangle from '../components/FirstTriangle/FirstTriangle';
import SecondTriangle from '../components/SecondTriangl/SecondTriangle';
import { Link, useLocation } from 'react-router-dom';

export default function Reward(props) {
    const location = useLocation()
    return (
        <>
            <div className="container  pb-4" style={{ overflow: 'auto', marginTop: '18px', direction: 'rtl', border: "2px solid purble", borderRadius: "10px", width: "90%", margin: "auto", height: "100vh" }}>

                <div className="modal-header mt-4" >
                    <h5 style={{ color: '#FF8A00', margin: "auto" }} className="modal-title" id="exampleModalLabel">إضافة باقة جديدة</h5>
                </div>
                <div style={{ width: "100%", height: "10px", borderBottom: "1px solid #A6A0F4", margin: "auto" }}>
                </div>


                <div className='spins  ' style={{ display: "flex" }}>
                    <div className='Frist_tria' onClick={() => {
                        localStorage.setItem('SpinColor', "#4941A6");

                    }}>
                        <Link to="/dashboard/waitingemis">
                            {
                                location.pathname === '/dashboard/waitingemis' ? <FirstTriangle content={"المديرين"} style={{ backgroundColor: localStorage.getItem("SpinColor") }} /> :
                                    <FirstTriangle content={"المديرين"} style={{ backgroundColor: "#1D195D" }} />
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
                                        <SecondTriangle stylep={{ color: "#ffff" }} content={"المشرفين"} style={{ backgroundColor: localStorage.getItem("SpinColor") }} /> :
                                        <SecondTriangle stylep={{ color: "#ffff" }} content={"المشرفين"} style={{ backgroundColor: "#1D195D" }} />
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
                                        <SecondTriangle stylep={{ color: "#ffff" }} content={"المعلمين"} style={{ backgroundColor: localStorage.getItem("SpinColor") }} /> :
                                        <SecondTriangle stylep={{ color: "#ffff" }} content={"المعلمين"} style={{ backgroundColor: "#1D195D" }} />
                                }
                            </Link>
                        </div>
                    </div>
                </div>


                <div className='mt-3'>
                    <button className='btn btn-outline-dark' style={{ color: "#A6A0F4" }} onClick={props.checkallFn}>
                        تحديد الكل
                    </button>
                    <button className='btn btn-outline-danger' data-bs-target={props.deleteModalFinished}
                        data-bs-toggle="modal"
                        style={{ marginRight: "20px" }}>  حذف المحدد
                    </button>
                </div>
            </div>


            
          



        </>
    )
}


