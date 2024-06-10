import React, { useEffect, useState } from "react";
import MyTitle from "../MyTitle";

function SignUP() {
  const [showPassword, setShowPassword] = useState(false);
  var x = [1];
  const [users, setUsers] = useState([]);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [userData, setData] = useState({
    name: "",
    Email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [userError, setUserError] = useState({
    errorName: "",
    emailErrors: "",
    userNameError: "",
    passwordError: "",
    confirmError: "",
  });
  const [hasError, setHasError] = useState(false); // State to track if there are errors

  ////////////////////////////////////////////////////////////////////////

  const changeData = (e) => {
    const { name, value } = e.target;
    setData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
    if (e.target.name === "username") {
      setData({
        ...userData,
        name: e.target.value,
      });
      setUserError({
        ...userError,
        errorName: e.target.value.length === 0 && "this filed is required",
      });
    }
    if (e.target.name === "userName") {
      setData({
        ...userData,
        userName: e.target.value,
      });
      setUserError({
        ...userError,
        userNameError:
          e.target.value.length === 0
            ? "this filed is required"
            : e.target.value.length < 4 &&
              "the password must be more than 3 char",
      });
    }

    //////////////////////////////////////////////////////////
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (e.target.name === "email") {
      setData({
        ...userData,
        Email: e.target.value,
      });
      setUserError({
        ...userError,
        emailErrors:
          e.target.value.length === 0
            ? "this field is required"
            : reg.test(e.target.value) == false && "enter valid email",
      });
    }
    const reqPasswored =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (e.target.name == "password") {
      setData({
        ...userData,
        password: e.target.value,
      });
      setUserError({
        ...userData,
        passwordError:
          e.target.value.length === 0
            ? "this field is required"
            : e.target.value.length < 8
            ? "the password must be more than 8 char"
            : reqPasswored.test(e.target.value) == false &&
              "the password contains at least one lowercase  one uppercase  at least one digit and special character",
      });
    }
    ////////////////////////////////////////
    if (e.target.name === "confirmPassword") {
      setData({
        ...userData,
        confirmPassword: e.target.value,
      });
      setUserError({
        ...userData,
        confirmError:
          e.target.value.length === 0
            ? "this field is required"
            : e.target.value !== userData.password &&
              " the confirmation password must be mached to the password",
      });
    }

    setHasError(
      !!(
        userError.errorName ||
        userError.emailErrors ||
        userError.userNameError ||
        userError.passwordError ||
        userError.confirmError
      )
    );
  };
  const [items, setItems] = useState([""]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userData);
    const updatedItems = [...items, userData];

    setItems(updatedItems);

    localStorage.setItem("user", JSON.stringify(updatedItems));
  };

  return (
    <div className="container">
      <MyTitle test="Sign up" />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            value={userData.name}
            onChange={(e) => changeData(e)}
            type="text"
            className="form-control"
            id="userName"
            name="username"
          />
        </div>
        <p className="text-danger">{userError.errorName}</p>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            value={userData.Email}
            name="email"
            onChange={(e) => changeData(e)}
            className={`form-control ${
              userError.emailErrors && "border-danger"
            }`}
            id="email"
          />
        </div>
        <p className="text-danger">{userError.emailErrors}</p>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="password"
              name="password"
              value={userData.password}
              onChange={(e) => changeData(e)}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <p className="text-danger">{userError.passwordError}</p>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            value={userData.userName}
            onChange={(e) => changeData(e)}
            id="name"
            name="userName"
          />
        </div>
        <p className="text-danger">{userError.userNameError}</p>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            value={userData.confirmPassword}
            onChange={(e) => changeData(e)}
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
          />
        </div>
        <p className="text-danger">{userError.confirmError}</p>

        <button to="/" type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUP;
