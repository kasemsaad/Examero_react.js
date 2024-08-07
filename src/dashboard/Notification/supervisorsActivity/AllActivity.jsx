import React, { useEffect } from "react";
import Notification from "../Notification";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const AllActivity = () => {
  const navigate = useNavigate()
  const role = useSelector((state) => state.RoleAccess.role); 
  const acccessDenied = ()=>{
      if (role != "owner"){
          navigate('/dashboard/accessDenied')
      }
  }
  useEffect(()=>{
      acccessDenied()
  },[])
  const all = true;
  return <Notification api={"/activity"} all={all} />;
};

export default AllActivity;
