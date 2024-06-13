import React from "react";
import MyButton from "../Button/Button";
import "./table.css";
import image from "../../assets/icons/MyTable/trash.svg";
import ToggledButton from "../../dashboard/components/ToggledButton/ToggledButton";
function MyTable({
  header,
  body,
  icons,

  handelDelete,
  handelEdit,
  handelEye,
  handelNot,
}) {
  const { trash, edit, eye, toggle, butt } = icons;

  return (
    <table className="rounded-table">
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
            <td>
              {trash && (
                <button onClick={handelDelete} className="trash">
                  <img src={image} className="trash" alt="" />
                </button>
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
            {butt && (
              <td>
                <MyButton
                  onClick={handelNot}
                  className={"buttonOfTable"}
                  content={"أرسل ملحوظه"}
                />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MyTable;
