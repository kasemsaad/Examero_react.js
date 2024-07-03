import React from 'react'
import Calendar from 'react-calendar'
import "./../home_dashboard.css"
import { Link } from 'react-router-dom'

export default function Calender(props) {
  return (
    <>
     <div className='wrapper_todo_calender mt-3' style={{ backgroundColor: "#4941A6", height: "", border: "1px #4941A6 solid", borderRadius: "20px " }}>
                <div className='calender' style={{ height: "" }}>
                  <Calendar onChange={props.onChange} value={props.date} />
                </div>
              
                {props.allNotes.length > 0 && (
                  <div className="mt-4 todo_app_wrapper d-flex justify-content-center" style={{ height: "30vh", overflow: "auto" }}>
                    <div className="todo_app" style={{ overflow: "auto" }}>
                      {props.allNotes.map(({ id, address }) => (
                        <div className="mb-3 mt-2 change_width_in_sm" style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }} key={id}>
                          <div className="input_contain_value">
                            <input type="text" className="form-control" value={address} readOnly />
                          </div>
                          <div className="wraber_delete d-flex justify-content-center align-items-center" style={{ backgroundColor: "#1D195D", width: "2vw", height: "2vw", borderRadius: "8px" }}>
                            <img  src={props.delet} alt="Delete" width="17px" height="17px" data-bs-toggle="modal" data-bs-target={props.deleteButtonModal} onClick={() => props.onSelect(id)} />
                          </div>
                          <div data-bs-toggle="modal" data-bs-target={props.editButtonModal} className="wraber_delete d-flex justify-content-center align-items-center" onClick={() =>{props.onSelect(id); props.handleGetUpdate(id);} } style={{ backgroundColor: "#4941A6", width: "2vw", height: "2vw", borderRadius: "8px", boxShadow: 'rgba(0, 0, 0, 0.75) -2px 3px 5px 0px' }}>
                            <img src={props.edit} alt="Edit" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
      <div style={{ textAlign: "center", display: 'flex', justifyContent: "center",marginTop:"10px" }}>
                    <button data-bs-toggle="modal" data-bs-target="#addAdminNote" type="submit" className="btn  mx-2 " style={{ backgroundColor: "#FE4F60", color: '#FFFFFF' }}>
                      <span style={{ marginLeft: "10px", backgroundColor: "", width: '', backgroundColor: "" }}><img src={props.plus} alt="" /></span>
                      Add Task</button>
                  </div>
              </div>











              {/* add modal */}



       

     


              
    
    
    </>
  )
}