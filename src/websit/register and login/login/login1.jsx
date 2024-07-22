import React, { useState, useEffect } from 'react';
import {  Col, Form, Button, Alert } from 'react-bootstrap';
import Api_website from "../../../utlis/axios_utils_websit.jsx";
import './login2.css';
import emailIcon from '../../../assets/icons/register and login icon/mail-email-icon-template-black-color-editable-mail-email-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector 2.svg';
import passIcon from '../../../assets/icons/register and login icon/pngtree-password-vector-icon-design-illustration-png-image_6597553 3.svg';
import rightCheck from '../../../assets/icons/register and login icon/check-mark-vector-free-1 1.svg';
import lockIcon from '../../../assets/icons/register and login icon/padlock-icon-lock-and-unlock-icon-design-free-vector 1.svg';
import Create_acc from '../create_acc/create_acc';
import Imgcom from '../imgcom/imgcom';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        if (name === 'email') {
            const isValid = /\S+@\S+\.\S+/.test(value);
            setIsValidEmail(isValid);
        }
    };

 
    const handleSubmit = (e) => {
        e.preventDefault();
        Api_website.post('/teachers/login', formData)
            .then((response) => {
                setLoginSuccess(true);


                localStorage.setItem('token_user', response.data.access_token);

                localStorage.setItem('user',"teacher");
                setError('');
                localStorage.setItem("sidbarId", JSON.stringify(1));
                navigate('/teacher/Home_teacher'); 

            })
            .catch((error) => {
                if(error.response.data.error){
                    setError( error.response.data.error);
                }else{
                    setError( error.response.data.message);
                }
                setLoginSuccess(false);
            });
    };
    
  

    useEffect(() => {
        let successTimer, errorTimer;

        if (loginSuccess) {
            successTimer = setTimeout(() => {
                setLoginSuccess(false);
            }, 3000);
        }

        if (error) {
            errorTimer = setTimeout(() => {
                setError('');
            }, 3000);
        }

        return () => {
            clearTimeout(successTimer);
            clearTimeout(errorTimer);
        };
    }, [loginSuccess, error]);

    return (
        <div className='collContainer'>
            <div className="login-container d-flex flex-wrap">
                <Imgcom />
                <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6} className="d-flex flex-column login-card">
                    <p className='card-title-l1 '>أدخل معلومات تسجيل الدخول  للمعلم </p>
                    <div className="header1-l1">
                        <p className='card-title between-borders1-l1'> لتحصل على جميع الخدمات</p>
                    </div>
                    <Form className="login-form" onSubmit={handleSubmit}>
                        <div className="message-container">
                            {loginSuccess && (
                                <Alert variant="success" className="green-bg">
                                    تم تسجيل الدخول بنجاح! جارٍ التوجيه إلى الصفحة الرئيسية...
                                </Alert>
                            )}
                            {error && (
                                <Alert variant="danger" className="transparent-bg">
                                    {error}
                                </Alert>
                            )}
                        </div>
                        <Form.Group controlId="email">
                            <Form.Label className='email'>البريد الإلكتروني</Form.Label>
                            <div className='relative1'>
                                <Form.Control
                                    className='p_email'
                                    type="email"
                                    placeholder="أدخل بريدك الإلكتروني"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <div className='icon-container email-icon'>
                                    <img src={emailIcon} alt="email icon" />
                                </div>
                                {isValidEmail && (
                                    <div className='icon-container check-icon'>
                                        <img src={rightCheck} alt="check icon" />
                                    </div>
                                )}
                            </div>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label className='password'>كلمة السر</Form.Label>
                            <div className='relative1'>
                                <Form.Control
                                    className='p_pass'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="أدخل كلمة السر الخاصة بك"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <div className='icon-container password-icon' onClick={() => setShowPassword(!showPassword)}>
                                    <img src={passIcon} alt="password icon" />
                                </div>
                                <div className='icon-container lock-icon' onClick={() => setShowPassword(!showPassword)}>
                                    <img src={lockIcon} alt="lock icon" />
                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group controlId="remember" className="d-flex justify-content-between align-items-center">
                            {/* <Form.Switch
                                id="custom-switch"
                                label="تذكرني"
                                className="rem_login"
                            /> */}
                            <Link to="/TeacherSendEmail" className="forgot-password">نسيت كلمة المرور؟</Link>
                        </Form.Group>
                        <Button type="submit" className="btn login_btn">تسجيل الدخول</Button>
                        <Create_acc />
                    </Form>
                </Col>
            </div>
        </div>
    );
}

export default Login;
