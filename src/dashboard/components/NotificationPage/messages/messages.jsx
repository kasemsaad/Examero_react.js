import MyButton from "../../../../common/Button/Button";
import Checkbox from "../Checkbox/Checkbox";

const MessagesNotification = ({ message, id, handleClick, isChecked }) => {
  return (
    <>
      <div className="message mb-1  d-flex justify-content-between ">
        <div className="d-flex col-10">
          <div className="col-1  checkB">
            <Checkbox
              className={"bg-danger"}
              Checkbox={"checkbox"}
              handleClick={handleClick}
              id={id}
              key={id}
              isChecked={isChecked}
              message={message}
            />
            {/* <input type="checkbox" className="w-100 " /> */}
          </div>
          <div className="content col-10 ">
            <p className=" col-12  d-flex d-flex ">{message}</p>
          </div>
        </div>

        <div className=" h-100  text-center justify-content-center align-content-center icon">
          <MyButton className={"fa-regular fa-eye m-auto  w-100 col-1 "} />
        </div>
      </div>
    </>
  );
};

export default MessagesNotification;
