import React from "react";
import Notification from "../Notification";
const MangersActivity = () => {
  const man = true;
  return <Notification api={"/activity/manager"} man={man} />;
};

export default MangersActivity;
