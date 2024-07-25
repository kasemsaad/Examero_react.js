
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";  // Correct import statement

const ProtectedRouteWebsiteTeacher = ({ children }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("token_user");
  const token = localStorage.getItem("token_user");

  useEffect(() => {
    if (!user) {
      return navigate("/login_teacher");
    }

    try {
      const decodedToken = jwtDecode(token);
      const userRole = decodedToken.role; // Assuming the token has a 'role' field

      console.log("User role:", userRole);

      if (userRole === "student") {
        navigate("/student/homeStudentView");
        console.log("Navigating to student home view");
      } else if (userRole === "teacher") {
        navigate("/login_student");
        console.log("Navigating to login student");
      } else {
        navigate("/");
        console.log("Navigating to home");
      }
    } catch (error) {
      console.error("Invalid token", error);
      navigate("/");
    }
  }, [user, navigate]);

  return children;
};

export default ProtectedRouteWebsiteTeacher;
