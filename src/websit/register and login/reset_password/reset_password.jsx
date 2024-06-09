

import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './reset_password.css';
import Imgcom from '../imgcom/imgcom';
import Create_acc from '../create_acc/create_acc';
import emailIcon from '../../../assets/icons/register and login icon/mail-email-icon-template-black-color-editable-mail-email-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector 2.svg';
import rightCheck from '../../../assets/icons/register and login icon/check-mark-vector-free-1 1.svg';

function Reset_code_page() {
  return (
    <div className='reset_code_page'>
            <div className="Reset_code_page d-flex flex-wrap">
                <Imgcom/>
                <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6} className="d-flex flex-column reset1-card align-items-center">
                <p className='card-title-l2 '>أدخل معلومات تسجيل الدخول </p>
                    <div className="header1-l2">
                    <p className='card-title2 between-borders1-l2'> لتحصل على جميع الخدمات</p>
                </div>
                    <Form className=".reset_code-form">
                        <Form.Group controlId="email">
                            <Form.Label className='reset_code_email'>أدخل الكود المرسل إلى الإيميل</Form.Label>
                            <div className='relative1'>
                                <Form.Control
                                    className='p_code'
                                    type="text"
                                    placeholder="أدخل الكود "
                                    name="code"
                                />
                                <div className='icon-container email-icon'>
                                    <img src={emailIcon} alt="email icon" />
                                </div>
                                <div className='icon-container check-icon'>
                                    <img src={rightCheck} alt="check icon" />
                                </div>
                            </div>
                        </Form.Group>
                      
                      
                        <Button type="submit" className=" reset_code_btn">إرسال</Button>
                       <Create_acc/>
                    </Form>
                </Col>
            </div>
        </div>
  );
}

export default Reset_code_page;
