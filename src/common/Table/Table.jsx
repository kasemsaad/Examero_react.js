import MyButton from "../Button/Button";
import "./table.css";
import image from "../../assets/icons/MyTable/trash.svg";
import ToggledButton from "../../dashboard/components/ToggledButton/ToggledButton";
import { Link } from "react-router-dom";
import { useState } from "react";
function MyTable({
  header,
  body,
  icons,
  other,
  deleteModalName,
  editButtonName,

  togellValue,
  handelEdit,
  handelDeleteItem,
}) {
  const { trash, edit, eye } = icons || {};
  const { toggle, butt, imag, checkbox } = other || {};
  return (
    <table className="my-rounded-table-all">
      <thead>
        <tr>
          <th>#</th>
          {body &&
            Object.values(header).map((element, index) => (
              <th key={index}>{element}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {body &&
          body.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, cellIndex) => (
                <td key={`${rowIndex}-${cellIndex}`}>{value}</td>
              ))}

              {toggle && togellValue && (
                <td>
                  <ToggledButton togel={togellValue[rowIndex].status} />
                </td>
              )}
              {icons && (
                <td>
                  {trash && (
                    <button
                      type="button"
                      className=" trash"
                      data-bs-toggle="modal"
                      data-bs-target={deleteModalName}
                      onClick={() => {
                        handelDeleteItem(row.id);
                      }}
                    >
                      <img src={image} className="trash" alt="" />
                    </button>
                    // <button className="trash">

                    // </button>
                  )}
                  {edit && (
                    <button
                      type="button"
                      onClick={() => {
                        handelEdit(row);
                      }}
                      data-bs-toggle="modal"
                      data-bs-target={editButtonName}
                      className="square fa-regular fa-pen-to-square"
                    ></button>
                  )}
                  {eye && <MyButton className="eye fa-regular fa-eye" />}
                </td>
              )}
              {butt && (
                <td>
                  <MyButton
                    // onClick={(e) => {
                    //   handelEditItem(row);
                    // }}
                    // dataBsToggle="modal"
                    // dataBsTarget={editButtonName}
                    className={"buttonOfTable"}
                    content={"أرسل ملحوظه"}
                  />
                </td>
              )}
              {imag && (
                <td>
                  <Link
                    style={{ textDecoration: "underline", color: "#FE4F60" }}
                  >
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
