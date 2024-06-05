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
      message: " قام احمد باضافة لجروب",
    },
  ];
  ////
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [isChecked, setIsChecked] = useState([]);
  const handleSelectAll = (e) => {
    setIsCheckedAll(!isCheckedAll);
    console.log(isCheckedAll);

    setIsChecked(messages.map((li) => li.id));

    if (isCheckedAll) {
      setIsChecked([]);
    }
  };
  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsChecked([...isChecked, id]);
    if (!checked) {
      setIsChecked(isChecked.filter((item) => item !== id));
    }
  };

  return (
    <>
      <div className="notification min-vh-100">
        <HeaderNotificaion />

        <div className="parent">
          <ArrowNotification />
          <div className="towButt " style={{ marginBottom: "10px" }}>
            <MyButton
              className={"btttn "}
              style={{ backgroundColor: "#0E0A43" }}
              onClick={handleSelectAll}
              content={" تحديد الكل"}
            />
            <MyButton
              className={"bttt"}
              style={{ marginRight: "10px", backgroundColor: "#0E0A43" }}
              content={"  حذف المحدد"}
            />
          </div>

          <hr />
          {messages.map(({ id, message }) => {
            console.log(message);
            return (
              <MessagesNotification
                id={id}
                handleClick={handleClick}
                message={message}
                isChecked={isChecked.includes(id)}
                key={id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notification;
