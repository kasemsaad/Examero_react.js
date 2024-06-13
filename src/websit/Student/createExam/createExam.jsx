// import MyButton from "../../common/Button/Button";
import { Link } from 'react-router-dom';
import './createExam.css'
import React from 'react'
import { useSelector } from 'react-redux';
import CreateExamIcon from '../../../assets/icons/Home/wpf_create-new.svg'
function CreateExam(props) {
  const layoutBackground = useSelector((state) => state.dark.lay)
  return (
    <>
      <div className="container py-5 d-flex align-items-center justify-content-center flex-column">
        <div className=" " style={{ width: "85%", paddingTop: "4.25px" }}>
          <img className="" src={CreateExamIcon} alt="HomeIcon" style={{ backgroundColor: "transparent" }} />
          {/* <MyButton className="btn mx-2 fontSizeBtn py-0 rounded-5 py- px-3" style={{ height: "1.8rem", backgroundColor: "#FF4C4C", color: "#ffff" }} to={"/Home"} content={"باقات الاشتراك"} /> */}
          <Link
            className="btn"
            to="#"  // Replace '#' with a valid route path like '/home' or '/dashboard'
            style={{
              backgroundColor: "transparent",
              color: layoutBackground === "#0E0A43" ? "white" : "#0E0A43",
              fontSize: "18px"
            }}
          >        إنشاء الامتحان للطالب</Link>
        </div>
        <div className=" " style={{ width: "85%", paddingTop: "4.25px" }}>
        <div className=" rounded-5" style={{width:"100%",height:"7rem", backgroundColor:"#2F2791"}}>
          <p className='p-4 fs-5'>
            <span style={{color:"#FFA031"}}>          ملحوظة :        </span>
          بالخطة الأولى والثانية يتم فتح الأسئلة بحد أقصى 25 سؤالا ، مع العلم أنه في حالة  اختيار أقل من 25 سؤال يتم احتسابهم كامتحان كامل 
          </p>
        </div>
        {/* --------------------add exam-------------------------------- */}
      <div className=" d-flex algin-items-center justify-content-start flex-column ">

    
  <button className="btn  rounded-5 p-0 p-1 m Bold text-center " algin="center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" 
  style={{backgroundColor:"#FE4F60", width:"20%"}} >
    إضافة امتحان
  </button>
  {/* <MyButton className="btn mx-3 py-0" style={{ height: "2.5rem", width:"8rem", color: "white", backgroundColor: "#4941A6" }} to={"/Home"} content={"انشاء حساب"} /> */}


<div className="collapse" id="collapseExample" >
  <div className="card card-body" style={{backgroundColor:"#1D195D"}}>
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>
      </div>
        {/* --------------------end add exam-------------------------------- */}
      </div>

      </div>
    </>
  )
}
export default CreateExam;