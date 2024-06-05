import MyButton from "../../../common/Button/Button";

const MessagesNotification = ({ message }) => {
  return (
    <>
      <div className="message mb-3  d-flex justify-content-between ">
        <div className="d-flex col-10">
          <div className="col-1  checkB">
            <input type="checkbox" className="w-100 " />
          </div>
          <div className="content col-10 ">
            <p className=" col-12  d-flex d-flex ">{message}</p>
          </div>
        </div>
        <div className="col-sm-1 icon">
          <MyButton className={"fa-regular fa-eye m-auto"} />
        </div>
      </div>
    </>
  );
};

export default MessagesNotification;
