// import MyButton from "../../common/Button/Button";
import { Link } from 'react-router-dom';
import './createExam.css'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import plus from '../../../assets/image/+.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import CreateExamIcon from '../../../assets/icons/Home/wpf_create-new.svg'
import request from '../../../utlis/axios_utils_websit';
// let groupId;
// function onSelect(id) {
//   groupId = id
// }
function CreateExam(props) {
  const getToken = () => { return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3N0dWRlbnRzL2xvZ2luIiwiaWF0IjoxNzE5MDYwNDU5LCJleHAiOjE3MTkwNjQwNTksIm5iZiI6MTcxOTA2MDQ1OSwianRpIjoiQVV1VDFzcE9STFV0TTRaTyIsInN1YiI6IjExIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.szWrq3S7NslwxFgwWe1YBKdJFc_JWfwBl5zD6MlSR_A"; };
  const layoutBackground = useSelector((state) => state.dark.lay);
  
  //////////////////////////Get All Note///////////////////////////////////////////////////
  // const [privousExams, setPrivousExams] = useState("");
  const [AllGroup, setAllGroup] = useState("");
  const [AllSubject, setAllSubject] = useState("");
  const [AllUnit, setAllUnit] = useState("");
  const [AllLesson, setAllLesson] = useState("");
  useEffect(() => {
    // First API call to get all groups
    request({
      url: '/students/groups/selection',
      method: 'get',
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    })
    .then(response => {
      setAllGroup(response.data.data);
    })
    .catch(error => {
      console.error("Error fetching groups data:", error);
    });
    
  }, []); // Only runs once when the component mounts
  /////////////////المبحث////////////////////
 const getSubject=(id)=>{

      request({
        url: `/students/subjects/selection/${id}`,
        method: 'get',
        headers: {
          'Authorization': `Bearer ${getToken()}`
        }
      })
      .then(response => {
        setAllSubject(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching subjects data:", error);
      });
  }
  /////////////////المبحث////////////////////
 const getUnit=(id)=>{

      request({
        url: `/students/units/selection/${id}`,
        method: 'get',
        headers: {
          'Authorization': `Bearer ${getToken()}`
        }
      })
      .then(response => {
        setAllUnit(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching subjects data:", error);
      });
  }
 const getLesson=(id)=>{

      request({
        url: `/students/lessons/selection/${id}`,
        method: 'get',
        headers: {
          'Authorization': `Bearer ${getToken()}`
        }
      })
      .then(response => {
        setAllLesson(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching subjects data:", error);
      });
  }
    

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
          <div className=" rounded-5" style={{ backgroundColor: "#2F2791" }}>
            <p className='p-4 fs-5'>
              <span style={{ color: "#FFA031" }}>          ملحوظة :        </span>
              بالخطة الأولى والثانية يتم فتح الأسئلة بحد أقصى 25 سؤالا ، مع العلم أنه في حالة  اختيار أقل من 25 سؤال يتم احتسابهم كامتحان كامل
            </p>
          </div>
          {/* --------------------add exam-------------------------------- */}
          <div className="  ">


            <button className=" fs-4 rounded-5 p-0 p-1 px-4  my-2  " algin="center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"
              style={{ backgroundColor: "#FE4F60", color: "", width: "", border: "none" }} >
              <img className="p-1 ms-2" src={plus} alt='plus' style={{ backgroundColor: "black", borderRadius: "50%" }} />
              إضافة امتحان
            </button>
            {/* <MyButton className="btn mx-3 py-0" style={{ height: "2.5rem", width:"8rem", color: "white", backgroundColor: "#4941A6" }} to={"/Home"} content={"انشاء حساب"} /> */}


            <div className="collapse" id="collapseExample" >

              <div className="card card-body rounded-5" style={{ backgroundColor: "#1D195D" }}>
                <div className=" d-flex justify-content-start flex-wrap" style={{ width: "100%" }}>
                  <div className="px-2">
                    <label>الصف </label>
                    <Dropdown className='p-0'>
                      <Dropdown.Toggle
                        className='px-5 rounded-5'
                        style={{ color: 'black', backgroundColor: 'white', border: 'none' }}
                        id='dropdown-basic'
                      >
                        إختر الصف
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {Array.isArray(AllGroup) && AllGroup.length > 0 ? (
                          AllGroup.map(({ id, name }) => (
                            <Dropdown.Item
                              key={id}
                              onClick={() => getSubject(id)}
                            >
                              {name}
                            </Dropdown.Item>
                          ))
                        ) : (
                          <Dropdown.Item disabled>لا توجد مجموعات</Dropdown.Item>
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div>
                    <label>المبحث</label>
                    <Dropdown className='p-0'>
                      <Dropdown.Toggle
                        className='px-5 rounded-5'
                        style={{ color: "black", backgroundColor: "white", border: "none" }}
                        id="dropdown-basic"
                      >
                        إختر المبحث
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {Array.isArray(AllSubject) && AllSubject.length > 0 ? (
                          AllSubject.map(({ id, name }) => (
                            <Dropdown.Item
                            key={id}
                            onClick={() => getUnit(id)}
                             >{name}</Dropdown.Item>
                          ))
                        ) : (
                          <Dropdown.Item disabled>لا توجد مجموعات</Dropdown.Item>
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="px-2">
                    <label>الوحدة</label>
                    <Dropdown className=' p-0'>
                      <Dropdown.Toggle className='px-5 rounded-5' style={{ color: "black", backgroundColor: "white", border: "none" }} id="dropdown-basic">
                        إختر الوحدة
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {Array.isArray(AllUnit) && AllUnit.length > 0 ? (
                          AllUnit.map(({ id, name }) => (
                            <Dropdown.Item
                              key={id}
                              onClick={() => getLesson(id)}
                            >
                              {name}
                            </Dropdown.Item>
                          ))
                        ) : (
                          <Dropdown.Item disabled>لا توجد مجموعات</Dropdown.Item>
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="px-2">
                    <label>الدرس</label>
                    <Dropdown className=' p-0'>
                      <Dropdown.Toggle className='px-5 rounded-5' style={{ color: "black", backgroundColor: "white", border: "none" }} id="dropdown-basic2">
                        إختر الدرس
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {Array.isArray(AllLesson) && AllLesson.length > 0 ? (
                          AllLesson.map(({ id, name }) => (
                            <Dropdown.Item
                              key={id}
                              // onClick={() => getLesson(id)}
                            >
                              {name}
                            </Dropdown.Item>
                          ))
                        ) : (
                          <Dropdown.Item disabled>لا توجد مجموعات</Dropdown.Item>
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="px-1">
                    <label>الفصل الدراسي</label>
                    <Dropdown className=' p-0'>
                      <Dropdown.Toggle className='px-4 rounded-5' style={{ color: "black", backgroundColor: "white", border: "none" }} id="dropdown-basic">
                        إختر الفصل الدراسي
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="px-2 d-flex flex-column">
                    <label>مدة الامتحان</label>
                    <input className=' py-2 rounded-5' placeholder='إختر مدة الامتحان'
                      style={{ color: "black", backgroundColor: "white", border: "none" }} id="dropdown-basic" />

                  </div>
                  <div className="px-2">
                    <label> الأسئلة </label>
                    <Dropdown className=' p-0'>
                      <Dropdown.Toggle className='px-5 rounded-5' style={{ color: "black", backgroundColor: "white", border: "none" }} id="dropdown-basic2">
                        إختر الأسئلة
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                </div>
                <div className=" mt-5" dir='ltr'>
                  <button className=' text-bold rounded-4 px-4 py-2' style={{ backgroundColor: "#C01F59", color: "white" }}>إنشاء الامتحان</button>
                </div>
              </div>

            </div>
          </div>
          <div className="  ">
            {/* /////////////////button///////////////////////////////////////////////// */}
            <div className="lineButton " style={{}}>
              <button className=" fs-4 rounded-5 p-0  px-4  my-2" algin="center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample"
                style={{ backgroundColor: "#FE4F60", color: "", width: "", border: "none" }} >
                الامتحان   </button>
            </div>
            {/* <MyButton className="btn mx-3 py-0" style={{ height: "2.5rem", width:"8rem", color: "white", backgroundColor: "#4941A6" }} to={"/Home"} content={"انشاء حساب"} /> */}
            {/* /////////////////endbutton///////////////////////////////////////////////// */}
            {/* /////////////////exam///////////////////////////////////////////////// */}
            <div className="collapse" id="collapseExample2" >

              <div className="card card-body rounded-5" style={{ backgroundColor: "#1D195D" }}>

                <div className=" d-flex align-items-center justify-content-between ">

                  <div className="  d-flex px-3">
                    <h3>السؤال الأول</h3>
                    <button className='me-3  text-bold rounded-3 px-4  ' style={{ border: "none", backgroundColor: "#C01F59", color: "white", height: "2.5rem" }}>علامة السؤال (        )  </button>
                  </div>

                  <div className=" d-flex  align-items-center justify-content-center ">
                    <div className="timerexam p-3  d-flex align-items-center justify-content-center " style={{ border: "2px solid #FFFFFF", borderRadius: "50%", width: "80px", height: "80px" }}>
                      <div className='fontsizexam' style={{ color: "#FE4F60" }}>42 :21</div>
                    </div>
                  </div>

                </div>

                <div>
                  <div className="">

                    <li className='bulits fontsizexam py-2'>كم عدد سور القران الكريم ؟ </li>

                    <div className='pt-2  pe-4 py-3'>
                      <input className='stylecheckbox ms-3' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                      <label className='btn rounded-3 px-4' style={{ color: "white", border: "2px solid #C01F59" }} for="vehicle1">   114  سورة </label>
                    </div>

                    <div className='pt-2  pe-4 py-3'>
                      <input className='stylecheckbox ms-3' type="checkbox" id="vehicle2" name="vehicle2" value="Bike" />
                      <label className='btn rounded-3 px-4' style={{ color: "white", border: "2px solid #C01F59" }} for="vehicle2">   113  سورة </label>
                    </div>

                    <div className='pt-2  pe-4 py-3'>
                      <input className='stylecheckbox ms-3' type="checkbox" id="vehicle3" name="vehicle3" value="Bike" />
                      <label className='btn rounded-3 px-4' style={{ color: "white", border: "2px solid #C01F59" }} for="vehicle3">   120  سورة </label>
                    </div>

                    <div className='pt-2  pe-4 py-3'>
                      <input className='stylecheckbox ms-3' type="checkbox" id="vehicle4" name="vehicle4" value="Bike" />
                      <label className='btn rounded-3 px-4' style={{ color: "white", border: "2px solid #C01F59" }} for="vehicle4">   141  سورة </label>
                    </div>



                  </div>
                </div>

                <div className=" mt-5" dir='ltr'>
                  <button className=' text-bold rounded-5 px-4 py-2' style={{ width: "100px", backgroundColor: "#C01F59", color: "white" }}>التالي</button>
                  <button className=' text-bold rounded-5 px-4 py-2' style={{ width: "100px", backgroundColor: "#CDCDCD", color: "black" }}>السابق</button>
                </div>

                <div className=" mt-5 d-flex align-items-center justify-content-center">
                  <button className=' text-bold rounded-4 px-4 py-2' style={{ backgroundColor: "#C01F59", color: "white" }}>تسليم الامتحان</button>
                </div>

              </div>
            </div>

            {/* /////////////////endexam///////////////////////////////////////////////// */}
            {/* ////////////////الوقت  انتهي  ///////////////////////////////////////////////// */}

            <div className="collapse" id="collapseExample2" >

              <div className="card card-body rounded-5" style={{ backgroundColor: "#1D195D" }}>

                <div className=" d-flex align-items-center justify-content-between ">

                  <div className="  d-flex px-3">
                  </div>

                  <div className=" d-flex  align-items-center justify-content-center ">
                    <div className="timerexam p-3  d-flex align-items-center justify-content-center " style={{ border: "2px solid #FFFFFF", borderRadius: "50%", width: "80px", height: "80px" }}>
                      <div className='fontsizexam' style={{ color: "#FE4F60" }}>00:00</div>
                    </div>
                  </div>
                </div>

                <div className=' d-flex align-items-center justify-content-center flex-column' >
                  <i className='fas fa-exclamation text-center' style={{ width: "35px", height: "35px", fontSize: "25px", color: "#FE4F60 ", borderRadius: "50%", border: "4px solid #FE4F60" }}></i>
                  <h2 style={{ color: layoutBackground === "#0E0A43" ? "#FE4F60" : "#4941A6", }}>  الوقت  انتهي  </h2>
                  <h3 style={{ color: layoutBackground === "#0E0A43" ? "white" : "black" }}>قم بإعداد امتحان آخر</h3>
                  <h5><span className='fontsizexam' style={{ color: "#FE4F60" }}>حظ موفق</span></h5>
                </div>

              </div>
            </div>

            {/* -------------------الوقت  انتهي  -------------------------------- */}
            {/* /////////////////تم مراجعة النتائج ///////////////////////////////////////////////// */}

            <div className="collapse" id="collapseExample2" >

              <div className="card card-body rounded-5" style={{ backgroundColor: "#1D195D" }}>

                <div className=" d-flex align-items-center justify-content-between ">

                  <div className="  d-flex px-3">
                  </div>

                  <div className=" d-flex  align-items-center justify-content-center ">
                    <div className="timerexam p-3  d-flex align-items-center justify-content-center " style={{ border: "2px solid #FFFFFF", borderRadius: "50%", width: "80px", height: "80px" }}>
                      <div className='fontsizexam' style={{ color: "#FE4F60" }}>42 :21</div>
                    </div>
                  </div>
                </div>

                <div className=' d-flex align-items-center justify-content-center flex-column' >
                  <i className='fas fa-check-double pt-1 text-center' style={{ width: "40px", height: "40px", fontSize: "29px", color: "#A6A0F4 ", borderRadius: "50%", border: "3px solid #A6A0F4" }}></i>
                  <h2 style={{ color: layoutBackground === "#0E0A43" ? "#FE4F60" : "#4941A6", }}>تم مراجعة النتائج </h2>
                  <h3 style={{ color: layoutBackground === "#0E0A43" ? "white" : "black" }}>حصلت على</h3>
                  <h3><span className='fontsizexam' style={{ color: "white" }}>8</span> /<span className='fontsizexam' style={{ color: "#FE4F60" }}>7</span></h3>
                </div>

              </div>
            </div>

            {/* --------------------تم مراجعة النتائج -------------------------------- */}
          </div>
        </div>

      </div>
    </>
  )
}
export default CreateExam;