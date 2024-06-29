import React from 'react'
import FirstTriangle from '../components/FirstTriangle/FirstTriangle';
import SecondTriangle from '../components/SecondTriangl/SecondTriangle';
import { Link, useLocation } from 'react-router-dom';
import TableReward from '../../common/Table/tableReward/tableReward';
import html2pdf from 'html2pdf.js'; // استيراد مكتبة html2pdf.js


export default function Reward(props) {
    let header = {
        col1: props.TittleName,
        col2: "   رقم الهاتف ",
        col3: "      نقاط المكافأة        ",
        col5: "نقاط العقوبة",
        col6: "  عدد التحذيرات ",
    }

    if(props.teacherTableHead){
        delete header.col5
    }

    const location = useLocation()
    const downloadPDF = () => {
        console.log("kkkkkkkk");
        const element = document.getElementById(props.documenDownlowd);
        html2pdf().from(element).save('reward.pdf');
    }

    return (
        <>
            <div className="container  pb-4" style={{ overflow: 'auto', marginTop: '18px', direction: 'rtl', border: "2px solid purble", borderRadius: "10px", width: "90%", margin: "auto", height: "auto" }}>

                <div className=" modal-header mt-4" >
                    <h5 style={{ color: '#FF8A00', margin: "auto" }} className="modal-title" id="exampleModalLabel">المكافآت والعقوبات</h5>
                </div>
                <div style={{ width: "100%", height: "10px", borderBottom: "1px solid #A6A0F4", margin: "auto" }}>
                </div>


                <div className='spins  ' style={{ display: "flex" }}>
                    <div className='Frist_tria' onClick={() => {
                        localStorage.setItem('SpinColor', "#4941A6");

                    }}>
                        <Link to="/dashboard/rewardManger">
                            {
                                location.pathname === '/dashboard/rewardManger' ? <FirstTriangle content={"المديرين"} style={{ backgroundColor: localStorage.getItem("SpinColor") }} /> :
                                    <FirstTriangle content={"المديرين"} style={{ backgroundColor: "#1D195D" }} />
                            }
                        </Link>
                    </div>


                    <div className='sec_tri' onClick={() => {
                        localStorage.setItem('SpinColor', "#4941A6");

                    }}>
                        <div className='wraber_student_div' style={{ transform: " translate(25px, -3px)" }}>
                            <Link to="/dashboard/rewardSupervisor">

                                {
                                    location.pathname === '/dashboard/rewardSupervisor' ?
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
                            <Link to="/dashboard/rewardteacher">

                                {
                                    location.pathname === '/dashboard/rewardteacher' ?
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
                    <button className='btn btn-outline-danger'
                        data-bs-target={props.deleteModalFinished}
                        data-bs-toggle="modal"
                        style={{ marginRight: "20px" }}>  حذف المحدد
                    </button>
                </div>
                <div className='mt-2' id={props.documenDownlowd}>
                    <TableReward header={header}
                        body={props.dataRender}
                        flag={props.flag}
                        checkboxHandler={props.checkboxHandler}
                        dataCheckedRender={props.dataCheckedRender}
                        checkallFn={props.checkAllHandler}
                        flagAdmin={props.flagAdmin}

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

                        onClick={() => props.next()}
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
                        type='button'
                        onClick={() => props.handelPrev()}
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


            <div className="" style={{ display: "flex", alignItems: 'center', justifyContent: "center" }}>
                <div  style={{ marginLeft: "20px" }}>


                    <button
                    onClick={()=>downloadPDF()}
                    style={{backgroundColor:"#C01F59",color:"#ffff"}}
                        className='btn '
                        type="button"
                    >
                        تحميل
                    </button>
                </div>
                <div>


                    <button
                        className='btn btn-outline-dark'
                        type="button" 
                        style={{color:"#FE4F60"}}
                        >
                        الغاء
                    </button>
                </div>
            </div>









        </>
    )
}


