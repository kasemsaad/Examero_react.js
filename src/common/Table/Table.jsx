import React from "react";
import MyButton from "../Button/Button";
import "./table.css";
import image from "../../assets/icons/MyTable/trash.svg";
import ToggledButton from "../../dashboard/components/ToggledButton/ToggledButton";
import { Link } from "react-router-dom";
import AddOrEditModal from "../../dashboard/components/Modal/AddOrEditModal/AddOrEdite";
function MyTable({
  header,
  body,
  icons,
  other,
  handelDelete,
  handelEdit,
  handelEye,
  handelNot,
}) {
  const { trash, edit, eye } = icons || {};
  const { toggle, butt, imag, checkbox } = other || {};

  return (
    <table className="rounded-table">
      <AddOrEditModal />
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
            {Object.values(row).map((value, cellIndex) => (
              <td key={`${rowIndex}-${cellIndex}`}>{value}</td>
            ))}

            {toggle && (
              <td>
                <ToggledButton />
              </td>
            )}
            {icons && (
              <td>
                {trash && (
                  <button
                    type="button"
                    className=" trash"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    data-whatever="@mdo"
                  >
                    <img src={image} className="trash" alt="" />
                  </button>
                  // <button className="trash">

                  // </button>
                )}
                {edit && (
                  <MyButton
                    onClick={handelEdit}
                    className="square fa-regular fa-pen-to-square"
                  />
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

export default MyTable;
