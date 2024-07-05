import React from "react";
import MyButton from "../../../../common/Button/Button";

const MessagesNotification = ({
  not,
  handleChange,
  isChecked,
  isCheckedAll,
}) => {
  return (
    <div className="message mb-1  d-flex justify-content-between ">
      <div className="d-flex col-10">
        <div className="col-1  checkB">
          <input
            className="bg-danger"
            type="checkbox"
            id={not.id}
            checked={isChecked.includes(not.id)}
            onChange={handleChange}
          />
        </div>
        <div className="content-notify col-10 ">
          <p className=" col-12  d-flex d-flex ">{not.description}</p>
        </div>
      </div>

      <div className=" h-100  text-center justify-content-center align-content-center icon-notify">
        <MyButton className={"fa-regular fa-eye m-auto  w-100 col-1 "} />
      </div>
    </div>
  );
};

export default MessagesNotification;
