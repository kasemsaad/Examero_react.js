import React, { useEffect, useState } from 'react'
import Api_Dashboard from '../../interceptor/interceptorDashboard'
import OpenEmis from '../openEmis'
import image from "./../../../assets/image/High Importance.svg"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { NotifyError } from '../../Alert/alertToast'


export default function FinishedEmis() {

  const navigate= useNavigate()
  const role = useSelector((state) => state.RoleAccess.role); 
  const acccessDenied = ()=>{
      if (role != "owner"){
          navigate('/dashboard/accessDenied')
      }
  }
    const [openEmisAllData,SetopenEmisAllData]=useState([])
    const [editId,SeteditId]=useState('')

    const [pagination,Setpagination]=useState('')
    const [current_page,SetcurrentPage]=useState(1)
    // const [totalPages,Set]
    const totalPages=pagination.last_page


    const handelNext = () => {
      if (current_page === totalPages) return;
      SetcurrentPage((prev) => prev + 1);
    };
    
    const handelPrev = () => {
      if (current_page === 1) return;
      SetcurrentPage((prev) => prev - 1);
    };




    const [InputEditWaitinOpenEmis,SetInputEditWaitinOpenEmis]=useState({
        note:'',
        status:'',
      })

      // varible to store all ids which will remove 
  const [selectedItems,SetselectedItems]=useState([])
      
//function to get value which selected 
    const Checkouthandler = (e) => {
      const isSelected = e.target.checked;
      const value = parseInt(e.target.value);

      if (isSelected) {
        SetselectedItems((prevData) => {
              return [...selectedItems, value];
          });
      } else {
        SetselectedItems((prevData) => {
              return prevData.filter((id) => id !== value);
          });
      }
  };
    
  // function which get all value and vicavesra
      const checkAllHandler=()=>{
        if(openEmisAllData.length === selectedItems.length){
          SetselectedItems([])
        }else{
        const Ids =  openEmisAllData.map((item)=>{
          console.log(item.id);
          return item.id

        }) 
        SetselectedItems(Ids)}
      }

      const deleteEmis= async()=>{
        await Api_Dashboard.put('open-emis',{
         ids: selectedItems
        }).then((response)=>{
          NotifyError("تم الحذف بنجاح")
          waitingEmisAllData()

        }).catch((err)=>{
          console.log(err);
        })
      }
  

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
        acccessDenied()
    },[current_page])
    // getting ALL DATA OF WAIITING_OPENING_EMIS
    const waitingEmisAllData = async ()=>{
        await Api_Dashboard.get(`/open-emis?status=3&page=${current_page}`).then((response)=>{
          console.log(response);
            SetopenEmisAllData(response.data.data)
            Setpagination(response.data.meta.pagination);
        }).catch((err)=>{
            console.log(err);
        })
    }






  return (
    <>

<OpenEmis

flag={true}
checkboxHandler={Checkouthandler}
dataCheckedRender={selectedItems}
checkallFn={checkAllHandler}
deleteEmis={deleteEmis}
next={handelNext}
handelPrev={handelPrev}
dataRender={openEmisAllData} 
 edit={"#finished_open_ems"}
//   delete={"#deleteElementModal_teacher_dash"} 
   handel={(row)=>handeledit(row)} 
//    Deletehandel={(row)=>getDeletedObject(row)}
//  nameOfPageModalTarget={"#add_connect_Teacher_add"}
deleteModalFinished={"#delete_finished_emis"}
current_page={current_page}
totalPages={totalPages}
 
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
            <h5 style={{color:'#FF8A00',margin:"auto"}} className="modal-title" id="exampleModalLabel"> اضافه O.E.M.S </h5>
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






           <div
                className="modal fade DElementFade"
                id="delete_finished_emis"
                tabIndex="-1"
                aria-labelledby="deleteElementModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog DElementDialog modal-dialog-centered ele_2">
                    <div className="modal-content DElementContent">
                        <div className="modal-body DElementBody text-center">
                            <img src={image} alt="Warning Icon" className="warning-icon" />
                            <p className="modal-title DElementTitle" id="deleteElementModalLabel">هل أنت متأكد ؟</p>
                            <p className="parag" >  سيتم حذف هذه  </p>
                        </div>
                        <div className="modal-footer DElementFooter">
                            <button
                                type="button"
                                className="btn-secondary cancel-btn DElementCancel"
                                data-bs-dismiss="modal"
                            >
                                لا
                            </button>
                            <button    
                        data-bs-dismiss="modal" 
                        onClick={deleteEmis}
                          type="button" className="btn-danger save-btn DElementSave">
                                نعم
                            </button>
                        </div>
                    </div>
                </div>
            </div>



    
    
    
    
    
    </>
  )
}
