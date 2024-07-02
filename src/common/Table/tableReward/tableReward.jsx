import React from "react";
import MyButton from "../../Button/Button";
import image from "../../../assets/icons/MyTable/trash.svg";
import { Link } from "react-router-dom";
import './tableReward.css'

function TableReward({
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
  Deletehandel,
  flag,
  checkboxHandler,
  dataCheckedRender,
  checkAllBoxHandler,
  flagAdmin,
  flagTeacher
}) {
  const { trash, edit, eye } = icons || {};
  const { toggle, butt, imag, checkbox } = other || {};

  return (
    <form>
      <table className="rounded-table-re">
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
              {flagAdmin ? (
                <>
                  <td>
                    <input
                      type="checkbox"
                      name="adminIds"
                      value={row.admin_id}
                      checked={dataCheckedRender.includes(row.admin_id)}
                      onChange={checkboxHandler}
                    />
                  </td>
                  <td>{row.admin.first_name}</td>
                  <td>{row.admin.phone_number}</td>
                  <td>{row.reward_points}</td>
                  <td>{row.punishment_points}</td>
                  <td>{row.warning_points}</td>
                </>
              ) : (
                <>
                  <td>
                    <input
                      type="checkbox"
                      name="teacherIds"
                      value={row.teacher_id}
                      checked={dataCheckedRender.includes(row.teacher_id)}
                      onChange={checkboxHandler}
                    />
                  </td>
                  <td>{row.teacher.first_name}</td>
                  <td>{row.teacher.phone_number}</td>
                  <td>{row.reward_points}</td>
                  <td>{row.warning_points}</td>
                </>
              )}

              {toggle && <td></td>}
              {icons && (
                <td>
                  {trash && (
                    <button
                      onClick={() => Deletehandel(row)}
                      type="button"
                      className="trash"
                      data-bs-toggle="modal"
                      data-bs-target={delteModalName}
                      data-whatever="@mdo"
                    >
                      <img src={image} className="trash" alt="" />
                    </button>
                  )}
                  {edit && (
                    <button
                      onClick={() => handel(row)}
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
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
}

export default TableReward;
