import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import './new_pass.css';
import passIcon from '../../../assets/icons/register and login icon/pngtree-password-vector-icon-design-illustration-png-image_6597553 3.svg';
import lockIcon from '../../../assets/icons/register and login icon/padlock-icon-lock-and-unlock-icon-design-free-vector 1.svg';
import Create_acc from '../create_acc/create_acc';
import Imgcom from '../imgcom/imgcom';

function NewPass() {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const email = useSelector((state) => state.user.email);
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post('http://127.0.0.1:8000/api/students/reset-password', {
      email,
      token,
      password,
      password_confirmation: passwordConfirmation,
    }, {
      headers: {
        Accept: 'application/json',
      },
    });
    setSuccess('Password reset successfully.');
    setError('');
    setTimeout(() => {
      navigate('/l1');
    }, 3000);
  } catch (error) {
    console.error(error);
    setError(error.response.data.message); 
    setSuccess('');
    setTimeout(() => setError(''), 3000);
  }
};


  return (
    <div className='new_pass'>
      <div className="new_pass d-flex flex-wrap">
        <Imgcom />
        <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6} className="d-flex flex-column new_pass_card">
          <p className='card-title '>أدخل معلومات تسجيل الدخول </p>
          <div className="header1">
            <p className='card-title between-borders1'>لتحصل على جميع الخدمات</p>
          </div>
          <Form className="new_pass-form" onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Form.Group controlId="password">
              <Form.Label className='new_password'>كلمة المرور الجديدة</Form.Label>
              <div className='relative1'>
                <Form.Control
                  className='p_new_pass'
                  type="password"
                  placeholder="أدخل كلمة السر الخاصة بك"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className='icon-container password-icon'>
                  <img src={passIcon} alt="password icon" />
                </div>
                <div className='icon-container lock-icon'>
                  <img src={lockIcon} alt="lock icon" />
                </div>
              </div>
            </Form.Group>
            <Form.Group controlId="passwordConfirmation">
              <Form.Label className='con_new_password'>تأكيد كلمة المرور الجديدة</Form.Label>
              <div className='relative1'>
                <Form.Control
                  className='p_con_new_password'
                  type="password"
                  placeholder="أدخل كلمة السر الخاصة بك"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <div className='icon-container password-icon'>
                  <img src={passIcon} alt="password icon" />
                </div>
                <div className='icon-container lock-icon'>
                  <img src={lockIcon} alt="lock icon" />
                </div>
              </div>
            </Form.Group>
            <Button type="submit" className="new_pass_btn">تم</Button>
            <Create_acc />
          </Form>
        </Col>
      </div>
    </div>
  );
}

export default NewPass;
