import React, { useEffect } from "react";
import Notification from "../Notification";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const MangersActivity = () => {
  const navigate = useNavigate()
  const role = useSelector((state) => state.RoleAccess.role); 
  const acccessDenied = ()=>{
      if (role != "manager" || role !="owner"){
          navigate('/dashboard/accessDenied')
      }
  }
  useEffect(()=>{
      acccessDenied()
  },[])
  const man = true;
  return <Notification api={"/activity/manager"} man={man} />;
};

export default MangersActivity;
