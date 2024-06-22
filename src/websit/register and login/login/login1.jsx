import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import request from "../../../utlis/axios_utils_websit.jsx";
import './login2.css';
import emailIcon from '../../../assets/icons/register and login icon/mail-email-icon-template-black-color-editable-mail-email-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector 2.svg';
import passIcon from '../../../assets/icons/register and login icon/pngtree-password-vector-icon-design-illustration-png-image_6597553 3.svg';
import rightCheck from '../../../assets/icons/register and login icon/check-mark-vector-free-1 1.svg';
import lockIcon from '../../../assets/icons/register and login icon/padlock-icon-lock-and-unlock-icon-design-free-vector 1.svg';
import Create_acc from '../create_acc/create_acc';
import Imgcom from '../imgcom/imgcom';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await request({
                method: 'post',
                url: '/teachers/login',
                data: formData,
                headers: {
                    Accept: 'application/json',
                },
            });
            console.log(response.data); 
            setError(''); 
        } catch (error) {
            console.error(error); 
            if (error.response && error.response.data) {
                setError(error.response.data.message || 'An error occurred while logging in.');
            } else {
                setError('An error occurred while logging in.');
            }
        }
    };

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError('');
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [error]);

    return (
        <div className='collContainer'>
            <div className="login-container d-flex flex-wrap">
                <Imgcom />
                <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6} className="d-flex flex-column login-card">
                    <p className='card-title-l1 '>أدخل معلومات تسجيل الدخول </p>
                    <div className="header1-l1">
                        <p className='card-title between-borders1-l1'> لتحصل على جميع الخدمات</p>
                    </div>
                    <Form className="login-form" onSubmit={handleSubmit}>
                        {error && <Alert variant="danger">{error}</Alert>}
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
                                <div className='icon-container check-icon'>
                                    <img src={rightCheck} alt="check icon" />
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label className='password'>كلمة السر</Form.Label>
                            <div className='relative1'>
                                <Form.Control
                                    className='p_pass'
                                    type="password"
                                    placeholder="أدخل كلمة السر الخاصة بك"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
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

export default Login;
