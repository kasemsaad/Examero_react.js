import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Col, Form, Button, Alert } from 'react-bootstrap';
import Api_website from "../../../utlis/axios_utils_websit.jsx";
import { setEmail } from '../../../redux/reducer/user.jsx';
import './resetpage.css';
import Imgcom from '../imgcom/imgcom.jsx';
import Create_acc from '../create_acc/create_acc.jsx';
import emailIcon from '../../../assets/icons/register and login icon/mail-email-icon-template-black-color-editable-mail-email-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector 2.svg';
import rightCheck from '../../../assets/icons/register and login icon/check-mark-vector-free-1 1.svg';

function ResetPage1Teacher() {
  const [email, setEmailState] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Api_website.post('/teachers/sendmail', { email })
      .then((response) => {
        console.log('Request Successful:', response);
        setSuccess('تم إرسال كود التحقق إلى بريدك الإلكتروني.');
        setError('');
        dispatch(setEmail(email)); // Save email in Redux
        setTimeout(() => {
          navigate('/TeacherEnterCode');
        }, 3000);
      })
      .catch((error) => {
        console.error('An error occurred while sending the email:', error);
        setError('حدث خطأ أثناء إرسال البريد الإلكتروني.');
        setSuccess('');
        setTimeout(() => setError(''), 3000);
      });
  };


  return (
    <div className='resetpage1'>
      <div className="req_code_container d-flex flex-wrap">
        <Imgcom />
        <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6} className="d-flex flex-column reset1-card align-items-center">
          <p className='card-title-l'>أدخل معلومات تسجيل الدخول</p>
          <div className="header1-l">
            <p className='card-title between-borders1-l'>لتحصل على جميع الخدمات</p>
          </div>
          <Form className="reset1-form" onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Form.Group controlId="email">
              <Form.Label className='req_code_email'>البريد الإلكتروني</Form.Label>
              <div className='relative1'>
                <Form.Control
                  className='p_email_reset_page_1'
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  name="email"
                  value={email}
                  onChange={(e) => setEmailState(e.target.value)}
                />
                <div className='icon-container email-icon'>
                  <img src={emailIcon} alt="email icon" />
                </div>
                <div className='icon-container check-icon'>
                  <img src={rightCheck} alt="check icon" />
                </div>
              </div>
            </Form.Group>
            <Button type="submit" className="req_code_btn">إرسال كود عبر الإيميل</Button>
            <Create_acc />
          </Form>
        </Col>
      </div>
    </div>
  );
}

export default ResetPage1Teacher;
