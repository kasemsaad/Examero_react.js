// import { useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from "jwt-decode";  // Correct import statement

// const ProtectedRouteWebsiteTeacher = ({ children }) => {
//   const navigate = useNavigate();
//   const user = localStorage.getItem("token_user");
//   // const token = localStorage.getItem("token_user");
//   const users = localStorage.getItem("user");

//   useEffect(() => {
//     if (!user) {

//       try {
//         // const decodedToken = jwtDecode(user);
//         // const userRole = decodedToken.role; // Assuming the token has a 'role' field
//         // console.log("User role:", userRole);
//         if (user === "student") {
//           navigate("/login_student");
//           console.log("Navigating to student home view");
//         } else if (user === "teacher") {
//           navigate("/login_teacher");
//           console.log("Navigating to login student");
//         } else {
//           navigate("/");
//           console.log("Navigating to home");
//         }
//       } catch (error) {
//         console.error("Invalid token", error);
//         navigate("/");
//       }    
//     }

    
//   }, [user, navigate]);

//   return children;
// };

// export default ProtectedRouteWebsiteTeacher;

import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { isTokenExpired } from '../../utlis/auth';

const ProtectedRouteWebsiteTeacher = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token_user");

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (token) {
      if (isTokenExpired(token)) {
        localStorage.removeItem('token_user');

        try {
          if (user === "student") {
            navigate("/login_student");
            console.log("Navigating to student login");
          } else if (user === "teacher") {
            navigate("/login_teacher");
            console.log("Navigating to teacher login");
          } else {
            navigate("/");
            console.log("Navigating to home");
          }
        } catch (error) {
          console.error("Error navigating:", error);
          navigate("/");
        }
      }
    } else {
      navigate("/");
      console.log("No token found, navigating to login");
    }
  }, [token, navigate]);

  return children;
}

export default ProtectedRouteWebsiteTeacher;

