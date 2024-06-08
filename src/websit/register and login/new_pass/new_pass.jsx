
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './new_pass.css';
import passIcon from '../../../assets/icons/register and login icon/pngtree-password-vector-icon-design-illustration-png-image_6597553 3.svg';
import lockIcon from '../../../assets/icons/register and login icon/padlock-icon-lock-and-unlock-icon-design-free-vector 1.svg';
import Create_acc from '../create_acc/create_acc';
import Imgcom from '../imgcom/imgcom';

function New_pass() {
    
    return (
        <div className='new_pass'>
            <div className="new_pass d-flex flex-wrap">
                <Imgcom/>
                <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6} className="d-flex flex-column new_pass_card">
                   <p className='card-title '>أدخل معلومات تسجيل الدخول </p>
                   <div className="header1">
                    <p className='card-title between-borders1'> لتحصل على جميع الخدمات</p>
                </div>
                    
                    <Form className="new_pass-form">
                    <Form.Group controlId="password">
                            <Form.Label className='new_password'> كلمة المرور الجديدة </Form.Label>
                            <div className='relative1'>
                                <Form.Control
                                    className='p_new_pass'
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
                        <Form.Group controlId="password">
                            <Form.Label className='con_new_password'> تأكيد كلمة المرور الجديدة </Form.Label>
                            <div className='relative1'>
                                <Form.Control
                                    className='p_con_new_password'
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
                        
                      
                        <Button type="submit" className="new_pass_btn">تم </Button>
                       <Create_acc/>
                    </Form>
                </Col>
            </div>
        </div>
    );
}

export default New_pass;
