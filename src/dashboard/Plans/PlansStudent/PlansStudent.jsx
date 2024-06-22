import React, { useEffect, useState } from 'react'
import Plans from '../Plans'
import Api_Dashboard from '../../interceptor/interceptorDashboard'

export default function PlansStudent() {
    const [allStudentPlanData,SetallStudentPlanData]=useState([])


    
    const [packageName, setPackageName] = useState('');
    const [packageDescription, setPackageDescription] = useState('');
    const [packagePrice, setPackagePrice] = useState(1);
    const [availableExams, setAvailableExams] = useState(1);
    const [availableQuestions, setAvailableQuestions] = useState(1);
  
    const increment = (setter, value) => setter(value + 1);
    const decrement = (setter, value) => {
      if (value > 1) setter(value - 1);
    };
    const handlemodal = (event) => {
      event.preventDefault();
      // Handle form submission logic
      console.log({
        packageName,
        packageDescription,
        packagePrice,
        availableExams,
        availableQuestions,
      });
    };


    useEffect(()=>{
        getAllTeacherPlan()
    },[])
    const getAllTeacherPlan= async ()=>{
      await Api_Dashboard.get('/plans/student').then((response)=>{
            SetallStudentPlanData(response.data.data)
            console.log(response.data);
        }).catch((err)=>{
            console.log(err);
        })

        
    }
  return (
    <>
    <Plans dataRender={allStudentPlanData} dataConnect={"البيانات الباقات الطلاب"} edit={"#add_connect_Student"}/>



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
              <form onSubmit={handlemodal}>
                

                <div className="form-group">
                  <label htmlFor="packageName">اسم الباقة</label>
                  <input
                    type="text"
                    className="form-control"
                    id="packageName"
                    placeholder="أدخل اسم الباقة"
                    value={packageName}
                    onChange={(e) => setPackageName(e.target.value)}
                  />
                </div>



                <div className="form-group mt-4">
                  <label htmlFor="packageDescription">وصف الباقة</label>
                  <textarea
                    className="form-control"
                    id="packageDescription"
                    rows="3"
                    placeholder="أدخل وصف الباقة"
                    value={packageDescription}
                    onChange={(e) => setPackageDescription(e.target.value)}
                  />
                </div>



                <div className="mt-4" style={{display:"flex"}}>
                  <div className="form-group col-md-4">
                    <label htmlFor="packagePrice">سعر الباقة</label>
                    <div className="input-group" style={{flexWrap:"noWrap"}}>
                      <div className="input-group-prepend">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec "
                          onClick={() => decrement(setPackagePrice, packagePrice)}
                        >
                          -
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control text-center"
                        id="packagePrice"
                        value={packagePrice}
                        readOnly
                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          onClick={() => increment(setPackagePrice, packagePrice)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="availableExams">عدد الامتحانات المتاحة</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          onClick={() => decrement(setAvailableExams, availableExams)}
                        >
                          -
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control text-center"
                        id="availableExams"
                        value={availableExams}
                        readOnly
                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          onClick={() => increment(setAvailableExams, availableExams)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="availableQuestions">عدد الأسئلة المتاحة</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          onClick={() => decrement(setAvailableQuestions, availableQuestions)}
                        >
                          -
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control text-center"
                        id="availableQuestions"
                        value={availableQuestions}
                        readOnly
                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          onClick={() => increment(setAvailableQuestions, availableQuestions)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-5' style={{textAlign:"center",display:"flex",justifyContent:"center"}}>
                  <div className='submitButton'>
                <button type="submit" className="btn btn-primary">حفظ</button>
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
