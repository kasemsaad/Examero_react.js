import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './resetpage.css';
import Imgcom from '../imgcom/imgcom';
import Create_acc from '../create_acc/create_acc';
import emailIcon from '../../../assets/icons/register and login icon/mail-email-icon-template-black-color-editable-mail-email-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector 2.svg';
import passIcon from '../../../assets/icons/register and login icon/pngtree-password-vector-icon-design-illustration-png-image_6597553 3.svg';
import rightCheck from '../../../assets/icons/register and login icon/check-mark-vector-free-1 1.svg';

function Reset_page1() {
  return (
    <div className='resetpage1'>
        
            <div className="req_code_container d-flex flex-wrap">
                <Imgcom/>
                <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6} className="d-flex flex-column reset1-card align-items-center">
                <p className='card-title-l '>أدخل معلومات تسجيل الدخول </p>
                    <div className="header1-l">
                    <p className='card-title between-borders1-l'> لتحصل على جميع الخدمات</p>
                </div>
                    
                    <Form className="reset1-form">
                        <Form.Group controlId="email">
                            <Form.Label className='req_code_email'>البريد الإلكتروني</Form.Label>
                            <div className='relative1'>
                                <Form.Control
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
                      
                      
                        <Button type="submit" className=" req_code_btn">إرسال كود عبر الإيميل</Button>
                       <Create_acc/>
                    </Form>
                </Col>
            </div>
        </div>
  );
}

export default Reset_page1;
