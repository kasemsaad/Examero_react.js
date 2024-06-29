import React, { useEffect, useState } from 'react'
import Api_Dashboard from '../../interceptor/interceptorDashboard'
import OpenEmis from '../openEmis'
import Confetti from 'react-confetti'

export default function WaitingEmis() {
    const [openEmisAllData,SetopenEmisAllData]=useState([])
    const [editId,SeteditId]=useState('')
    const [showConfetti, setShowConfetti] = useState(false);



    const [InputEditWaitinOpenEmis,SetInputEditWaitinOpenEmis]=useState({
        note:'',
        status:"2",
      })

      
    const [pagination,Setpagination]=useState('')
    const [current_page,SetcurrentPage]=useState(1)
    // const totalPages=Math.round(pagination.total/pagination.per_page)
    const totalPages = pagination.last_page
    

    console.log(totalPages);

    const handelNext = () => {

      if (current_page  === totalPages) return;
      SetcurrentPage((prev) => prev + 1);
    };
    
    const handelPrev = () => {
      if (current_page === 1) return;
      SetcurrentPage((prev) => prev - 1);
    };

  
      const getEditingInputs = (e) => {
        let editWitOpenEmis = { ...InputEditWaitinOpenEmis };
        const { name, value, type, checked } = e.target;
        editWitOpenEmis[name] = type === 'checkbox' ? (checked ? "2" : "") : value;
        SetInputEditWaitinOpenEmis(editWitOpenEmis);
    }

// post request
      const handlemodal = async(event) => {
        event.preventDefault();
        const dataToSend = { ...InputEditWaitinOpenEmis };
        if (dataToSend.note == undefined || dataToSend.note == null || dataToSend.note == "") {
          delete dataToSend.note;
        }
        await Api_Dashboard.post(`/open-emis/${editId}`,
         dataToSend   
        ).then((response)=>{
          setShowConfetti(true);
          setTimeout(() => {
            setShowConfetti(false);
          }, 3000);
          
          waitingEmisAllData()
        }).catch((err)=>{
          console.log(err);
        })
      };
  

      const handeledit = async(row)=>{
        console.log(row.id);
        await Api_Dashboard.get(`/open-emis/${row.id}`).then((response)=>{
            SeteditId(row.id)
            SetInputEditWaitinOpenEmis(response.data.data)
             waitingEmisAllData()
         }).catch((err)=>{
          console.log(err);
         })
      }
  
    

    useEffect(()=>{
        waitingEmisAllData()
    },[current_page])
    // getting ALL DATA OF WAIITING_OPENING_EMIS
    const waitingEmisAllData = async ()=>{
        await Api_Dashboard.get(`/open-emis?status=1&page=${current_page}`).then((response)=>{
            SetopenEmisAllData(response.data.data)
           Setpagination(response.data.meta.pagination);
        }).catch((err)=>{
            console.log(err);
        })
    }






  return (
    <>

<OpenEmis
icon={"true"}
col7={"تعديل"}
 next={handelNext}
  handelPrev={handelPrev}  
dataRender={openEmisAllData} 
// dataConnect={"البيانات الباقات المعلمين"}
 edit={"#waiting_open_ems"}
//   delete={"#deleteElementModal_teacher_dash"} 
   handel={(row)=>handeledit(row)} 
//    Deletehandel={(row)=>getDeletedObject(row)}
//  nameOfPageModalTarget={"#add_connect_Teacher_add"}
 
 />


{showConfetti && (
                        <Confetti
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: 9999
                            }}
                        />
                    )}

<div
      className="modal fade"
      id="waiting_open_ems"
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
                  <label htmlFor="name">النوته</label>
                  <textarea class="form-control"
                   id="exampleFormControlTextarea1" 
                   rows="3" name='note'
                     value={InputEditWaitinOpenEmis.note} 
                     onChange={(e)=>getEditingInputs(e)}
                   
                   > </textarea>
                </div>
                <div className="form-group mt-4">
                    <label htmlFor="">الحالة مستلمة</label>
             
             <input  class="form-check-input" 
             type="checkbox" 
             id="flexCheckDefault"                  
             name="status"
             onChange={getEditingInputs}
              checked={InputEditWaitinOpenEmis.status === "2"}
              style={{marginRight:"15px"}}
               />
                




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
