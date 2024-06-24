import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";
import LadingComponent from "../../../LoadingComponent/LodingComponent";
import { json } from "react-router-dom";

const ShowUserModal = ({ fetchAllData, content, api }) => {
  return (
    <>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#show-manger-dash"
      >
        Rady
      </button>

      <div
        className="modal fade"
        id="show-manger-dash"
        tabIndex="-1"
        aria-labelledby="show-manger-dash"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog my-mod-add" role="document">
          <div
            className="modal-content"
            style={{ backgroundColor: "#1D195D", borderRadius: "13.97px" }}
          >
            <div
              className="modal-header-new"
              style={{
                flexDirection: "row-reverse",
                width: "100%",
                height: "86px",
                color: "#FF8A00",
                fontSize: "20px",
                fontWeight: "700",
                display: "flex",
                textAlign: "center",
              }}
            >
              <h5 className="modal-title m-auto" id="exampleModalLabel">
                {content}
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
                width: "581px",
                backgroundColor: "#A6A0F4",
                height: "1px",
              }}
            ></div>
            <div
              className="modal-body-new p-0 d-flex"
              style={{ height: "500px" }}
            >
              <form style={{ width: "95%", margin: "auto" }} className="w-95">
                <div
                  className="d-flex col-12 p-0"
                  style={{
                    width: "91%",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "space-evenly",
                    height: "85px",
                  }}
                >
                  {/*////////////// first name ////////////////// */}

                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">First</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mark</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>Jacob</td>
                        <td>@fat</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="modal-footer-new new-footer">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      borderRadius: "30px",
                      border: "none",
                      backgroundColor: "#C01F59",
                      width: "96px",
                      height: "40px",
                      marginLeft: "12px",
                    }}
                  >
                    إضافة
                  </button>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowUserModal;
