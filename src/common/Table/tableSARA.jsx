import React from "react";
import MyButton from "../Button/Button";
import "./table.css";
import image from "../../assets/icons/MyTable/trash.svg";
import ToggledButton from "../../dashboard/components/ToggledButton/ToggledButton";
import { Link } from "react-router-dom";

function MyTable2({
  header,
  body,
  icons,
  other,
  deleteModalName,
  editButtonName,
  handelShow,
  showItem,
  togellValue,
  handelEdit,
  handelDeleteItem,
  classIds,
  handelMessage,
  sendMessage,
}) {
  const { trash, edit, eye } = icons || {};
  const { toggle, butt, imag, checkbox } = other || {};

  return (
    <>
      {body && body.length > 0 ? (
        <table className="my-rounded-table-ta">
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
                {Object.entries(row).map(([key, value], cellIndex) => {
                  if (key !== 'id') { // Exclude 'id' from rendering
                    return <td key={`${rowIndex}-${cellIndex}`}>{value}</td>;
                  }
                  return null;
                })}

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
                        className="trash-but"
                        data-bs-toggle="modal"
                        data-bs-target={deleteModalName}
                        onClick={() => {
                          handelDeleteItem(row.id);
                        }}
                      >
                        <img src={image} className="trash" alt="" />
                      </button>
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

                    {eye && (
                      <MyButton
                        databstoggle="modal"
                        databstarget={showItem}
                        onClick={() => {
                          handelShow(row);
                        }}
                        className="eye fa-regular fa-eye"
                      />
                    )}
                  </td>
                )}
                {butt && (
                  <td>
                    <MyButton
                      onClick={() => {
                        handelMessage(row.id);
                      }}
                      databstoggle="modal"
                      databstarget={sendMessage}
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
      ) : (
        <div style={{ color: "red", fontSize: "24px", textAlign: "center" }}>
          لايوجد بيانات للعرض
        </div>
      )}
    </>
  );
}

export default MyTable2;