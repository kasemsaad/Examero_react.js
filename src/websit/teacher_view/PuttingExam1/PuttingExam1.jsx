import React, { useState } from 'react';
import { Form, Button, Row, Col, Dropdown, DropdownButton, ProgressBar } from 'react-bootstrap';
import putting from '../../../assets/icons/teacherview/wpf_create-new.svg';
import dropdownIcon from '../../../assets/icons/teacherview/Vector 13.svg';
import { useSelector } from 'react-redux';

import './PuttingExam1.css';
import { useNavigate } from 'react-router-dom';



function PuttingExam1(props) {
    const layoutBackground = useSelector((state) => state.dark.lay);

    const [examFormat, setExamFormat] = useState('عربي');
    const [curriculum, setCurriculum] = useState('');
    const [directorate, setDirectorate] = useState('');
    const [institution, setInstitution] = useState('');
    const [school, setSchool] = useState('');
    const [examName, setExamName] = useState('');
    const [progress, setProgress] = useState(5); // Initial progress value
    const Navigate = useNavigate()
    const handleSelect = (e) => {
        setExamFormat(e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            examFormat,
            curriculum,
            directorate,
            institution,
            school,
            examName,
        };
        const doc = []
        doc.push(JSON.stringify(formData))
        localStorage.setItem("doc", JSON.stringify(doc));
        Navigate("/teacher/PuttingExam2")
    };

    return (
        <>
            <div className='py-2'>

                <div className='header-container1' style={{
                    backgroundColor: layoutBackground === "#0E0A43" ? "#0E0A43" : "#ECECEC",
                    color: layoutBackground === "#0E0A43" ? "white" : "black",
                    fontSize: "18px"
                }}>
                    <img src={putting} alt="Icon" className='header1teacherview-icon' />
                    <span className='header1_putting_exam1'> انشاء الامتحان  </span>
                </div>
                <div className='header-container'>
                    <span className='header_putting_exam1'>   إدخال بيانات الامتحان</span>
                    <div className='header-line'></div>

                </div>


                <Form onSubmit={handleSubmit} className='form_putting_exam1' style={{
                    backgroundColor: layoutBackground === "#0E0A43" ? "#1D195D" : "#DADADA",
                    color: layoutBackground === "#0E0A43" ? "white" : "black",
                    fontSize: "18px"
                }}>
                    <ProgressBar now={progress} />

                    <div className='header-container'>
                        <span className='header3_putting_exam1' style={{
                            backgroundColor: layoutBackground === "#0E0A43" ? "#4941A6" : "#ECECEC",
                            color: layoutBackground === "#0E0A43" ? "white" : "black",
                            fontSize: "18px"
                        }}>بيانات ترويسة الامتحان</span>
                    </div>
                    <Row className="mb-3">
                        <Col xs={12} sm={6}>
                            <Form.Group controlId="curriculum">
                                <Form.Label><span className='text-danger pr-2'> * </span>المنهاج</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    value={curriculum}
                                    onChange={(e) => setCurriculum(e.target.value)}
                                    placeholder="المنهاج التربوي"
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Form.Group controlId="examFormat">
                                <Form.Label><span className='text-danger'> * </span> شكل نموذج الامتحان</Form.Label>
                                <DropdownButton
                                    id="dropdown-basic-button"
                                    title={<div className='re'>{examFormat || "أختر شكل نموذج الامتحان"}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                                    onSelect={handleSelect}
                                    required
                                >
                                    <Dropdown.Item eventKey="عربي">
                                        <span className="circle arabic"></span> عربي
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="انجليزي">
                                        <span className="circle english"></span> انجليزي
                                    </Dropdown.Item>
                                </DropdownButton>
                            </Form.Group>

                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col xs={12} sm={6}>
                            <Form.Group controlId="institution">
                                <Form.Label>اسم المؤسسة</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={institution}
                                    onChange={(e) => setInstitution(e.target.value)}
                                    placeholder="أدخل اسم المؤسسة (مثال: وزارة التربية والتعليم)"
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Form.Group controlId="directorate">
                                <Form.Label>اسم المديرية</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={directorate}
                                    onChange={(e) => setDirectorate(e.target.value)}
                                    placeholder="أدخل اسم المديرية (مثال: مديرية التربية والتعليم)"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col xs={12} sm={6}>
                            <Form.Group controlId="examName">
                                <Form.Label><span className='text-danger'> * </span>اسم الامتحان</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    value={examName}
                                    onChange={(e) => setExamName(e.target.value)}
                                    placeholder="أدخل اسم الامتحان (مثال: امتحان نهائي)"
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Form.Group controlId="school">
                                <Form.Label>اسم المدرسة</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={school}
                                    onChange={(e) => setSchool(e.target.value)}
                                    placeholder="أدخل أسم المدرسة ( مثال : مدرسة رملة بنت ابي سفيان الأساسية المختلطة )"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-start">
                            <Button className='btn_putting_exam1 pl-3 pr-3' type="submit">
                                التالي
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>

        </>
    );
}


export default PuttingExam1;