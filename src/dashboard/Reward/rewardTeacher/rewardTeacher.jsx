import React, { useEffect, useState } from 'react'
import Reward from '../reward'
import Api_Dashboard from '../../interceptor/interceptorDashboard'
import image from "./../../../assets/image/High Importance.svg"


export default function RewardTeacher() {
    const [Teacher, SetTeacher] = useState([])

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

    const getALLdataOfTeacher = async () => {
        await Api_Dashboard.get('/teacher/points').then((response) => {
            console.log(response.data.data.data);
            SetTeacher(response.data.data.data)
            Setpagination(response.data.meta.pagination);
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        getALLdataOfTeacher()
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
        if (Teacher.length === selectedItems.length) {
            SetselectedItems([])
        } else {
            const Ids = Teacher.map((item) => {
                console.log(item.teacher_id);
                return item.teacher_id

            })
            SetselectedItems(Ids)
        }
    }

    // delete according checked ids
    const deleteTeacherdata= async()=>{
        await Api_Dashboard.put('/teacher/points',{
            teacherIds: selectedItems
        }).then((response)=>{
          getALLdataOfTeacher()

        }).catch((err)=>{
          console.log(err);
        })
      }
  


    return (
        <>
        <div id='RewardTeacher'>

       

            <Reward
                flag={true}
                checkboxHandler={Checkouthandler}
                dataCheckedRender={selectedItems}
                checkallFn={checkAllHandler}
                // deleteEmis={deleteEmis}
                next={handelNext}
                handelPrev={handelPrev}
                dataRender={Teacher}
                deleteModalFinished={"#delete_Teacher_modal_"}
                documenDownlowd={"RewardTeacher"}
            />




            <div
                className="modal fade DElementFade"
                id="delete_Teacher_modal_"
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
                                onClick={deleteTeacherdata}
                                type="button" className="btn-danger save-btn DElementSave">
                                نعم
                            </button>
                        </div>
                    </div>
                </div>
            </div>




            </div>


        </>)
}
