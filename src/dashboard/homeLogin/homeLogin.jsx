
import React, { useState } from 'react';
import "./homeLogin.css"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailIcon from '.././../assets/icons/register and login icon/mail-email-icon-template-black-color-editable-mail-email-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector 2.svg';
import passIcon from '.././../assets/icons/register and login icon/pngtree-password-vector-icon-design-illustration-png-image_6597553 3.svg';
import rightCheck from '.././../assets/icons/register and login icon/check-mark-vector-free-1 1.svg';
import lockIcon from '.././../assets/icons/register and login icon/padlock-icon-lock-and-unlock-icon-design-free-vector 1.svg';
import Imgcom from './../../websit/register and login/imgcom/imgcom.jsx';
import Create_acc from './.././../websit/register and login/create_acc/create_acc.jsx';
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router-dom';


function HomeDashoardLogin() {

    const navigate = useNavigate();

    let [formData, setFormdata] = useState({
        email: '', password: ''
    })
    let [erroralertform, setAlertForm] = useState(false)

    const getUserInput = (e) => {
        let formdata = { ...formData }
        formdata[e.target.name] = e.target.value
        // console.log(formData)
        setFormdata(formdata)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://127.0.0.1:8000/api_dashboard/login", formData, {
            Headers: {
                'Accept': 'application/json',
            }
        }).then((response) => {
            if (response.data.user.role_name === "owner") {
                setAlertForm(false)

                navigate('/dashboard/h')
            } else {
            }
        }).catch((err) => {
            setAlertForm(true)
        })
    }

    return (
        <div className='collContainer'>
            <div className="login-container d-flex flex-wrap">
                <Imgcom />
                <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6} className="d-flex flex-column login-card">
                    <p className='card-title-l1 '>أدخل معلومات تسجيل الدخول </p>
                    <div className="header1-l1">
                        <p className='card-title between-borders1-l1'> لتحصل على جميع الخدمات</p>
                        {erroralertform ? < p style={{color:"red"}}>erorsssssssssssssssssssssss</p> : ""}
                    </div>
                    <Form onSubmit={handleSubmit} className="login-form">
                        <Form.Group controlId="email">
                            <Form.Label className='email'>البريد الإلكتروني</Form.Label>
                            <div className='relative1'>
                                <Form.Control
                                    onChange={getUserInput}
                                    className='p_email'
                                    type="email"
                                    placeholder="أدخل بريدك الإلكتروني"
                                    name="email"
                                />
                                <div className='icon-container email-icon'>
                                    <img src={emailIcon} alt="email icon" />
                                </div>
                                <div className='icon-container check-icon'>
                                    <img src={rightCheck} alt="check icon" />
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label className='password'>كلمة السر</Form.Label>
                            <div className='relative1'>
                                <Form.Control
                                    onChange={getUserInput}
                                    className='p_pass'
                                    type="password"
                                    placeholder="أدخل كلمة السر الخاصة بك"
                                    name="password"
                                />
                                <div className='icon-container password-icon'>
                                    <img src={passIcon} alt="password icon" />
                                </div>
                                <div className='icon-container lock-icon'>
                                    <img src={lockIcon} alt="lock icon" />
                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group controlId="remember" className="d-flex justify-content-between align-items-center">
                            <Form.Switch
                                id="custom-switch"
                                label="تذكرني"
                                className="rem_login"
                            />
                            <a href="#" className="forgot-password">نسيت كلمة المرور؟</a>
                        </Form.Group>
                        <Button type="submit" className="btn login_btn">تسجيل الدخول</Button>
                        <Create_acc />
                    </Form>
                </Col>
            </div>
        </div>
    );
}

export default HomeDashoardLogin;
