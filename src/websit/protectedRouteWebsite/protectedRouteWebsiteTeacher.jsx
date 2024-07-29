
// import { useEffect } from "react";
// import { useNavigate } from 'react-router-dom';

// const ProtectedRouteWebsiteTeacher = ({ children }) => {
//   const navigate = useNavigate();
//   const user = localStorage.getItem("token_user");
  
//   // useEffect(() => {
//   //   if (!user) {
//   //     return navigate("/login_teacher");
//   //   }
    
//   //   try {
//   //     const userRole = localStorage.getItem("user");
//   //     console.log("User role:", userRole);


//   //     if (userRole === "student") {
//   //       navigate("/student/homeStudentView");
//   //       console.log("Navigating to student home view");
//   //     } else if (userRole === "teacher") {
//   //       navigate("/login_teacher");
//   //       console.log("Navigating to login student");
//   //     } else {
//   //       navigate("/");
//   //       console.log("Navigating to home");
//   //     }
//   //   } catch (error) {
//   //     console.error("Invalid token", error);
//   //     navigate("/");
//   //   }
//   // }, [user, navigate]);

//   return children;
// };

// export default ProtectedRouteWebsiteTeacher;
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
