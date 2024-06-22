import React from 'react'
import Calendar from 'react-calendar'
import "./../home_dashboard.css"
import { Link } from 'react-router-dom'

export default function Calender(props) {
  return (
    <>
     <div className='wrapper_todo_calender mt-3' style={{ backgroundColor: "#4941A6", height: "526.71px", border: "1px #4941A6 solid", borderRadius: "20px " }}>
                <div className='calender' style={{ height: "50%" }}>
                  <Calendar onChange={props.onChange} value={props.date} />
                </div>

                {
                  props.arrayContainer.length > 0 ? 
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
                    <Link data-bs-toggle="modal" data-bs-target="#add-manger-dash" type="submit" className="btn  mx-2 " style={{ backgroundColor: "#FE4F60", color: '#FFFFFF' }}>
                      <span style={{ marginLeft: "10px", backgroundColor: "", width: '', backgroundColor: "" }}><img src={props.plus} alt="" /></span>
                      Add Task</Link>
                  </div>
              </div>

     


              
    
    
    </>
  )
}
