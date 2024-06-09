import React, { useState } from 'react'
import "./home_dashboard.css"
import main from "./../../assets/image/Vector (2).svg"
import tringle from "./../../assets/image/Intersect (4).svg"
import sec_tringle from "./../../assets/image/Intersect (5).svg"
import exam from "./../../assets/image/exam-time 1.svg"
import map from "./../../assets/image/Untitled-1 copy-01 1.svg"
import test from "./../../assets/image/Test.svg"
import test2 from "./../../assets/image/Test.svg"
import deadline from "./../../assets/image/Test (1).svg"
import purble_intersect from "./../../assets/image/Intersect (6).svg"
import sec_purble_intersect from "./../../assets/image/Intersect (7).svg"
import sec_yellow_intersect from "./../../assets/image/Intersect (8).svg"
import yellow_intersect from "./../../assets/image/Intersect (9).svg"
import student from "./../../assets/image/Vector (3).svg"
import owner from "./../../assets/image/Vector (4).svg"
import achives from "./../../assets/image/la_gifts.svg"
import plus from "./../../assets/image/+.svg"


import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import delet from "./../../assets/image/fluent_delete-12-regular.svg"
import edit from "./../../assets/image/uil_edit.svg"
import Calender from './Calender/calender'







export default function Home_dashboard() {
  const [date, setDate] = useState(new Date());

  const [formData, setFormData] = useState({ title: "", note: "" });
  const [arrayContainer, setContainer] = useState([]);

  const handleNotes = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContainer(() => [...arrayContainer, formData]);
  };


  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <>
      <div className="container " style={{ overflow: 'auto', marginTop: '18px', direction: 'rtl', height: 'auto', border: "2px solid purble", borderRadius: "10px", width: "90%", margin: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>

          <div className="col-xl-8 col-md-12  ">
            <div className='col-12  mt-3 d-flex' style={{ alignItems: "center", }}>
              <div className="" style={{ width: "7.333333%" }}>
                <img src={main} className="img-fluid rounded-circle" alt="صورة شخصية" style={{ width: '16px', height: '16px' }} />
              </div>
              <div className='col-1'>
                <p style={{ margin: '0', padding: "0", color: "#FFFFFF", fontWeight: "700", fontSize: '24px' }}>الرئيسية</p>
              </div>
            </div>
            {/* end of main and الرئيسيه  */}
            {/* bg-info */}
            <div className=' mt-3 ' style={{ display: "flex", textAlign: "center", justifyContent: 'space-between', flexWrap: "wrap" }}>
              {/* this first div purple which will repeated */}
              <div className='col-sm-11 box_of_book' style={{ height: "148px", width: "174px", borderRadius: "17.18px", backgroundColor: '#4941A6', position: 'relative' }}>
                <div style={{ position: "absolute", top: "0", right: "0" }}>
                  <img src={tringle} className="" alt="صورة شخصية" style={{ width: '53.83px', height: '57.62px' }} />
                </div>

                <div style={{ position: "absolute", bottom: "0", left: "0" }}>
                  <img src={sec_tringle} className="" alt="صورة شخصية" style={{ width: '66.42px', height: '61.84px' }} />
                </div>

                <div style={{ width: "100%", textAlign: "center", display: 'flex', justifyContent: "center", paddingTop: '5px' }}>
                  <div style={{ width: "40px", height: "40px", backgroundColor: "#1D195D", borderRadius: "50%", textAlign: "center", position: "relative" }}>
                    <img src={exam} className="" alt="صورة شخصية" style={{ paddingTop: "7px" }} />
                  </div>
                </div>


                <div style={{ textAlign: "center", position: "relative" }}>

                  <p style={{ padding: "0", margin: "0", marginTop: "4px", fontWeight: "700", fontSize: "12px" }}>عدد الامتحانات التي تم </p>
                  <p style={{ marginTop: "4px", fontWeight: "700", fontSize: "12px" }}>انشاءها من قبل المعلم</p>
                  <div style={{ position: "absolute", zIndex: '10', textAlign: "center", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

                    <div style={{ backgroundColor: "#1D195D", width: "7vw", height: '22.9px', borderRadius: '22.9px' }}>
                      <p style={{ margin: '0', padding: "0" }}>123</p>
                    </div>
                    {/* <button className='btn btn-info'>mosytaf</button> */}
                  </div>
                </div>
              </div>

              <div className='box_of_book' style={{ height: "148px", width: "174px", borderRadius: "17.18px", backgroundColor: '#C01F59', position: 'relative' }}>
                <div style={{ position: "absolute", top: "0", right: "0" }}>
                  <img src={purble_intersect} className="" alt="صورة شخصية" style={{ width: '53.83px', height: '57.62px' }} />
                </div>

                <div style={{ position: "absolute", bottom: "0", left: "0" }}>
                  <img src={sec_purble_intersect} className="" alt="صورة شخصية" style={{ width: '66.42px', height: '61.84px' }} />
                </div>

                <div style={{ width: "100%", textAlign: "center", display: 'flex', justifyContent: "center", paddingTop: '5px' }}>
                  <div style={{ width: "40px", height: "40px", backgroundColor: "#1D195D", borderRadius: "50%", textAlign: "center", position: "relative" }}>
                    <img src={exam} className="" alt="صورة شخصية" style={{ paddingTop: "7px" }} />
                  </div>
                </div>


                <div style={{ textAlign: "center", position: "relative" }}>

                  <p style={{ padding: "0", margin: "0", marginTop: "4px", fontWeight: "700", fontSize: "12px" }}>عدد الامتحانات التي تم </p>
                  <p style={{ marginTop: "4px", fontWeight: "700", fontSize: "12px" }}>انشاءها من قبل المعلم</p>
                  <div style={{ position: "absolute", zIndex: '10', textAlign: "center", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

                    <div style={{ backgroundColor: "#1D195D", width: "7vw", height: '22.9px', borderRadius: '22.9px' }}>
                      <p style={{ margin: '0', padding: "0" }}>123</p>
                    </div>
                    {/* <button className='btn btn-info'>mosytaf</button> */}
                  </div>
                </div>
              </div>

              <div className='box_of_book' style={{ height: "148px", width: "174px", borderRadius: "17.18px", backgroundColor: '#C17011', position: 'relative' }}>
                <div style={{ position: "absolute", top: "0", right: "0" }}>
                  <img src={sec_yellow_intersect} className="" alt="صورة شخصية" style={{ width: '53.83px', height: '57.62px' }} />
                </div>

                <div style={{ position: "absolute", bottom: "0", left: "0" }}>
                  <img src={yellow_intersect} className="" alt="صورة شخصية" style={{ width: '66.42px', height: '61.84px' }} />
                </div>

                <div style={{ width: "100%", textAlign: "center", display: 'flex', justifyContent: "center", paddingTop: '5px' }}>
                  <div style={{ width: "40px", height: "40px", backgroundColor: "#1D195D", borderRadius: "50%", textAlign: "center", position: "relative" }}>
                    <img src={test} className="" alt="صورة شخصية" style={{ paddingTop: "9px" }} />
                  </div>
                </div>


                <div style={{ textAlign: "center", position: "relative" }}>

                  <p style={{ padding: "0", margin: "0", marginTop: "4px", fontWeight: "700", fontSize: "12px" }}>عدد الامتحانات التي تم </p>
                  <p style={{ marginTop: "4px", fontWeight: "700", fontSize: "12px" }}>انشاءها من قبل المعلم</p>
                  <div style={{ position: "absolute", zIndex: '10', textAlign: "center", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

                    <div style={{ backgroundColor: "#1D195D", width: "7vw", height: '22.9px', borderRadius: '22.9px' }}>
                      <p style={{ margin: '0', padding: "0" }}>123</p>
                    </div>
                    {/* <button className='btn btn-info'>mosytaf</button> */}
                  </div>
                </div>
              </div>

              <div className='mt-2 box_of_book' style={{ height: "148px", width: "174px", borderRadius: "17.18px", backgroundColor: '#4941A6', position: 'relative' }}>
                <div style={{ position: "absolute", top: "0", right: "0" }}>
                  <img src={tringle} className="" alt="صورة شخصية" style={{ width: '53.83px', height: '57.62px' }} />
                </div>

                <div style={{ position: "absolute", bottom: "0", left: "0" }}>
                  <img src={sec_tringle} className="" alt="صورة شخصية" style={{ width: '66.42px', height: '61.84px' }} />
                </div>

                <div style={{ width: "100%", textAlign: "center", display: 'flex', justifyContent: "center", paddingTop: '5px' }}>
                  <div style={{ width: "40px", height: "40px", backgroundColor: "#1D195D", borderRadius: "50%", textAlign: "center", position: "relative" }}>
                    <img src={test2} className="" alt="صورة شخصية" style={{ paddingTop: "9px" }} />
                  </div>
                </div>


                <div style={{ textAlign: "center", position: "relative" }}>

                  <p style={{ padding: "0", margin: "0", marginTop: "4px", fontWeight: "700", fontSize: "12px" }}>عدد الامتحانات التي تم </p>
                  <p style={{ marginTop: "4px", fontWeight: "700", fontSize: "12px" }}>انشاءها من قبل المعلم</p>
                  <div style={{ position: "absolute", zIndex: '10', textAlign: "center", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

                    <div style={{ backgroundColor: "#1D195D", width: "7vw", height: '22.9px', borderRadius: '22.9px' }}>
                      <p style={{ margin: '0', padding: "0" }}>123</p>
                    </div>
                    {/* <button className='btn btn-info'>mosytaf</button> */}
                  </div>
                </div>
              </div>


              <div className='mt-2 box_of_book' style={{ height: "148px", width: "174px", borderRadius: "17.18px", backgroundColor: '#C01F59', position: 'relative' }}>
                <div style={{ position: "absolute", top: "0", right: "0" }}>
                  <img src={purble_intersect} className="" alt="صورة شخصية" style={{ width: '53.83px', height: '57.62px' }} />
                </div>

                <div style={{ position: "absolute", bottom: "0", left: "0" }}>
                  <img src={sec_purble_intersect} className="" alt="صورة شخصية" style={{ width: '66.42px', height: '61.84px' }} />
                </div>

                <div style={{ width: "100%", textAlign: "center", display: 'flex', justifyContent: "center", paddingTop: '5px' }}>
                  <div style={{ width: "40px", height: "40px", backgroundColor: "#1D195D", borderRadius: "50%", textAlign: "center", position: "relative" }}>
                    <img src={deadline} className="" alt="صورة شخصية" style={{ paddingTop: "7px" }} />
                  </div>
                </div>


                <div style={{ textAlign: "center", position: "relative" }}>

                  <p style={{ padding: "0", margin: "0", marginTop: "4px", fontWeight: "700", fontSize: "12px" }}>عدد الامتحانات التي تم </p>
                  <p style={{ marginTop: "4px", fontWeight: "700", fontSize: "12px" }}>انشاءها من قبل المعلم</p>
                  <div style={{ position: "absolute", zIndex: '10', textAlign: "center", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

                    <div style={{ backgroundColor: "#1D195D", width: "7vw", height: '22.9px', borderRadius: '22.9px' }}>
                      <p style={{ margin: '0', padding: "0" }}>123</p>
                    </div>
                    {/* <button className='btn btn-info'>mosytaf</button> */}
                  </div>
                </div>
              </div>


              <div className='mt-2 box_of_book' style={{ height: "148px", width: "174px", borderRadius: "17.18px", backgroundColor: '#4941A6', position: 'relative' }}>
                <div style={{ position: "absolute", top: "0", right: "0" }}>
                  <img src={tringle} className="" alt="صورة شخصية" style={{ width: '53.83px', height: '57.62px' }} />
                </div>

                <div style={{ position: "absolute", bottom: "0", left: "0" }}>
                  <img src={sec_tringle} className="" alt="صورة شخصية" style={{ width: '66.42px', height: '61.84px' }} />
                </div>

                <div style={{ width: "100%", textAlign: "center", display: 'flex', justifyContent: "center", paddingTop: '5px' }}>
                  <div style={{ width: "40px", height: "40px", backgroundColor: "#1D195D", borderRadius: "50%", textAlign: "center", position: "relative" }}>
                    <img src={exam} className="" alt="صورة شخصية" style={{ paddingTop: "7px" }} />
                  </div>
                </div>


                <div style={{ textAlign: "center", position: "relative" }}>

                  <p style={{ padding: "0", margin: "0", marginTop: "4px", fontWeight: "700", fontSize: "12px" }}>عدد الامتحانات التي تم </p>
                  <p style={{ marginTop: "4px", fontWeight: "700", fontSize: "12px" }}>انشاءها من قبل المعلم</p>
                  <div style={{ position: "absolute", zIndex: '10', textAlign: "center", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

                    <div style={{ backgroundColor: "#1D195D", width: "7vw", height: '22.9px', borderRadius: '22.9px' }}>
                      <p style={{ margin: '0', padding: "0" }}>123</p>
                    </div>
                    {/* <button className='btn btn-info'>mosytaf</button> */}
                  </div>
                </div>
              </div>

            </div>





            <div className='map  col-12' style={{ width: "100%", height: "auto", margin: "auto", marginTop: "30px" }}>
              <div className='col-8' style={{ margin: "auto" }}>
                <img src={map} className="img-fluid w-100" alt=" شخصية" />
              </div>
            </div>

          </div>






          <div className="col-xl-3 wraber_123 " style={{ marginTop: "64px", overflow: "hidden" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>

              <div className='labels_123'>
                <div style={{ position: 'relative', height: "30px", backgroundColor: '#0E0A43', border: "1px solid #4941A6", borderRadius: '9.65px' }}>
                  <p style={{ margin: "0", direction: "ltr", paddingLeft: "2vw", paddingTop: "0.3vw", color: "#A6A0F4" }}>123</p>
                  <div className='layer_owner' style={{ position: "absolute", top: "0", right: '0', width: "8vw", height: "30px", backgroundColor: "#4941A6", borderRadius: '9.65px' }}>

                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: "5px", top: "0.3vw", display: "flex", alignItems: "center" }}>
                        <p style={{ margin: "0", top: "0", direction: 'ltr', fontSize: "10px", fontWeight: '500', paddingTop: "2px", marginLeft: "10px", color: "#FFFFFF" }}>عدد المديرين</p>
                      </div>
                    </div>

                    <div style={{ position: "relative" }}>
                      <div className='layer_friends' style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        width: "2vw",
                        height: "30px",
                        backgroundColor: "#4941A6",
                        borderRadius: "9.65px",
                        overflow: "hidden",
                        // borderLeft:"1px solid white",
                        boxShadow: 'rgba(0, 0, 0, 0.75) -2px 3px 5px 0px',
                        textAlign: "center"
                      }}>
                        <img src={student} className="" alt=" شخصية" />
                      </div>

                    </div>

                  </div>

                </div>

                <div className='mt-3' style={{ position: 'relative', height: "30px", backgroundColor: '#0E0A43', border: "1px solid #C01F59", borderRadius: '9.65px' }}>
                  <p style={{ margin: "0", direction: "ltr", paddingLeft: "2vw", paddingTop: "0.3vw", color: "#FE4F60" }}>123</p>
                  <div className='layer_owner' style={{ position: "absolute", top: "0", right: '0', width: "8vw", height: "30px", backgroundColor: "#C01F59", borderRadius: '9.65px' }}>

                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: "5px", top: "0.3vw", display: "flex", alignItems: "center" }}>
                        <p style={{ margin: "0", top: "0", direction: 'ltr', fontSize: "10px", fontWeight: '500', paddingTop: "2px", marginLeft: "10px", color: "#FFFFFF" }}>عدد المشرفين</p>
                      </div>
                    </div>

                    <div style={{ position: "relative" }}>
                      <div className='layer_friends' style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        width: "2vw",
                        height: "30px",
                        backgroundColor: "#C01F59",
                        borderRadius: "9.65px",
                        overflow: "hidden",
                        // borderLeft:"1px solid white",
                        boxShadow: 'rgba(0, 0, 0, 0.75) -2px 3px 5px 0px',
                        textAlign: "center"
                      }}>
                        <img src={owner} className="" alt=" شخصية" style={{ paddingTop: "3px" }} />
                      </div>

                    </div>

                  </div>

                </div>

                <div className='mt-3' style={{ position: 'relative', height: "30px", backgroundColor: '#0E0A43', border: "1px solid #FF8A00", borderRadius: '9.65px' }}>
                  <p style={{ margin: "0", direction: "ltr", paddingLeft: "2vw", paddingTop: "0.3vw", color: "#C17011" }}>123</p>
                  <div className='layer_owner' style={{ position: "absolute", top: "0", right: '0', width: "8vw", height: "30px", backgroundColor: "#C17011", borderRadius: '9.65px' }}>

                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: "5px", top: "0.3vw", display: "flex", alignItems: "center" }}>
                        <p style={{ margin: "0", top: "0", direction: 'ltr', fontSize: "10px", fontWeight: '500', paddingTop: "2px", marginLeft: "10px", color: "#FFFFFF" }}>عدد المعلمين</p>
                      </div>
                    </div>

                    <div style={{ position: "relative" }}>
                      <div className='layer_friends' style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        width: "2vw",
                        height: "30px",
                        backgroundColor: "#C17011",
                        borderRadius: "9.65px",
                        overflow: "hidden",
                        // borderLeft:"1px solid white",
                        boxShadow: 'rgba(0, 0, 0, 0.75) -2px 3px 5px 0px',
                        textAlign: "center"
                      }}>
                        <img src={student} className="" alt=" شخصية" />
                      </div>

                    </div>

                  </div>

                </div>

                <div className='mt-3' style={{ position: 'relative', height: "30px", backgroundColor: '#0E0A43', border: "1px solid #FE4F60", borderRadius: '9.65px' }}>
                  <p style={{ margin: "0", direction: "ltr", paddingLeft: "2vw", paddingTop: "0.3vw", color: "#FE4F60" }}>123</p>
                  <div className='layer_owner' style={{ position: "absolute", top: "0", right: '0', width: "8vw", height: "30px", backgroundColor: "#FE4F60", borderRadius: '9.65px' }}>

                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: "5px", top: "0.3vw", display: "flex", alignItems: "center" }}>
                        <p style={{ margin: "0", top: "0", direction: 'ltr', fontSize: "10px", fontWeight: '500', paddingTop: "2px", marginLeft: "10px", color: "#FFFFFF" }}>عدد الطلاب</p>
                      </div>
                    </div>

                    <div style={{ position: "relative" }}>
                      <div className='layer_friends' style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        width: "2vw",
                        height: "30px",
                        backgroundColor: "#FE4F60",
                        borderRadius: "9.65px",
                        overflow: "hidden",
                        // borderLeft:"1px solid white",
                        boxShadow: 'rgba(0, 0, 0, 0.75) -2px 3px 5px 0px',
                        textAlign: "center"
                      }}>
                        <img src={student} className="" alt=" شخصية" />
                      </div>

                    </div>

                  </div>

                </div>


                <div className='achive_gift mt-3' style={{ height: "36px", backgroundColor: '#3E369B', border: "1px solid #4941A6", borderRadius: '9.65px', textAlign: "center", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                  <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "80%" }}>
                    <img src={achives} className="" alt=" شخصية" />
                    <p style={{ margin: "0", padding: "0", color: '#FFFFFF', fontWeight: "700" }}>المكافآت والعقوبات</p>
                  </div>
                </div>
                {/* end of first div  */}
              </div>

              <Calender edit={edit}
               Calendar={Calendar}
                onChange={onChange}
                 date={date}
                  delet={delet}
                   plus={plus} 
                   handleNotes={handleNotes}
                   formData={formData}
                   arrayContainer={arrayContainer}

                   
                   />
            </div>
          </div>



          



          {/* end of wrabeer one of container and div which take flex to wrab to div which content i write */}
        </div>
      </div>
      <form action="" onSubmit={(e)=>handleSubmit(e)}>
<div class="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ">
      <input onChange={handleNotes}    width="50px" type="text" className="form-control" id="TASK" name='title'  value={formData.title}  />
      <br />
        <br />
        <input onChange={handleNotes} width="50px" type="text" className="form-control" id="TASK"  name='note' value={formData.note} />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
        <button type="submit" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> 
</form>
    </>
  )
}
