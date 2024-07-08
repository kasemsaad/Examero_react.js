import React, { useEffect, useState } from 'react'
import Api_Dashboard from '../../interceptor/interceptorDashboard'
import OpenEmis from '../openEmis'
import ModalDelete, { Notify, NotifyError } from '../../Alert/alertToast'

export default function RecivedEmis() {
  const [openEmisAllData, SetopenEmisAllData] = useState([])
  const [editId, SeteditId] = useState('')


  const [InputEditWaitinOpenEmis, SetInputEditWaitinOpenEmis] = useState({
    note: "",
    status: '',
  })

  
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



  const getEditingInputs = (e) => {
    let editWitOpenEmis = { ...InputEditWaitinOpenEmis }
    editWitOpenEmis[e.target.name] = e.target.value
    console.log(editWitOpenEmis.status)
    SetInputEditWaitinOpenEmis(editWitOpenEmis)
  }





  const handlemodal = async (event) => {
    event.preventDefault();
    const dataToSend = { ...InputEditWaitinOpenEmis };

    if (dataToSend.status !== "2" && dataToSend.status !== "3") {
      delete dataToSend.status;
    }

    if (dataToSend.note == undefined || dataToSend.note == null || dataToSend.note == "") {
      delete dataToSend.note;
    }

    console.log(dataToSend);
    await Api_Dashboard.post(`/open-emis/${editId}`, dataToSend)
      .then((response) => {
        waitingEmisAllData();
          const modalElement = document.getElementById('recived_open_ems');
           modalElement.style.display = "none"
           Notify("تم التعديل بنجاح")

        
        SetInputEditWaitinOpenEmis(prevState => ({
          ...prevState,
          note: "",
          status: ""
        }));

      })
      .catch((err) => {
        
        SetInputEditWaitinOpenEmis(prevState => ({
          ...prevState,
          note: "",
          status: ""
        }));
        NotifyError("خطأ في التعديل")

        console.log(err);
      });
  };


  const handeledit = async (row) => {
    document.body.style.overflow = '';
    console.log(row.id);
    await Api_Dashboard.get(`/open-emis/${row.id}`).then((response) => {
      SeteditId(row.id)
      SetInputEditWaitinOpenEmis(response.data.data)
      waitingEmisAllData()
    }).catch((err) => {
      console.log(err);
    })
  }



  useEffect(() => {
    waitingEmisAllData()
  }, [current_page])
  // getting ALL DATA OF WAIITING_OPENING_EMIS
  const waitingEmisAllData = async () => {
    await Api_Dashboard.get(`/open-emis?status=2&page=${current_page}`).then((response) => {
      SetopenEmisAllData(response.data.data)
      Setpagination(response.data.meta.pagination);

    }).catch((err) => {
      console.log(err);
    })
  }


  return (
    <>

      <OpenEmis
      current_page={current_page}
      totalPages={totalPages}
        col7={"تعديل"}
         next={handelNext}
          handelPrev={handelPrev}  
        icon={"true"}
        dataRender={openEmisAllData}
        // dataConnect={"البيانات الباقات المعلمين"}
        edit={"#recived_open_ems"}
        //   delete={"#deleteElementModal_teacher_dash"} 
        handel={(row) => handeledit(row)}
      //    Deletehandel={(row)=>getDeletedObject(row)}
      //  nameOfPageModalTarget={"#add_connect_Teacher_add"}
      />
<ModalDelete/>

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
          <div className="modal-content" style={{ backgroundColor: "#1D195D", borderRadius: "20px" }}>
            <div className="modal-header" >
              <h5 style={{ color: '#FF8A00', margin: "auto" }} className="modal-title" id="exampleModalLabel">اضافه O.E.M.S</h5>
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
                      onChange={(e) => getEditingInputs(e)}
                      required
                    > </textarea>
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="">الحالة</label>
                    <select
                      aria-label="Default select example"
                      className="form-select"
                      name="status"
                      value={InputEditWaitinOpenEmis.status}
                      onChange={getEditingInputs}>
                      <option value="2" >المستلمة</option>
                      <option value="3">منتهيه</option>
                    </select>
                  </div>
                  <div className='mt-5' style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
                    <div className='submitButton'>
                      <button  type="submit" className="btn btn-primary">حفظ</button>
                    </div>
                    <div style={{ marginRight: "30px" }}>
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
