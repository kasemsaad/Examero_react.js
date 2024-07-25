import React from "react";
import image from "../../../../assets/image/High Importance.svg";
import "./DeleteUserModal.css";
import Api_website from "../../../../utlis/axios_utils_websit";

const DeleteopenemisModal = ({ idOfDeleteItem, fetchAllData, content }) => {
  const deleteOpenEmis = async (idOfDeleteItem) => {
    document.body.style.removeProperty("overflow");
    if (idOfDeleteItem) {
      try {
        await Api_website.delete(
          `/teachers/open-emis/${idOfDeleteItem}`
        );
        fetchAllData();
      } catch (error) {
        console.error("Error deleting OpenEmis:", error);
      }
    }
  };

  return (
    <>
      {/* delete modal  */}
      <div
        className="modal fade DElementFade"
        id="deleteElementModal_openEmis"
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
                onClick={() => deleteOpenEmis(Number(idOfDeleteItem))}
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

export default DeleteopenemisModal;
