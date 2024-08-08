import React, { useEffect, useState } from 'react'
import Reward from '../reward'
import Api_Dashboard from '../../interceptor/interceptorDashboard'
import image from "./../../../assets/image/High Importance.svg"
import { NotifyError } from '../../Alert/alertToast'


export default function RewardManger() {
    const [managerALLData, SetmanagerALLData] = useState([])

    const [pagination, Setpagination] = useState('')
    const [current_page, SetcurrentPage] = useState(1)
    const totalPages = pagination.last_page
    const handelNext = () => {
        if (current_page === totalPages) return;
        SetcurrentPage((prev) => prev + 1);
    };

    const handelPrev = () => {
        if (current_page === 1) return;
        SetcurrentPage((prev) => prev - 1);
    };

    const getAllDataOfManger = async () => {
        await Api_Dashboard.get(`/points/manager?page=${current_page}`).then((response) => {
            // console.log(response.data.data.data);
            SetmanagerALLData(response.data.data.data)
            Setpagination(response.data.meta.pagination);
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        getAllDataOfManger()
    }, [current_page])

    const [selectedItems, SetselectedItems] = useState([])

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
    const checkAllHandler = () => {
        if (managerALLData.length === selectedItems.length) {
            SetselectedItems([])
        } else {
            const Ids = managerALLData.map((item) => {
                console.log(item.admin_id);
                return item.admin_id

            })
            SetselectedItems(Ids)
        }
    }

    const deleteMangerReward= async()=>{
        await Api_Dashboard.put('/points',{
            adminIds: selectedItems
        }).then((response)=>{
            NotifyError("تم الحذف بنجاح")
            getAllDataOfManger()

        }).catch((err)=>{
          console.log(err);
        })
      }
  


    return (
        <>

{/* <div id='rewardManager'> */}

            <Reward
            current_page={current_page}
            totalPages={totalPages}

                flag={true}
                checkboxHandler={Checkouthandler}
                dataCheckedRender={selectedItems}
                checkallFn={checkAllHandler}
                // deleteEmis={deleteEmis}
                next={handelNext}
                handelPrev={handelPrev}
                dataRender={managerALLData}
             
                deleteModalFinished={"#delete_manager_modal"}
                flagAdmin={true}
                documenDownlowd={"rewardManager"}
                TittleName={"اسم المدير"}

            />




            <div
                className="modal fade DElementFade"
                id="delete_manager_modal"
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
                                onClick={deleteMangerReward}
                                type="button" className="btn-danger save-btn DElementSave">
                                نعم
                            </button>
                        </div>
                    </div>
                </div>
            </div>

{/* </div> */}





        </>)
}
