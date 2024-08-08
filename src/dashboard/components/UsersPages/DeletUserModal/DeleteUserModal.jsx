import React from "react";
import image from "../../../../assets/image/High Importance.svg";
import "./DeleteUserModal.css";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";
import { toast } from "react-toastify";
const DeleteUserModal = ({
  idOfDeleteItem,
  fetchAllData,
  api,
  content,
  itemName,
}) => {
  const notify = (AlertPointSuccess) => {
    toast.success(AlertPointSuccess, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const Errornotify = (AlertPoint) => {
    toast.error(AlertPoint, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const deleteManger = async (idOfDeleteItem) => {
    if (idOfDeleteItem) {
      document.body.style.removeProperty("overflow");
      const response = await Api_Dashboard.delete(
        `/${api}/${idOfDeleteItem}`
      ).then((response) => {
        console.log(response);
        notify(`تم مسح ${content} بنجاح `);
      });
      fetchAllData().catch((err) => {
        console.log(err);
      });
    }
  };

  return (
    <>
      {/* delete modal  */}
      <div
        className="modal fade DElementFade"
        id="deleteElementModal_users-dash"
        tabIndex="-1"
        aria-labelledby="deleteElementModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog DElementDialog modal-dialog-centered ele_2">
          <div className="modal-content DElementContent">
            <div className="modal-body DElementBody text-center">
              <img src={image} alt="Warning Icon" className="warning-icon" />
              <p
                className="modal-title DElementTitle"
                id="deleteElementModalLabel"
              >
                هل أنت متأكد ؟
              </p>
              <p className="parag"> سيتم حذف {content} </p>
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
                type="button"
                onClick={() => deleteManger(Number(idOfDeleteItem))}
                className="btn-danger save-btn DElementSave"
              >
                نعم
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeleteUserModal;
