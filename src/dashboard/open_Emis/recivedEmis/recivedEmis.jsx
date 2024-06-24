import React, { useEffect, useState } from 'react'
import Api_Dashboard from '../../interceptor/interceptorDashboard'
import OpenEmis from '../openEmis'

export default function RecivedEmis() {
    const [openEmisAllData,SetopenEmisAllData]=useState([])
    const [editId,SeteditId]=useState('')


    const [InputEditWaitinOpenEmis,SetInputEditWaitinOpenEmis]=useState({
        note:'',
        status:'',
      })
  

      const getEditingInputs=(e)=>{
        let editWitOpenEmis={...InputEditWaitinOpenEmis}
        editWitOpenEmis[e.target.name]=e.target.value
        console.log(editWitOpenEmis.status)
        SetInputEditWaitinOpenEmis(editWitOpenEmis)
      }


      const handlemodal = async(event) => {
        event.preventDefault();
        console.log(InputEditWaitinOpenEmis)
        await Api_Dashboard.post(`/open-emis/${editId}`,{
            note:InputEditWaitinOpenEmis.note,
            status:InputEditWaitinOpenEmis.status    
        }).then((response)=>{
        //    console.log(response); 
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
    },[])
    // getting ALL DATA OF WAIITING_OPENING_EMIS
    const waitingEmisAllData = async ()=>{
        await Api_Dashboard.get('/open-emis?status=2').then((response)=>{
            SetopenEmisAllData(response.data.data)
            console.log(response.data.data);
        }).catch((err)=>{
            console.log(err);
        })
    }






  return (
    <>

<OpenEmis
col7={"تعديل"}



//  next={handelNext}
//   handelPrev={handelPrev}  
icon={"true"}
dataRender={openEmisAllData} 
// dataConnect={"البيانات الباقات المعلمين"}
 edit={"#recived_open_ems"}
//   delete={"#deleteElementModal_teacher_dash"} 
   handel={(row)=>handeledit(row)} 
//    Deletehandel={(row)=>getDeletedObject(row)}
//  nameOfPageModalTarget={"#add_connect_Teacher_add"}
 
 />



     <div
      className="modal fade"
      id="recived_open_ems"
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
                    <label htmlFor="">الحالة</label>
                <select aria-label="Default select example"  className="form-select"
                    name="status"
                    onChange={getEditingInputs}
                    >
             <option value="2" 
             >المستلمة</option>
            <option value="3">منتهيه</option>

             </select>
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
