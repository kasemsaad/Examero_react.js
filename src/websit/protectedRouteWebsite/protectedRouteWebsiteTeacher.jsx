import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const Navigate = useNavigate();
  const user = localStorage.getItem("token_user");
  const userType = localStorage.getItem("user");
  useEffect(() => {
    if (!user || !userType) {
      if(userType ==="teacher"){
        return Navigate("/login_teacher");

      }
      else if(userType ==="student"){
        return Navigate("/login_student");
      }
      else{
      Navigate("/");
      }
    }
  }, [user]);
  return children;
};

export default ProtectedRoute;
