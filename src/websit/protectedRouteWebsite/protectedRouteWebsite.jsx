import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const ProtectedRouteWebsite = ({ children }) => {
  const Navigate = useNavigate();
  const user = localStorage.getItem("token_user");
  useEffect(() => {
    if (!user) {
      return Navigate("/login_student");
    }
  }, [user]);
  return children;
};


export default ProtectedRouteWebsite;
