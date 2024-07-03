import React from "react";
import MyButton from "../Button/Button";
import "./table.css";
import image from "../../assets/icons/MyTable/trash.svg";
import { Link } from "react-router-dom";
function TablePlan({
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
  editButtonName
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
        {body&&body.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {/* {Object.values(row).map((value, cellIndex) => (
              <td key={`${rowIndex}-${cellIndex}`}>{value}</td>
            ))} */}
            <td>
             { row.id}
            </td>
            <td>
             { row.name}
            </td>
            <td>
              {row.price}
            </td>
            <td>
              {row.allow_exam}
            </td>
            <td>
              {row.allow_question
              }
            </td>
            <td>
              {row.status}
            </td>
            {toggle && (
              <td>
              </td>
            )}
            {icons && (
              <td>
                {trash && (
                  <button
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

export default TablePlan;
