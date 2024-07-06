import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const Navigate = useNavigate();
  const user = localStorage.getItem("token");
  useEffect(() => {
    if (!user) {
      return Navigate("/login_dashboard");
    }
  }, [user]);
  return children;
};

export default ProtectedRoute;
