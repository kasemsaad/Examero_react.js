import React, { useState } from "react";
import "./homeLogin.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailIcon from ".././../assets/icons/register and login icon/mail-email-icon-template-black-color-editable-mail-email-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector 2.svg";
import passIcon from ".././../assets/icons/register and login icon/pngtree-password-vector-icon-design-illustration-png-image_6597553 3.svg";
import rightCheck from ".././../assets/icons/register and login icon/check-mark-vector-free-1 1.svg";
import lockIcon from ".././../assets/icons/register and login icon/padlock-icon-lock-and-unlock-icon-design-free-vector 1.svg";
import Imgcom from "./../../websit/register and login/imgcom/imgcom.jsx";
import Create_acc from "./.././../websit/register and login/create_acc/create_acc.jsx";
import axios, { Axios } from "axios";
import { Link, useNavigate } from "react-router-dom";
import Api_Dashboard from "../interceptor/interceptorDashboard.jsx";
import { useDispatch } from "react-redux";
import { ROLE } from "../../redux/Types/types.jsx";
import { fetchRoleAndImage } from "../../redux/reducer/actions/action.jsx";

function HomeDashoardLogin() {
  const navigate = useNavigate();
  const [showPass,setPass]=useState(false)

  const showPassowrd= ()=>{
  setPass((prev)=>
    !prev 
  )
  }

  
  const dispatch = useDispatch()

  let [formData, setFormdata] = useState({
    email: "",
    password: "",
  });
  let [erroralertform, setAlertForm] = useState(false);
  const getUserInput = (e) => {
    let formdata = { ...formData };
    formdata[e.target.name] = e.target.value;
    // console.log(formData)
    setFormdata(formdata);
  };
  const setId = (id) => {
    localStorage.setItem("sidbarId", JSON.stringify(id));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await Api_Dashboard.post("/login", formData)
      .then((response) => {
        localStorage.setItem("token", response.data.access_token);

        dispatch(fetchRoleAndImage());
        setId(1)

        navigate("/dashboard");
      })
      .catch((err) => {
        console.log("يرجي ادخال الايميل والباسورد بشكل صحيح", err);
        setAlertForm(true);
        setTimeout(() => setAlertForm(false), 3000);
      });
  };



  

  return (
    <div className="collContainer">
      <div className="login-container d-flex flex-wrap">
        <Imgcom />
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={6}
          xxl={6}
          className="d-flex flex-column login-card"
        >
          <p className="card-title-l1 "> معلومات تسجيل الدخول للأدمن</p>
          <div className="header1-l1">
            <p className="card-title between-borders1-l1">
              {" "}
              لتحصل على جميع الخدمات
            </p>
          </div>

          {erroralertform ? (
            <div
              class=" alert-primary "
              style={{
                backgroundColor: "#F68C8C",
                height: "41px",
                display: "flex",
                alignItems: "center",
                borderRadius: "10px",
              }}
            >
              <div
                className="d-flex "
                style={{
                  alignItems: "center",
                  marginRight: "17px",
                  width: "30vw",
                }}
              >
                <div>
                  <p
                    style={{
                      margin: "0",
                      padding: "0",
                      color: "#000000",
                      fontSize: "14px",
                      fontWeight: "600px",
                      marginRight: "10px",
                    }}
                  >
                    يرجي ادخال الايميل و الباسورد بشكل صحيح
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Group controlId="email">
              <Form.Label className="email">البريد الإلكتروني</Form.Label>
              <div className="relative1">
                <Form.Control
                  onChange={getUserInput}
                  className="p_email"
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  name="email"
                />
                <div className="icon-container email-icon">
                  <img src={emailIcon} alt="email icon" />
                </div>
                <div className="icon-container check-icon">
                  <img src={rightCheck} alt="check icon" />
                </div>
              </div>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label className="password">كلمة السر</Form.Label>
              <div className="relative1">
                <Form.Control
                  onChange={getUserInput}
                  className="p_pass"
                  type= { showPass ? "text " : "password" }
                  placeholder="أدخل كلمة السر الخاصة بك"
                  name="password"

                />
                <div className="icon-container password-icon">
                  <img src={passIcon} alt="password icon" />
                </div>
                <div className="icon-container lock-icon">
                  <img src={lockIcon} alt="lock icon"  onClick={showPassowrd}/>
                </div>
              </div>
            </Form.Group>

            <Form.Group
              controlId="remember"
              className="d-flex justify-content-between align-items-center"
            >
              <Form.Switch id="custom-switch" label="" className="rem_login" />
              <Link to="/forget_password" className="forgot-password">
                نسيت كلمة المرور؟
              </Link>
              {/* <a href="#" className="forgot-password">نسيت كلمة المرور؟</a> */}
            </Form.Group>
            <Button
              style={{ marginTop: "20px" }}
              type="submit"
              className="btn login_btn"
            >
              تسجيل الدخول
            </Button>
            <Link to="/">
            <Button
              style={{ marginTop: "20px" , marginRight:"10px"}}
              type="submit"
              className="btn login_btn"
            >
              العوده الي الموقع 
            </Button>
            </Link>


            {/* <Create_acc /> */}
          </Form>
        </Col>
      </div>
    </div>
  );
}

export default HomeDashoardLogin;
