import React from 'react'
import image from "./../../assets/image/High Importance.svg"


export default function ModalLogOut(props) {
    return (
        <>

            {/* delete modal  */}
            <div
                className="modal fade DElementFade"
                id="log_out_dashboard"
                tabIndex="-1"
                aria-labelledby="deleteElementModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog DElementDialog modal-dialog-centered ele_2">
                    <div className="modal-content DElementContent">
                        <div className="modal-body DElementBody text-center">
                            <img src={image} alt="Warning Icon" className="warning-icon" />
                            <p className="modal-title DElementTitle" id="deleteElementModalLabel">هل أنت متأكد  تسجيل الخروج ؟</p>
                            {/* <p className="parag" >هل انت متاكد من تسجيل الخروج</p> */}
                        </div>
                        <div className="modal-footer DElementFooter">
                            <button
                                type="button"
                                className="btn-secondary cancel-btn DElementCancel"
                                data-bs-dismiss="modal"
                            >
                                لا
                            </button>

                            <button data-bs-dismiss="modal"
                                onClick={props.LogOut}
                                type="button"
                                className="btn-danger save-btn DElementSave">
                                نعم
                            </button>
                        </div>
                    </div>
                </div>
            </div>








        </>
    )
}
