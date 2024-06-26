import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";
import LadingComponent from "../../../LoadingComponent/LodingComponent";
import { json } from "react-router-dom";
import "./SowUser.css";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
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
                عرض بيانات{content}
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
              style={{ height: "288px", flexDirection: "column " }}
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
                        First
                      </th>
                      <th className="td-show-mod2" scope="col">
                        Handle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="td-show-mod">Mark</td>
                      <td className="td-show-mod2">@mdo</td>
                    </tr>
                    <tr>
                      <td className="td-show-mod">Mark</td>
                      <td className="td-show-mod2">@mdo</td>
                    </tr>
                    <tr>
                      <td className="td-show-mod">Jacob</td>
                      <td className="td-show-mod2">@fat</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div
                style={{ alignItems: "flex-start" }}
                className="modal-footer-new new-footer"
              >
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowUserModal;
