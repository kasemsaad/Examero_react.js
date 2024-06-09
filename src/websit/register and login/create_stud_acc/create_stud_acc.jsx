import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './create_stud_acc.css';
import emailIcon from '../../../assets/icons/register and login icon/mail-email-icon-template-black-color-editable-mail-email-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector 2.svg';
import passIcon from '../../../assets/icons/register and login icon/pngtree-password-vector-icon-design-illustration-png-image_6597553 3.svg';
import rightCheck from '../../../assets/icons/register and login icon/check-mark-vector-free-1 1.svg';
import lockIcon from '../../../assets/icons/register and login icon/padlock-icon-lock-and-unlock-icon-design-free-vector 1.svg';
import phoneIcon from '../../../assets/icons/register and login icon/depositphotos_380535678-stock-illustration-phone-icon-vector-call-icon 1.svg'
import studentIcon from '../../../assets/icons/register and login icon/360_F_377139493_Vta4MPTZUsQK6p5TXUkL3Xc6pqFYRxHm 1.svg'
import vector from  '../../../assets/icons/register and login icon/Vector 58.svg'
import studentimg from '../../../assets/image/register and login image/Rectangle 4198.png'

function CreateStudentAcc() {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

    return (
        <div className='create_student_acc'>
            <div className="create_student_acc d-flex flex-wrap">
                <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6} className="img_student-container">
                    <div className='img_student-container2 '>
                        <div className='di_1'>
                            <p className="head-text">رؤيتنا</p>
                            <hr></hr>
                            <p className="image-text">نحن نسعى لأن نصبح وجهة رئيسية للأفراد الذين يبحثون عن أسئلة تعليمية متنوعة وذات جودة عالية. نطمح إلى أن نكون الموقع الذي يفضله المعلمون والطلاب على حد سواء، حيث يمكنهم العثور على مجموعة متنوعة من الأسئلة التي تناسب احتياجاتهم التعليمية. نسعى لتحقيق هذه الرؤية من خلال الابتكار المستمر والاستماع إلى ملاحظات مستخدمينا لتحسين تجربتهم بشكل دائم.</p>
                        </div>
                        <div className='di_2'>
                            <p className="head-text">رسالتنا</p>
                            <hr></hr>
                            <p className="image-text2">نحن في موقعنا نسعى لتقديم تجربة تعليمية ممتعة ومفيدة للجميع. نؤمن بأن التعلم يجب أن يكون ممتعًا وسهل الوصول إليه، وهذا هو السبب في أننا نسعى جاهدين لتوفير مجموعة واسعة من الأسئلة والموارد التعليمية التي يمكن الاستفادة منها بسهولة وفعالية.</p>
                        </div>
                        <div className='studentimg'>
                            <img src={studentimg} alt="description" />
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6} className="d-flex flex-column create_student_acc_card">
              <div className="header1">
                <p className='card-title between-borders'>إنشاء حساب الطالب</p>
                </div>
                <p className='card-title'>يرجى إدخال المعلومات لإكمال عملية التسجيل</p>
                
                    <Form className="create_student_acc-form">
                        <Form.Group controlId="username">
                            <Form.Label className='create_student_acc_username'>اسم الطالبـ \ ـــة (اسمك واسم عائلتك)</Form.Label>
                            <div className='relative1'>
                                <Form.Control
                                    className='p_create_student_acc_username'
                                    type="text"
                                    placeholder="أدخل اسم الطالب هنا"
                                    name="username"
                                />
                                <div className='icon-container studentIcon'>
                                    <img src={studentIcon} alt="username icon" />
                                </div>
                                <div className='icon-container check-icon'>
                                    <img src={rightCheck} alt="check icon" />
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label className='creatstudentacc_email'>البريد الإلكتروني</Form.Label>
                            <div className='relative1'>
                                <Form.Control
                                    className='p_creatstudentacc_email'
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
                        <Form.Group controlId="phone">
                            <Form.Label className='phone_createstudentacc-label'>رقم الهاتف</Form.Label>
                            <div className='relative1'>
                                <Form.Control
                                    className='p_createstudentacc_phone'
                                    type="text"
                                    placeholder="أدخل رقم الهاتف هنا"
                                    name="phone"
                                />
                                <div className='icon-container phoneIcon'>
                                    <img src={phoneIcon} alt="phone icon" />
                                </div>
                                <div className='icon-container check-icon'>
                                    <img src={rightCheck} alt="check icon" />
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group controlId="birthdate">
                            <Form.Label className='birthdate_create_std_acc'>تاريخ الميلاد</Form.Label>
                            <div className='date-input-container'>
                                <div className='dropdown-container'>
                                    <Form.Control as="select" className='dropdown'>
                                        <option value="" disabled selected>اليوم</option>
                                        {days.map(day => (
                                            <option key={day} value={day}>{day}</option>
                                        ))}
                                    </Form.Control>
                                    <div className='iconv'>
                                        <img src={vector} alt="dropdown iconv" />
                                    </div>
                                </div>
                                <div className='dropdown-container'>
                                    <Form.Control as="select" className='dropdown'>
                                        <option value="" disabled selected>الشهر</option>
                                        {months.map(month => (
                                            <option key={month} value={month}>{month}</option>
                                        ))}
                                    </Form.Control>
                                    <div className='iconv'>
                                        <img src={vector} alt="dropdown iconv" />
                                    </div>
                                </div>
                                <div className='dropdown-container'>
                                    <Form.Control as="select" className='dropdown'>
                                        <option value="" disabled selected>السنة</option>
                                        {years.map(year => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </Form.Control>
                                    <div className='iconv'>
                                        <img src={vector} alt="dropdown iconv" />
                                    </div>
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label className='createstudentacc_pass'>كلمة المرور الجديدة</Form.Label>
                            <div className='relative1'>
                                <Form.Control
                                    className='p_createstudentacc_pass'
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
                            <Form.Label className='con_createstudentacc_pass'>تأكيد كلمة المرور الجديدة</Form.Label>
                            <div className='relative1'>
                                <Form.Control
                                    className='p_con_createstudentacc_pass'
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
                        <div className='policy-container'>
                            <a href="#" className="policess">سياسة استخدام الموقع</a>
                        </div>
                        <Row className="acc">
                            <Row className="justify-content-center">
                                <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                    <Button type="button" className="create_student_acc_btn">إنشاء حساب</Button>
                                </Col>
                                <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                    <Button type="button" className="back_create_student_acc_btn">رجوع</Button>
                                </Col>
                            </Row>
                        </Row>
                    </Form>
                </Col>
            </div>
        </div>
    );
}

export default CreateStudentAcc;