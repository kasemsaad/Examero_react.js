import React from "react";
import notificationImage from "../../../../assets/icons/NotificationPage/majesticons_home-line.svg";

const HeaderNotificaion = ({ content }) => {
  return (
    <>
      <div className="header-notify ">
        <div className="notify-ico  col-sm-3">
          <div className=" mx-2 ">
            <img className=" " src={notificationImage} alt="" />
          </div>
          <div>
            <h4>{content}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderNotificaion;
