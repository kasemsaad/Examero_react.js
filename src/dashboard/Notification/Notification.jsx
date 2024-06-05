import React from "react";
import "./Notificaion.css";
import HeaderNotificaion from "../components/NotificationPage/Header";
import ArrowNotification from "../components/NotificationPage/Arrow";
import MessagesNotification from "../components/NotificationPage/messages";

const Notification = () => {
  let messages = {
    message1: " قام احمد باضافة راضي الى الجروب",
    message2: " قام احمد باضافة راضي الى الجروب",
    message3: " قام احمد باضافة راضي الى الجروب",
    message4: " قام احمد باضافة راضي الى الجروب",
    message6: " قام احمد باضافة راضي الى الجروب",
    message7: " قام احمد باضافة راضي الى الجروب",
    message8: " قام المشرف هشام بإضافة المعلم على محمد",
    message9: " قام احمد باضافة راضي الى الجروب",
  };
  return (
    <>
      <div className="notification min-vh-100">
        <HeaderNotificaion />

        <div className="parent">
          <ArrowNotification />

          <hr />
          {Object.values(messages).map((message, index) => {
            console.log(message);
            return <MessagesNotification key={index} message={message} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notification;
