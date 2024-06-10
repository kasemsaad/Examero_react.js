import React, { useState } from "react";
import MyTitle from "../MyTitle";

function Login() {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const [userData, setUserData] = useState({
    Password: "",
    Email: "",
  });
  const [errors, setErrors] = useState({
    emailErrors: "",
    passwordError: "",
    emailValid: true,
  });
  const changeData = (e) => {
    if (e.target.name == "Email") {
      setUserData({
        ...userData,
        Email: e.target.value,
      });

      setErrors({
        ...errors,
        emailErrors:
          e.target.value.length == 0
            ? "this field is required"
            : reg.test(e.target.value) == false && "enter valid email",
      });
    }
    if (e.target.name == "Password") {
      setUserData({
        ...userData,
        Password: e.target.value,
      });
      setErrors({
        ...errors,
        passwordError:
          e.target.value.length == 0
            ? "this field is required"
            : e.target.value.length < 8 &&
              "the password should be at least 8 characters",
      });
    }
  };
  return (
    <>
      <MyTitle test="Login" />

      <div className=" d-flex vh-100 justify-content-center  align-content-center flex-wrap">
        <form className="col-6 form-group">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={userData.Email}
              name="Email"
              onChange={(e) => changeData(e)}
              className={`form-control ${
                errors.emailErrors && "border-danger"
              }`}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <p className="text-danger">{errors.emailErrors}</p>
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3 ">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="Password"
              value={userData.Password}
              onChange={(e) => changeData(e)}
              className="form-control"
              id="exampleInputPassword1"
            />
            <p className="text-danger">{errors.passwordError}</p>
          </div>
          <div className="mb-3 form-check ">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            disabled={errors.emailErrors || errors.passwordError}
            type="submit"
            className="btn btn-primary  "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default Login;
