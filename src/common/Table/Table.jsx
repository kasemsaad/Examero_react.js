import React from "react";
import MyButton from "../Button/Button";
import "./table.css";
import image from "../../assets/icons/MyTable/trash.svg";
function MyTable({ header, body, icons, button }) {
  let trash;
  let edit;
  let eye;
  if (icons) {
    ({ trash, edit, eye } = icons);
  }

  return (
    <table className="rounded-table">
      <thead>
        <tr>
          {header && <th>#</th>}
          {header &&
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
              <td className="icon">
                {trash && (
                  <MyButton
                    className="trash"
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      //width: "fit-content",
                      //height: "fit-content",
                    }}
                  />
                )}
                {edit && (
                  <MyButton className="square fa-regular fa-pen-to-square" />
                )}
                {eye && <MyButton className="eye fa-regular fa-eye" />}
              </td>
              <td>
                {button && (
                  <MyButton
                    className={"buttonOfTable"}
                    content={"أرسل ملحوظه"}
                  />
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default MyTable;
