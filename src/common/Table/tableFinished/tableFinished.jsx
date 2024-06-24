import React from "react";
// import MyButton from "../../Button/Button";
import MyButton from "../../Button/Button";
import image from "../../../assets/icons/MyTable/trash.svg";
import { Link } from "react-router-dom";
// import './tableOpenEmis.css'
function TableFinishedEmis({
  header,
  body,
  icons,
  other,
  handelDelete,
  handelEdit,
  handelEye,
  handelNot,
  delet,
  delteModalName,
  editButtonName,
  handel,
  Deletehandel
}) {
  const { trash, edit, eye } = icons || {};
  const { toggle, butt, imag, checkbox } = other || {};

  return (
    <table className="rounded-table">
      {/* <DeleteAnItem /> */}
      {/* <AddOrEditModal /> */}

      <thead>
        <tr>
          <th>#</th>
          {Object.values(header).map((element, index) => (
            <th key={index}>{element}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {/* {Object.values(row).map((value, cellIndex) => (
              <td key={`${rowIndex}-${cellIndex}`}>{value}</td>
            ))} */}

            <td>
                <input type="checkbox" name="" id="" />
             
            </td>

            <td>
             { row.user_name
             }
            </td>
            <td>
              {row.password}
            </td>
            <td>
              {row.teacher.phone_number}
            </td>
            <td>
              {row.group}
            </td>
            <td>
              {row.subject
              }
            </td>
            {/* <td>
              {row.status  == 1 ?<button className="btn btn-success">مفعل</button>:<button className="btn btn-danger" style={{backgroundColor:"#FE4F60"}}> غير مفعل</button>}
            </td> */}

            <td>
              {row.ImagePath === null ? <p style={{margin:"0",padding:"0"}}>لا يوجد مستند</p>: row.ImagePath}
            </td>

            {toggle && (
              <td>
              </td>
            )}
            {icons && (
              <td>
                {trash && (
                  <button
                  onClick={()=>Deletehandel(row)}
                    type="button"
                    className=" trash"
                    data-bs-toggle="modal"
                    data-bs-target={delteModalName}
                    data-whatever="@mdo"
                  >
                    <img src={image} className="trash" alt="" />
                  </button>
                  // <button className="trash">

                  // </button>
                )}
                {edit && (
                  <button
                  onClick={()=>handel(row)}
                  type="button"
                  
                  data-bs-toggle="modal"
                  data-bs-target={editButtonName}

                    className="square fa-regular fa-pen-to-square"
                  ></button>
                )}
                {eye && (
                  <MyButton
                    onClick={handelEye}
                    className="eye fa-regular fa-eye"
                  />
                )}
              </td>
            )}
            {butt && (
              <td>
                <MyButton
                  onClick={handelNot}
                  className={"buttonOfTable"}
                  content={"أرسل ملحوظه"}
                />
              </td>
            )}
            {imag && (
              <td>
                <Link style={{ textDecoration: "underline", color: "#FE4F60" }}>
                  تحميل
                </Link>
              </td>
            )}
            {checkbox && (
              <td>
                <input type="checkbox" />
              </td>
            )}
            {checkbox && (
              <td>
                <input type="checkbox" />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableFinishedEmis;
