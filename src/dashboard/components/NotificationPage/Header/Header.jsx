import React from "react";
import notificationImage from "../../../../assets/icons/NotificationPage/majesticons_home-line.svg";

const HeaderNotificaion = () => {
  return (
    <>
      <div className="header ">
        <div className="not  col-sm-3">
          <div className=" mx-2 ">
            <img className=" " src={notificationImage} alt="" />
          </div>
          <div>
            <h4>الإشعارات</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderNotificaion;
