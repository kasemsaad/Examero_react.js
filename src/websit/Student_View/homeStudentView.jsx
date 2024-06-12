// import MyButton from "../../common/Button/Button";
import Calendar from "react-calendar";
import Homeicon from "../../assets/icons/home_student_view/majesticons_home-line copy.svg";
import { Link } from 'react-router-dom';
import './homeStudentView.css'
import React from 'react'
import "../../dashboard/Home_Dashboard/home_dashboard.css"

import { useSelector } from 'react-redux';

function HomeStudentview(props){
    const layoutBackground = useSelector((state)=>state.dark.lay)
return(
    <>
    <div className="container py-5 d-flex align-items-center justify-content-center flex-column">
        <div className=" " style={{width:"85%", paddingTop:"4.25px"}}>
            <img className="" src={Homeicon} alt="HomeIcon" style={{ backgroundColor: "transparent" }} /> 
            {/* <MyButton className="btn mx-2 fontSizeBtn py-0 rounded-5 py- px-3" style={{ height: "1.8rem", backgroundColor: "#FF4C4C", color: "#ffff" }} to={"/Home"} content={"باقات الاشتراك"} /> */}
            <Link 
  className="btn" 
  to="#"  // Replace '#' with a valid route path like '/home' or '/dashboard'
  style={{ 
    backgroundColor: "transparent", 
    color: layoutBackground === "#0E0A43" ? "white" : "#0E0A43", 
    fontSize: "18px" 
  }}
>        الرئيسية</Link>
        </div>
      <div className=" row m-0 pt-5 Bold" style={{width:"88%", paddingTop:"4.25px"}}>
        <div className="row pt-2 m-0 col-md-8   d-flex align-items-start justify-content-between">
            <div className="  rounded-4 shadow-box" style={{backgroundColor:"#4941A6"}}>
           <p>عدد الامتحانات المستخدمة </p>
           <p className="fs-6">17</p>
            </div>
            <div className="  rounded-4 shadow-box" style={{backgroundColor:"#C01F59"}}> 
           <p>عدد الامتحانات المتبقية</p>
           <p className="fs-6">2</p>
         
            </div>
            <div className="   rounded-4 shadow-box" style={{backgroundColor:"#C17011"}}>
           <p>متوسط الدرجات</p>
           <p className="fs-6">70%</p>
            </div>
        <div className="row  pt-4 mt-4 p-0 m-0 my-3 rounded-4" style={{width:"100%",height:"14rem", backgroundColor:"#4941A6"}}>
         <div className="col-7">
         <Link 
  className="btn rounded-5 px-5 py-1" 
  to="#"  // Replace '#' with a valid route path like '/home' or '/dashboard'
  style={{ 
    backgroundColor: layoutBackground === "#0E0A43" ? "#1D195D" : "white", 
    color: layoutBackground === "#0E0A43" ? "#C01F59" : "black", 
    fontSize: "18px" 
  }}
>        رسالة اليوم</Link>
            <p className="p-3 pt-4">“ ينقسم الفاشِلون إلى نصفين: هؤلاء الذين يُفكرون ولا يعملون، وهؤلاء الذين يَعملون ولا يُفكرون أبدًا. “</p>
         
         </div>
         <div className="col-4 mb-4 boxday" >
         </div>
        </div>
        </div>
        <div className="col-md-4   d-flex align-items-center justify-content-center flex-colmun">
        <div className='wrapper_todo_calender mt-3' style={{ backgroundColor: "#4941A6", height: "526.71px", border: "1px #4941A6 solid", borderRadius: "20px " }}>
                <div className='calender' style={{ height: "50%" }}>
                  <Calendar onChange={props.onChange} value={props.date} />
                </div>

                {
                    
                 3 > 0 ? 
                <div className='mt-4 todo_app_wrapper' style={{ backgroundColor: " ", height: "30vh", paddingBottom: "0px", overflow: "auto" }}>
                  <div className='todo_app' style={{ overflow: "auto" }}>

                    <div className="mb-3 mt-2 change_width_in_sm" style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
                      <div className='input_contain_value'>
                        <input width="50px" type="email" className="form-control" id="TASK" aria-describedby="emailHelp" value={"دون ملاحظتك"} readOnly />
                      </div>
                      <div className='wraber_delete' style={{ backgroundColor: "#1D195D", width: "2vw", height: "2vw", borderRadius: "8px", textAlign: "center" }}>
                        <img src={props.delet} alt="" width={"17px"} height={"17px"} style={{ marginTop: "6px" }} />
                      </div>
                      <div className='wraber_delete' style={{ backgroundColor: "#4941A6", width: "2vw", height: "2vw", borderRadius: "8px", textAlign: "center", boxShadow: 'rgba(0, 0, 0, 0.75) -2px 3px 5px 0px', }}>
                        <img src={props.edit} alt="" style={{ marginTop: "6px" }} />
                      </div>
                    </div>
                  </div>
                </div>

    : "" }
      <div style={{ textAlign: "center", display: 'flex', justifyContent: "center",marginTop:"10px" }}>
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="submit" className="btn  mx-2 " style={{ backgroundColor: "#FE4F60", color: '#FFFFFF' }}>
                      <span style={{ marginLeft: "10px", backgroundColor: "", width: '', backgroundColor: "" }}><img src={props.plus} alt="" /></span>
                      Add Task</button>
                  </div>
              </div>

     

        </div>
            
      </div>
    </div>
    </>
)
} 
export default HomeStudentview;