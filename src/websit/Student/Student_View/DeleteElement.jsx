import React from "react";
import "./DeleteElement.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import image from "./../images/image1.svg";

function DeleteElement(props) {
    return (
        <>
            <button
                type="button"
                className="btn btn-primary eleButton1"
                data-bs-toggle="modal"
                data-bs-target="#deleteElementModal"
            >
                حذف {props.name}
            </button>
            <div
                className="modal fade DElementFade"
                id="deleteElementModal"
                tabIndex="-1"
                aria-labelledby="deleteElementModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog DElementDialog modal-dialog-centered ele_2">
                    <div className="modal-content DElementContent">
                        <div className="modal-body DElementBody text-center">
                            <img src={image} alt="Warning Icon" className="warning-icon" />
                            <p className="modal-title DElementTitle" id="deleteElementModalLabel">هل أنت متأكد ؟</p>
                            <p className="parag">سيتم حذف {props.type} {props.name}</p>
                        </div>
                        <div className="modal-footer DElementFooter">
                            <button
                                type="button"
                                className="btn-secondary cancel-btn DElementCancel"
                                data-bs-dismiss="modal"
                            >
                                لا
                            </button>
                            <button type="button" className="btn-danger save-btn DElementSave">
                                نعم
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DeleteElement;
