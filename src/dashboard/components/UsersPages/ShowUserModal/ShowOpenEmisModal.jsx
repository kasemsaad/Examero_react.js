
import React, { useState } from "react";
import "./SowUser.css";
const ShowOpenEmisModal = ({ content, userData }) => {
  const getStatusMessage = (status) => {
    if (!status || !Array.isArray(status) || status.length === 0) {
      return "غير معروف";
    }
    switch (status[0]) {
      case 1:
        return "بالانتظار";
      case 2:
        return "مستلمه";
      case 3:
        return "منتهيه";
      default:
        return status[1] || "غير معروف"; 
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="show-open-emis-dash"
        tabIndex="-1"
        aria-labelledby="show-open-emis-dash"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog my-mod-add" role="document">
          <div
            className="modal-content"
            style={{
              backgroundColor: "#1D195D",
              borderRadius: "13.97px",
              width: "100%",
            }}
          >
            <div
              className="modal-header-new"
              style={{
                flexDirection: "row-reverse",
                width: "100%",
                height: "80px",
                color: "#FF8A00",
                fontSize: "20px",
                fontWeight: "700",
                display: "flex",
                textAlign: "center",
              }}
            >
              <h5 className="modal-title m-auto" id="exampleModalLabel">
                عرض بيانات {content}
              </h5>
              <button
                type="button"
                className="btn-close-new"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{
                  margin: "9px",
                  borderRadius: "100%",
                  backgroundColor: "white",
                  width: "32px",
                  height: "32px",
                  fontSize: "14px",
                  border: "none",
                }}
              >
                ❌
              </button>
            </div>
            <div
              style={{
                margin: "auto",
                width: "81%",
                height: "1px",
                border: "red",
                backgroundColor: "#A6A0F4",
              }}
            ></div>
            <div
              className="modal-body-new p-0 d-flex"
              style={{ height: "450px", flexDirection: "column " }}
            >
              <div
                className="d-flex col-12 p-0"
                style={{
                  width: "81%",
                  margin: "auto",
                  display: "flex",
                  justifyContent: "space-evenly",
                  height: "180px",
                }}
              >
                {/*////////////// first name ////////////////// */}

                <table
                  style={{
                    height: "fit-content",
                    border: "#A6A0F4 solid 1px",
                    color: "white",
                    marginTop: "15px",
                  }}
                  className="table text-white"
                >
                  <thead>
                    <tr>
                      <th className="td-show-mod" scope="col">
                      اسم المستخدم
                      </th>
                      <th className="td-show-mod2" scope="col">
                        {userData.user_name}{" "}
                      </th>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th className="td-show-mod" scope="col">
                      كلمة المرور
                      </th>
                      <th className="td-show-mod2" scope="col">
                        {userData.password}{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.group && (
                      <tr>
                        <td className="td-show-mod">اسم الصف</td>
                        <td className="td-show-mod2">{userData.group}</td>
                      </tr>
                    )}
                    <tr>
                      <td className="td-show-mod">اسم المبحث</td>
                      <td className="td-show-mod2">{userData.subject}</td>
                    </tr>
                    <tr>
                      <td className="td-show-mod">الحاله </td>
                      <td className="td-show-mod2">{getStatusMessage(userData.status)}</td>
                    </tr>
                    <tr>
                      <td className="td-show-mod">معاينة دفتر العلامات </td>
                      <td className="td-show-mod2">
  {userData.note === null ? "لا يوجد" : userData.note}
</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div
                style={{ alignItems: "flex-start" }}
                className="modal-footer-new new-footer"
              >
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  style={{
                    borderRadius: "30px",
                    color: "#FE4F60",
                    border: "#FE4F60 solid 2px",
                    backgroundColor: "#1D195D",
                    width: "96px",
                    height: "40px",
                  }}
                >
                  إلغاء
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowOpenEmisModal;
