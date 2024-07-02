import React, { useEffect, useState } from 'react'
import Reward from '../reward'
import Api_Dashboard from '../../interceptor/interceptorDashboard'
import image from "./../../../assets/image/High Importance.svg"


export default function RewardMoshref() {
    const [superVisor, SetsuperVisor] = useState([])

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

    const getALLdataOfSuperVisor = async () => {
        await Api_Dashboard.get('/points/Supervisor').then((response) => {
            console.log(response.data.data.data);
            SetsuperVisor(response.data.data.data)
            Setpagination(response.data.meta.pagination);
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        getALLdataOfSuperVisor()
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
        if (superVisor.length === selectedItems.length) {
            SetselectedItems([])
        } else {
            const Ids = superVisor.map((item) => {
                console.log(item.admin_id);
                return item.admin_id

            })
            SetselectedItems(Ids)
        }
    }

    const deleteSuperVisordata= async()=>{
        await Api_Dashboard.put('/points',{
            adminIds: selectedItems
        }).then((response)=>{
          getALLdataOfSuperVisor()

        }).catch((err)=>{
          console.log(err);
        })
      }
  


    return (
        <>
        {/* <div id='rewardSuperVisor'> */}

   


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
                dataRender={superVisor}
                flagAdmin={true}
             
                deleteModalFinished={"#delete_superVisor_modal"}
                documenDownlowd={"rewardSuperVisor"}
                TittleName={"اسم المشرف"}

            />




            <div
                className="modal fade DElementFade"
                id="delete_superVisor_modal"
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
                            <button
                                data-bs-dismiss="modal"
                                onClick={deleteSuperVisordata}
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
