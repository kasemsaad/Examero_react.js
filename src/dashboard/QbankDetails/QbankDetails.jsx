import React, { useEffect, useState } from 'react'
import QbankLogo from './../../assets/image/akar-icons_bank (1).svg'
import fowrword from "./../../assets/image/Forward.svg"
import plus from "./../../assets/image/+.svg"
import { useNavigate } from 'react-router-dom'
import TableQbank from '../../common/Table/tableQbank/tableQbank'
import Api_Dashboard from '../interceptor/interceptorDashboard'
import image from "./../../assets/image/High Importance.svg"
import QbankEditing from './QbankEditing/qbankEditing'
import SearchAndAddUsers from '../components/UsersPages/searchInputAndAddButton/handelSearch&AddUsers'
import { NotifyError } from '../Alert/alertToast'



export default function QbankDetails() {

    const [pagination, Setpagination] = useState('')
    const [current_page, SetcurrentPage] = useState(1)
    // const [totalPages,Set]
    const totalPages = pagination.last_page
    const [modalDissmiss, SetmodalDissmiss] = useState('')



    const handelNext = () => {
        if (current_page === totalPages) return;
        SetcurrentPage((prev) => prev + 1);
    };

    const handelPrev = () => {
        if (current_page === 1) return;
        SetcurrentPage((prev) => prev - 1);
    };


    let navigate = useNavigate()
    let header = {
        col1: "  اسم الناشر   ",
        col2: " الفصل الدراسي  ",
        col3: " اسم الصف",
        col5: "   اسم المبحث  ",
        col6: " اسم  الوحده    ",
        col7: " اسم الدرس ",
        col8: "الخصائص",

    }
    let icon = {
        trash: true,
        edit: true
    }

    const [allDataQuistition, SetallDataQuistition] = useState([])

    const getAllQuistionData = async () => {
        await Api_Dashboard.get(`/questions?page=${current_page}`).then((response) => {
            console.log(response);
            console.log(current_page);
            SetallDataQuistition(response.data.data)
            Setpagination(response.data.meta.pagination)
        }).catch((err) => {
            console.log(err);
        })
    }


    const [deleteId, SetdeleteId] = useState('')
    // delete connect 
    const getDeletedObject = (row) => {
        SetdeleteId(row.id)
        console.log(deleteId)
    }

    const deleteQbank = async () => {
        await Api_Dashboard.delete(`/questions/${deleteId}`).then((response) => {
            console.log(response);
            NotifyError("تم الحذف بنجاح")
            getAllQuistionData()
        }).catch((err) => {
            console.log(err);
        })
    }
    

    const [objectEditData,SetobjectEditData]=useState({})
    const [editId,SetId]=useState('')

    // i get object according id 
    const handeledit = async(row)=>{
        console.log(row);
        await Api_Dashboard.get(`/questions/${row.id}`).then((response)=>{
        SetobjectEditData(response.data.question)
        navigate("/dashboard/qbank_edit",{state:{id:row.id}})
        SetId(row.id)
             }).catch((err)=>{
          console.log(err);
         })
      }
  
    useEffect(() => {
        getAllQuistionData()
    }, [current_page,])



    const [filterQbank, setfilterQbank] = useState(allDataQuistition);
    const FilteredManagers = (dataFormComp) => {
        setfilterQbank(dataFormComp);
        console.log(dataFormComp);
      };

      useEffect(() => {
        setfilterQbank(allDataQuistition);
      }, [allDataQuistition]);



    return (
        <>
            <div className="container  pb-4 " style={{ overflow: 'auto', marginTop: '18px', direction: 'rtl', height: 'auto', border: "2px solid purble", borderRadius: "10px", width: "90%", margin: "auto" }}>

                <div className='col-12  mt-3 d-flex ' style={{ alignItems: "center", }}>
                    <div className="" style={{ width: "5.333333%" }}>
                        {/* <img src={QbankLogo} className="img-fluid rounded-circle" alt="صورة شخصية" /> */}
                     <img src={QbankLogo}  alt="صورة شخصية" />

                    </div>
                    <div className='col-6'>
                        <p style={{ margin: '0', padding: "0", color: "#FFFFFF", fontWeight: "700", fontSize: '24px' }}>بنك الأسئلة</p>
                    </div>
                </div>


                <div className='col-12 mt-4' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ width: "170px", height: "27px", backgroundColor: '#FF7380', borderRadius: '112px', display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div>
                            <p style={{ margin: "0", padding: "0", color: "#000000", fontSize: "14px" }}>استخراج شهادة</p>
                        </div>
                        <div style={{ marginRight: "20px" }}>
                            <img src={fowrword} alt="fowrword" />
                        </div>
                    </div>
                    <div>
                        <button type="button"
                            onClick={() => {
                                navigate('/dashboard/qbank')
                            }}
                            className='btn' style={{
                                backgroundColor: "#C01F59", height: "29px",
                                borderRadius: "10px", color: "#FFFFFF"
                            }}  ><img src={plus} alt="plus" />  إضافة الاسئله
                        </button>
                    </div>
                </div>

                <div className='search_qbank mt-3 '>
                <SearchAndAddUsers
            newData={allDataQuistition}
            buttonContent={"أضافة مدير"}
            // handel={handel}
            // fetchAllData={getAllQuistionData}
            // FilteredUsers={FilteredManagers}
            FilteredUsers={FilteredManagers}
            flag={true}
          />

                </div>

                <div className='mt-3'>

                    <TableQbank 
                    header={header}
                     icons={icon}
                      body={filterQbank}
                       Deletehandel={(row) => getDeletedObject(row)} 
                       delteModalName={"#delete_qbank_"}
                       editButtonName={"#edit_qbank"}
                       handel={(row)=>handeledit(row)}
                    //    filterQbank={filterQbank}

                       />
                </div>



                <div
                    style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        height: " 74px",
                        alignItems: "center",
                    }}
                    className="footer-manger"
                >
                    <button
                        type='button'

                        onClick={() => handelNext()}
                        style={{
                            backgroundColor: totalPages === current_page ? "#120E4D" : "#4941A6",
                            height: "26px",
                            width: "26px",
                            display: "flex",
                            fontSize: "18px",
                            fontWeight: "700",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "none",
                        }}
                    >
                        <p style={{ margin: "0", color: "white" }}>&gt;</p>
                    </button>
                    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <div
                                key={i}
                                style={{
                                    backgroundColor: current_page === i + 1 ? "#4941A6 " : "#120E4D",
                                    height: "26px",
                                    width: "26px",
                                    display: "flex",
                                    fontSize: "18px",
                                    fontWeight: "700",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "2px", // Added margin for better visual spacing
                                }}
                            >
                                {i + 1}
                            </div>
                        ))}
                    </div>
                    <button
                        type='button'
                        onClick={() => handelPrev()}
                        style={{
                            marginLeft: "5px",
                            backgroundColor: current_page === 1 ? "#120E4D" : "#4941A6",
                            height: "26px",
                            width: "26px",
                            display: "flex",
                            fontSize: "18px",
                            fontWeight: "700",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "none",
                        }}
                    >
                        <p style={{ margin: "0", color: "white" }}>&lt;</p>
                    </button>
                </div>





                {/* delete modal  */}
                <div
                    className="modal fade DElementFade"
                    id="delete_qbank_"
                    tabIndex="-1"
                    aria-labelledby="deleteElementModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog DElementDialog modal-dialog-centered ele_2">
                        <div className="modal-content DElementContent">
                            <div className="modal-body DElementBody text-center">
                                <img src={image} alt="Warning Icon" className="warning-icon" />
                                <p className="modal-title DElementTitle" id="deleteElementModalLabel">هل أنت متأكد ؟</p>
                                <p className="parag" > سيتم حذف هذه  </p>
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
                                    onClick={deleteQbank}
                                    type="button"
                                    className="btn-danger save-btn DElementSave">
                                    نعم
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}
