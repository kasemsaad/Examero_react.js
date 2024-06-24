import React, { useEffect, useState } from 'react'
import Plans from '../Plans'
import Api_Dashboard from '../../interceptor/interceptorDashboard'
import image from "./../../../assets/image/High Importance.svg"
import "./PlansStudent.css"

export default function PlansStudent() {
    const [allStudentPlanData,SetallStudentPlanData]=useState([])
    const [editId,SetId]=useState("")
    const [deleteId,SetdeleteId]=useState("")

    const [InputEditTeacher,SetInputEditTeacher]=useState({
      name:'',
      description:'',
      price:1,
      allow_exam:1,
      allow_question:1,
      for_student:1

    })



    const [name, setname] = useState('');
    const [description, setdescription] = useState('');
    const [price, setprice] = useState(1);
    const [allow_exam, setallow_exam] = useState(1);
    const [allow_question, setallow_question] = useState(1);
  
    // const increment = (setter, value) => setter(value + 1);
    // const decrement = (setter, value) => {
    //   if (value > 1) setter(value - 1);
    // };


    const increment = (field) => {
      SetInputEditTeacher((prevState) => ({
        ...prevState,
        [field]: parseInt(prevState[field]) + 1
      }));
    };
  
    const decrement = (field) => {
      SetInputEditTeacher((prevState) => ({
        ...prevState,
        [field]: prevState[field] > 1 ? parseInt(prevState[field]) - 1 : 1
      }));
    };
    const handlemodal = async(event) => {
      event.preventDefault();
      await Api_Dashboard.post(`/plans/${editId}`,{
      name:InputEditTeacher.name,
      description:InputEditTeacher.description,
      price:InputEditTeacher.price,
      allow_exam:InputEditTeacher.allow_exam,
      allow_question:InputEditTeacher.allow_question,
      for_student:1 
      }).then((response)=>{
        getAllTeacherPlan()
      }).catch((err)=>{
        console.log(err);
      })
    };



    //********* */ add connect post *************8
    const addConnect =async(event)=>{
      event.preventDefault();
    await  Api_Dashboard.post('/plans',{
      name:InputEditTeacher.name,
      description:InputEditTeacher.description,
      price:InputEditTeacher.price,
      allow_exam:InputEditTeacher.allow_exam,
      allow_question:InputEditTeacher.allow_question,
      for_student:1 
      }).then((response)=>{
        getAllTeacherPlan()
      }).catch((err)=>{
        console.log(err);
      })
    }

// ****** edit and update ******************8 
    const handeledit = async(row)=>{
      console.log(row.id);
      await Api_Dashboard.get(`/plans/${row.id}`).then((response)=>{
      SetId(row.id)
      SetInputEditTeacher(response.data.data)
        getAllTeacherPlan()
       }).catch((err)=>{
        console.log(err);
       })
    }

    // get values which write in inputs 

    const getEditingInputs=(e)=>{
      let editTeacher={...InputEditTeacher}
      editTeacher[e.target.name]=e.target.value
      SetInputEditTeacher(editTeacher)
    }

    // delete connect 
    const getDeletedObject = (row)=>{
      SetdeleteId(row.id)
      // console.log(deleteId)
    }

// delete api _________________________
    const deleteConnect=async()=>{
      await Api_Dashboard.delete(`/plans/${deleteId}`).then((response)=>{
        getAllTeacherPlan()
      }).catch((err)=>{
        console.log(err);
      })
    }
// ____________________________________________

    useEffect(()=>{
        getAllTeacherPlan()
    },[])
    
    const getAllTeacherPlan= async ()=>{
      await Api_Dashboard.get('/plans/student').then((response)=>{
        console.log(response.data.data );
            SetallStudentPlanData(response.data.data)
        }).catch((err)=>{
            console.log(err);
        })

        
    }
  return (
    <>
    <Plans dataRender={allStudentPlanData} 
    dataConnect={"البيانات الباقات الطلاب"}
     edit={"#add_connect_Student"} 
      delete={"#deleteElementModal_student_dash"}
       handel={(row)=>handeledit(row)}
        Deletehandel={(row)=>getDeletedObject(row)} 
    nameOfPageModalTarget={"#add_connect_student_add"} />
   


      


{/* update */}

<div
      className="modal fade"
      id="add_connect_Student"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog" >
        <div className="modal-content" style={{backgroundColor:"#1D195D",borderRadius:"20px"}}>
          <div className="modal-header" >
            <h5 style={{color:'#FF8A00',margin:"auto"}} className="modal-title" id="exampleModalLabel">إضافة باقة جديدة</h5>
          </div>

          <div className="modal-body">
            <div className="container  text-white">
              <form onSubmit={(e)=>handlemodal(e)}>
                

                <div className="form-group">
                  <label htmlFor="name">اسم الباقة</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name='name'
                    placeholder="أدخل اسم الباقة"
                    value={InputEditTeacher.name}
                    // onChange={(e) => setname(e.target.value)}
                    onChange={(e)=>getEditingInputs(e)}
                  />
                </div>



                <div className="form-group mt-4">
                  <label htmlFor="description">وصف الباقة</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name='description'
                    rows="3"
                    placeholder="أدخل وصف الباقة"
                    value={InputEditTeacher.description}
                    // onChange={(e) => setdescription(e.target.value)}
                    onChange={(e)=>getEditingInputs(e)}

                  />
                </div>



                <div className="mt-4" style={{display:"flex"}}>
                  <div className="form-group col-md-4">
                    <label htmlFor="price">سعر الباقة</label>
                    <div className="input-group" style={{flexWrap:"noWrap"}}>
                      <div className="input-group-prepend">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec "
                          onClick={() => decrement("price")}
                        >
                          -
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control text-center"
                        id="price"
                        name='price'
                        value={InputEditTeacher.price}
                        onChange={(e)=>getEditingInputs(e)}
                        
                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          onClick={() => increment("price")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="allow_exam">عدد الامتحانات المتاحة</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          onClick={() => decrement("allow_exam")}
                        >
                          -
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control text-center"
                        id="allow_exam"
                        name='allow_exam'
                        value={InputEditTeacher.allow_exam}
                        
                        onChange={(e)=>getEditingInputs(e)}

                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          onClick={() => increment("allow_exam")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="allow_question">عدد الأسئلة المتاحة</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          onClick={() => decrement("allow_question")}
                        >
                          -
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control text-center"
                        id="allow_question"
                        name='allow_question'
                        value={InputEditTeacher.allow_question}
                        onChange={(e)=>getEditingInputs(e)}

                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          // onClick={() => increment(setallow_question, allow_question)}
                          onClick={() => increment('allow_question')}

                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-5' style={{textAlign:"center",display:"flex",justifyContent:"center"}}>
                  <div className='submitButton'>
                <button data-bs-dismiss="modal" type="submit" className="btn btn-primary">حفظ</button>
                </div>
                <div style={{marginRight:"30px"}}>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>


{/* delete connect */}
    <div
                className="modal fade DElementFade"
                id="deleteElementModal_student_dash"
                tabIndex="-1"
                aria-labelledby="deleteElementModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog DElementDialog modal-dialog-centered ele_2">
                    <div className="modal-content DElementContent">
                        <div className="modal-body DElementBody text-center">
                            <img src={image} alt="Warning Icon" className="warning-icon" />
                            <p className="modal-title DElementTitle" id="deleteElementModalLabel">هل أنت متأكد ؟</p>
                            <p className="parag" >  سيتم حذف هذه الباقه </p>
                        </div>
                        <div className="modal-footer DElementFooter">
                            <button
                                type="button"
                                className="btn-secondary cancel-btn DElementCancel"
                                data-bs-dismiss="modal"
                            >
                                لا
                            </button>
                            <button                                 data-bs-dismiss="modal"
    onClick={deleteConnect}  type="button" className="btn-danger save-btn DElementSave">
                                نعم
                            </button>
                        </div>
                    </div>
                </div>
            </div>






{/* modal add connect */}
<div
      className="modal fade"
      id="add_connect_student_add"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog" >
        <div className="modal-content" style={{backgroundColor:"#1D195D",borderRadius:"20px"}}>
          <div className="modal-header" >
            <h5 style={{color:'#FF8A00',margin:"auto"}} className="modal-title" id="exampleModalLabel">إضافة باقة جديدة</h5>
          </div>

          <div className="modal-body">
            <div className="container  text-white">
              <form onSubmit={(e)=>addConnect(e)}>
                

                <div className="form-group">
                  <label htmlFor="name">اسم الباقة</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name='name'
                    placeholder="أدخل اسم الباقة"
                    // value={InputEditTeacher.name}
                    // onChange={(e) => setname(e.target.value)}
                    onChange={(e)=>getEditingInputs(e)}
                  />
                </div>



                <div className="form-group mt-4">
                  <label htmlFor="description">وصف الباقة</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name='description'
                    rows="3"
                    placeholder="أدخل وصف الباقة"
                    // value={InputEditTeacher.description}
                    // onChange={(e) => setdescription(e.target.value)}
                    onChange={(e)=>getEditingInputs(e)}

                  />
                </div>



                <div className="mt-4" style={{display:"flex"}}>
                  <div className="form-group col-md-4">
                    <label htmlFor="price">سعر الباقة</label>
                    <div className="input-group" style={{flexWrap:"noWrap"}}>
                      <div className="input-group-prepend">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec "
                          onClick={() => decrement("price")}
                        >
                          -
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control text-center"
                        id="price"
                        name='price'
                        value={InputEditTeacher.price}
                        onChange={(e)=>getEditingInputs(e)}
                        readOnly
                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          onClick={() => increment("price")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="allow_exam">عدد الامتحانات المتاحة</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          onClick={() => decrement("allow_exam")}
                        >
                          -
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control text-center"
                        id="allow_exam"
                        name='allow_exam'
                        value={InputEditTeacher.allow_exam}
                        readOnly
                        onChange={(e)=>getEditingInputs(e)}

                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          onClick={() => increment("allow_exam")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="allow_question">عدد الأسئلة المتاحة</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          onClick={() => decrement("allow_question")}
                        >
                          -
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control text-center"
                        id="allow_question"
                        name='allow_question'
                        value={InputEditTeacher.allow_question}
                        readOnly
                        onChange={(e)=>getEditingInputs(e)}

                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          // onClick={() => increment(setallow_question, allow_question)}
                          onClick={() => increment('allow_question')}

                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-5' style={{textAlign:"center",display:"flex",justifyContent:"center"}}>
                  <div className='submitButton'>
                <button data-bs-dismiss="modal" type="submit" className="btn btn-primary">حفظ</button>
                </div>
                <div style={{marginRight:"30px"}}>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>


    </>
  )
}