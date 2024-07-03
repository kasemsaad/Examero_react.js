import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './create_tech_acc.css';
import axios from 'axios';
import emailIcon from '../../../assets/icons/register and login icon/mail-email-icon-template-black-color-editable-mail-email-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector 2.svg';
import passIcon from '../../../assets/icons/register and login icon/pngtree-password-vector-icon-design-illustration-png-image_6597553 3.svg';
import rightCheck from '../../../assets/icons/register and login icon/check-mark-vector-free-1 1.svg';
import lockIcon from '../../../assets/icons/register and login icon/padlock-icon-lock-and-unlock-icon-design-free-vector 1.svg';
import phoneIcon from '../../../assets/icons/register and login icon/depositphotos_380535678-stock-illustration-phone-icon-vector-call-icon 1.svg';
import techIcon from '../../../assets/icons/register and login icon/75-754013_financial-planner-icon-png-financial-advisor-clipart-transparent 1.svg';
import vector from '../../../assets/icons/register and login icon/Vector 58.svg';
import techimg from '../../../assets/image/register and login image/Frame 26.png';
import Api_website from '../../../utlis/axios_utils_websit';
import { useNavigate } from 'react-router-dom';
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

function CreateTechAcc() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone_number: '',
        date_of_birth: {
            day: '',
            month: '',
            year: '',
        },
        password_confirmation: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleDateChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            date_of_birth: {
                ...formData.date_of_birth,
                [name]: value,
            },
        });
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPhoneNumber = (phone) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.password_confirmation) {
            setError('Passwords do not match');
            setTimeout(() => setError(''), 3000);
            return;
        }
    
        const dateOfBirth = `${formData.date_of_birth.year}-${formData.date_of_birth.month}-${formData.date_of_birth.day}`;
        const dataToSubmit = {
            ...formData,
            date_of_birth: dateOfBirth,
        };
    
        setLoading(true);
    
        Api_website.post('/teachers/register', dataToSubmit)
            .then(response => {
                setSuccess('Registration successful!');
                setError('');
                setTimeout(() => setSuccess(''), 3000);
    
                // Reset form data after successful registration
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    phone_number: '',
                    date_of_birth: {
                        day: '',
                        month: '',
                        year: '',
                    },
                    password_confirmation: '',
                });
            })
            .catch(error => {
                console.error("Error fetching subjects data:", error);
                setError(error.response?.data?.message || 'An error occurred while registering.');
                setTimeout(() => setError(''), 3000);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    
    const handlebackhome = () => {
        navigate('/login_teacher'); 
    };
    return (
        <div className='create_tech_acc'>
            <div className="create_tech_acc d-flex flex-wrap">
                <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6} className="img_tech-container">
                    <div className='img_tech-container2 '>
                        <div className='di_1'>
                            <p className="head-text">رؤيتنا</p>
                            <hr />
                            <p className="image-text">
                                نحن نسعى لأن نصبح وجهة رئيسية للأفراد الذين يبحثون عن أسئلة تعليمية متنوعة وذات جودة عالية. نطمح إلى أن نكون الموقع الذي يفضله المعلمون والطلاب على حد سواء، حيث يمكنهم العثور على مجموعة متنوعة من الأسئلة التي تناسب احتياجاتهم التعليمية. نسعى لتحقيق هذه الرؤية من خلال الابتكار المستمر والاستماع إلى ملاحظات مستخدمينا لتحسين تجربتهم بشكل دائم.
                            </p>
                        </div>
                        <div className='di_2'>
                            <p className="head-text">رسالتنا</p>
                            <hr />
                            <p className="image-text2">
                                نحن في موقعنا نسعى لتقديم تجربة تعليمية ممتعة ومفيدة للجميع. نؤمن بأن التعلم يجب أن يكون ممتعًا وسهل الوصول إليه، وهذا هو السبب في أننا نسعى جاهدين لتوفير مجموعة واسعة من الأسئلة والموارد التعليمية التي يمكن الاستفادة منها بسهولة وفعالية.
                            </p>
                        </div>
                        <div className='techim'>
                            <img src={techimg} alt="description" />
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6} className="d-flex flex-column create_tech_acc_card">
                    <div className="header_acc">
                        <p className='card-title between-borders'>إنشاء حساب المعلم</p>
                    </div>
                    <p className='card-title'>يرجى إدخال المعلومات لإكمال عملية التسجيل</p>
                    <Form className="create_tech_acc-form" onSubmit={handleSubmit}>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {success && <Alert variant="success">{success}</Alert>}
                        <Form.Group controlId="firstname">
                            <Form.Label className='create_tech_acc_firstname'> اسم المعلمـ \ ـــة   (  اسمك الأول)</Form.Label>
                            <div className='relative1'>
                                <Form.Control
                                    className='p_create_tech_acc_firstname'
                                    type="text"
                                    placeholder="أدخل الاسم الأول هنا"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                />
                                <div className='icon-container techIcon'>
                                    <img src={techIcon} alt="firstname icon" />
                                </div>
                                {formData.first_name && (
                                    <div className='icon-container check-icon'>
                                        <img src={rightCheck} alt="check icon" />
                                    </div>
                                )}
                            </div>
                        </Form.Group>
                        <Form.Group controlId="lastname">
                            <Form.Label className='create_tech_acc_lastname'>اسم العائلة</Form.Label>
                            <div className='relative1'>
                                <Form.Control
                                    className='p_create_tech_acc_lastname'
                                    type="text"
                                    placeholder="أدخل اسم العائلة هنا"
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                />
                                <div className='icon-container techIcon'>
                                    <img src={techIcon} alt="lastname icon" />
                                </div>
                                {formData.last_name && (
                                    <div className='icon-container check-icon'>
                                        <img src={rightCheck} alt="check icon" />
                                    </div>
                                )}
                            </div>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label className='creattchacc_email'>البريد الإلكتروني</Form.Label>
                            <div className='relative1'>
                                <Form.Control
                                    className='p_creattchacc_email'
                                    type="email"
                                    placeholder="أدخل بريدك الإلكتروني"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <div className='icon-container email-icon'>
                                    <img src={emailIcon} alt="email icon" />
                                </div>
                                {isValidEmail(formData.email) && (
                                    <div className='icon-container check-icon'>
                                        <img src={rightCheck} alt="check icon" />
                                    </div>
                                )}
                            </div>
                        </Form.Group>
                        <Form.Group controlId="phone_number">
                            <Form.Label className='phone_createteachacc-label'>رقم الهاتف</Form.Label>
                            <div className='relative1'>
                                <Form.Control
                                    className='p_createteachacc_phone'
                                    type="text"
                                    placeholder="أدخل رقم الهاتف هنا"
                                    name="phone_number"
                                    value={formData.phone_number}
                                    onChange={handleChange}
                                />
                                <div className='icon-container phoneIcon'>
                                    <img src={phoneIcon} alt="phone icon" />
                                </div>
                                {isValidPhoneNumber(formData.phone_number) && (
                                    <div className='icon-container check-icon'>
                                        <img src={rightCheck} alt="check icon" />
                                    </div>
                                )}
                            </div>
                        </Form.Group>
                        <Form.Group controlId="date_of_birth">
                            <Form.Label className='birthdate_create_tech_acc'>تاريخ الميلاد</Form.Label>
                            <div className='date-input-container'>
                                <div className='dropdown-container1'>
                                    <Form.Control as="select" className='dropdownn' name="day" onChange={handleDateChange}>
                                        <option value="" disabled selected>اليوم</option>
                                        {days.map(day => (
                                            <option key={day} value={day}>{day}</option>
                                        ))}
                                    </Form.Control>
                                    <div className='iconv'>
                                        <img src={vector} alt="dropdown icon" />
                                    </div>
                                </div>
                                <div className='dropdown-container1'>
                                    <Form.Control as="select" className='dropdownn' name="month" onChange={handleDateChange}>
                                        <option value="" disabled selected>الشهر</option>
                                        {months.map(month => (
                                            <option key={month} value={month}>{month}</option>
                                        ))}
                                    </Form.Control>
                                    <div className='iconv'>
                                        <img src={vector} alt="dropdown icon" />
                                    </div>
                                </div>
                                <div className='dropdown-container1'>
                                    <Form.Control as="select" className='dropdownn' name="year" onChange={handleDateChange}>
                                        <option value="" disabled selected>السنة</option>
                                        {years.map(year => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </Form.Control>
                                    <div className='iconv'>
                                        <img src={vector} alt="dropdownn icon" />
                                    </div>
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label className='createteachacc_pass'>كلمة المرور الجديدة</Form.Label>
                            <div className='relative1'>
                                <Form.Control
                                    className='p_createteachacc_pass'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="أدخل كلمة السر الخاصة بك"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <div className='icon-container password-icon'>
                                    <img src={passIcon} alt="password icon" />
                                </div>
                                <div className='icon-container lock-icon' onClick={() => setShowPassword(!showPassword)}>
                                    <img src={lockIcon} alt="lock icon" />
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group controlId="password_confirmation">
                            <Form.Label className='con_createteachacc_pass'>تأكيد كلمة المرور الجديدة</Form.Label>
                            <div className='relative1'>
                                <Form.Control
                                    className='p_con_createteachacc_pass'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="أدخل كلمة السر الخاصة بك"
                                    name="password_confirmation"
                                    value={formData.password_confirmation}
                                    onChange={handleChange}
                                />
                                <div className='icon-container password-icon'>
                                    <img src={passIcon} alt="password icon" />
                                </div>
                                <div className='icon-container lock-icon' onClick={() => setShowPassword(!showPassword)}>
                                    <img src={lockIcon} alt="lock icon" />
                                </div>
                            </div>
                        </Form.Group>
                        <div className='policy-container'>
                            <a href="#" className="policess">سياسة استخدام الموقع</a>
                        </div>
                        <Row className="acc">
                            <Row className="justify-content-center">
                                <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                    <Button type="submit" className="create_tech_acc_btn" disabled={loading}>
                                        {loading ? 'إنشاء الحساب...' : 'إنشاء الحساب'}
                                    </Button>
                                </Col>
                           
                                <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                    <Button type="button" className="back_creat_tech_acc_btn" onClick={handlebackhome}>تسجيل دخول</Button>
                                </Col>
                            </Row>
                        </Row>
                    </Form>
                </Col>
            </div>
        </div>
    );
}

export default CreateTechAcc;
