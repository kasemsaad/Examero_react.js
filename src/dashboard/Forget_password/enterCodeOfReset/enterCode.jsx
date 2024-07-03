
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Col, Form, Button, Alert } from 'react-bootstrap';
import Api_website from "../../../utlis/axios_utils_websit.jsx";
import { setToken } from '../../../redux/reducer/user.jsx';
import Imgcom from '../../../websit/register and login/imgcom/imgcom.jsx';

import emailIcon from '../../../assets/icons/register and login icon/mail-email-icon-template-black-color-editable-mail-email-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector 2.svg';
import rightCheck from '../../../assets/icons/register and login icon/check-mark-vector-free-1 1.svg';
import Api_Dashboard from '../../interceptor/interceptorDashboard.jsx';

function EnterCodeDashBoard() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector((state) => state.user.email);
  const token = useSelector((state) => state.user.token);
  const handleSubmit = (e) => {
    console.log(code);
    e.preventDefault();
    Api_Dashboard.post('/verify-token', { token: code })
      .then((response) => {
        console.log('Token verified:', response);
        setSuccess('تم التحقق من الكود.');
        setError('');
        dispatch(setToken(code)); 
        setTimeout(() => {
          navigate('/DashboardNewPassword');
        }, 3000);
      })
      .catch((error) => {
        console.error('Invalid token:', error);
        setError('كود غير صحيح.');
        setSuccess('');
        setTimeout(() => setError(''), 3000);
      });
  };


  return (
    <div className='reset_code_page'>
      <div className="Reset_code_page d-flex flex-wrap">
        <Imgcom />
        <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6} className="d-flex flex-column reset1-card align-items-center">
          <p className='card-title-l2 '>أدخل معلومات تسجيل الدخول </p>
          <div className="header1-l2">
            <p className='card-title2 between-borders1-l2'>لتحصل على جميع الخدمات</p>
          </div>
          <Form className="reset_code-form" onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Form.Group controlId="code">
              <Form.Label className='reset_code_email'>أدخل الكود المرسل إلى الإيميل</Form.Label>
              <div className='relative1'>
                <Form.Control
                  className='p_code'
                  type="text"
                  placeholder="أدخل الكود"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
                <div className='icon-container email-icon'>
                  <img src={emailIcon} alt="email icon" />
                </div>
                <div className='icon-container check-icon'>
                  <img src={rightCheck} alt="check icon" />
                </div>
              </div>
            </Form.Group>
            <Button type="submit" className="reset_code_btn">إرسال</Button>
          </Form>
        </Col>
      </div>
    </div>
  );
}

export default EnterCodeDashBoard;
