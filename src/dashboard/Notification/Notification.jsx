import React, { useState } from "react";
import "./Notificaion.css";
import HeaderNotificaion from "../components/NotificationPage/Header/Header";
import ArrowNotification from "../components/NotificationPage/Arrow/Arrow";
import MessagesNotification from "../components/NotificationPage/messages/messages";
import Checkbox from "../components/NotificationPage/Checkbox/Checkbox";
import MyButton from "../../common/Button/Button";

const Notification = () => {
  let messages = [
    {
      id: 1,
      message: " قام احمد باضافة راضي الى الجروب",
    },
    {
      id: 2,
      message: " قام احمد باضافة راضي الى الجروب",
    },
    {
      id: 3,
      message: " قام احمد باضافة راضي الى الجروب",
    },
    {
      id: 4,
      message: " قام احمد باضافة راضي الى الجروب",
    },
    {
      id: 5,
      message: " قام احمد باضافة راضي الى الجروب",
    },
    {
      id: 6,
      message: " قام احمد باضاف",
    },
    {
      id: 7,
      message: " قام احمد باضاف",
    },
    {
      id: 8,
      message: " قام احمد باضاف",
    },
  ];
  ////
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [isChecked, setIsChecked] = useState([]);
  const [deleteCheckedItem, setDeleteCheckedItem] = useState([...messages]);
  const handleSelectAll = (e) => {
    setIsCheckedAll(!isCheckedAll);

    setIsChecked(messages.map((li) => li.id));

    if (isCheckedAll) {
      setIsChecked([]);
    }
  };
  const handleClick = (e) => {
    const { id, checked } = e.target;
    console.log(e.target.checked);
    setIsChecked([...isChecked, checked, id]);
    console.log(" in the function" + isChecked);

    if (checked) {
      // Add the id to the array if it's checked
      setIsChecked((prev) => [...prev, id]);
    } else {
      // Remove the id from the array if it's unchecked
      setIsChecked((prev) => prev.filter((item) => item !== id));
    }
  };
  const handeleDelete = (e) => {
    const { id } = e.target;
    setDeleteCheckedItem((prevMeseages) =>
      prevMeseages.filter((message) => !isChecked.includes(message.id))
    );
    console.log(isChecked);
  };
  const check = isChecked.length;
  console.log(deleteCheckedItem);
  return (
    <>
      <div className="notification min-vh-100">
        <HeaderNotificaion />

        <div className="parent">
          <ArrowNotification />
          {check > 0 && (
            <div className="towButt " style={{ marginBottom: "10px" }}>
              <MyButton
                className={"btttn "}
                style={{ backgroundColor: "#0E0A43" }}
                onClick={handleSelectAll}
                content={" تحديد الكل"}
              />
              <MyButton
                className={"bttt"}
                onClick={handeleDelete}
                style={{ marginRight: "10px", backgroundColor: "#0E0A43" }}
                content={"  حذف المحدد"}
              />
            </div>
          )}

          <hr />

          {deleteCheckedItem.map(({ id, message }) => {
            return (
              <MessagesNotification
                key={id}
                id={id}
                Checkbox={"checkbox"}
                handleClick={handleClick}
                name={message}
                isChecked={isChecked.includes(id)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notification;
