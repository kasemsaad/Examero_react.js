import React from "react";
import Notification from "../Notification";
const AllActivity = () => {
  const all = true;
  return <Notification api={"/activity"} all={all} />;
};

export default AllActivity;
