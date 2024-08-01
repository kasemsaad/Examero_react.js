import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Dropdown, DropdownButton, ProgressBar } from 'react-bootstrap';
import putting from '../../../assets/icons/teacherview/wpf_create-new.svg';
import dropdownIcon from '../../../assets/icons/teacherview/Vector 13.svg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './PuttingExam1.css';

function PuttingExam1(props) {
    const layoutBackground = useSelector((state) => state.dark.lay);
    const [examFormat, setExamFormat] = useState('اختر شكل نموذج الامتحان');
    const [curriculum, setCurriculum] = useState('');
    const [directorate, setDirectorate] = useState('');
    const [institution, setInstitution] = useState('');
    const [school, setSchool] = useState('');
    const [examName, setExamName] = useState('');
    const [progress, setProgress] = useState(5); // Initial progress value
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleSelect = (e) => {
        setExamFormat(e);
    };

    const handleSubmit = (e) => {
        let doc = [];

        e.preventDefault();
        const formData = {
            examFormat,
            curriculum,
            directorate,
            institution,
            school,
            examName,
        };


        const storedDoc = localStorage.getItem("doc");
        if (storedDoc) {
            try {
                doc = JSON.parse(storedDoc);
            } catch (error) {
                console.error('Error parsing stored doc:', error);
            }
        }
        localStorage.removeItem("doc")
        localStorage.removeItem("doc1")
        doc.push(JSON.stringify(formData));

        localStorage.setItem("doc", JSON.stringify(doc));
        localStorage.setItem("doc1", JSON.stringify(doc));
        localStorage.setItem("all", "[]" )
        localStorage.setItem("Box", "[]" )
        navigate("/teacher/PuttingExam2");
    };

    useEffect(() => {
        localStorage.removeItem("doc")
        localStorage.removeItem("doc1")
        const storedData = localStorage.getItem("doc1");
        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData);
                setExamFormat(parsedData.examFormat);
                setCurriculum(parsedData.curriculum);
                setDirectorate(parsedData.directorate);
                setInstitution(parsedData.institution);
                setSchool(parsedData.school);
                setExamName(parsedData.examName);
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        }
    }, []);
    const validateForm = () => {
        const errorss = {};


        if (!examFormat || examFormat === 'اختر شكل نموذج الامتحان') {
          errorss.examFormat = 'اختر شكل نموذج الامتحان';
        }

        if (!curriculum) {
            errorss.curriculum = 'أدخل المنهاج التربوي ';
        }
        if (!examName) {
            errorss.examName = 'أدخل اسم الامتحان   ';
        }


        if (Object.keys(errorss).length > 0) {
            setErrors(errorss);
            return false;
        }
        return true;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            handleSubmit(e);
        }
    };
    return (
        <>
            <div className='py-2'>
                <div className='header-container1' style={{
                    backgroundColor: layoutBackground === "#0E0A43" ? "#0E0A43" : "#ECECEC",
                    color: layoutBackground === "#0E0A43" ? "white" : "black",
                    fontSize: "24px"
                }}>
                    <img src={putting} alt="Icon" className='header1teacherview-icon' />
                    <span className='header1_putting_exam1 'style={{fontSize:'24px'}}> انشاء الامتحان </span>
                </div>
                <div className='header-container'>
                    <span className='header_putting_exam1'> إدخال بيانات الامتحان</span>
                    <div className='header-line'></div>
                </div>

                <Form onSubmit={handleFormSubmit} className='form_putting_exam1' style={{
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
                                    type="text"
                                    value={curriculum}
                                    onChange={(e) => setCurriculum(e.target.value)}
                                    placeholder=" ادخل المنهاج التربوي "
                                />
                                {errors.curriculum && <Form.Text className='text-danger'>{errors.curriculum}</Form.Text>}
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Form.Group controlId="examFormat">
                                <Form.Label><span className='text-danger'> * </span> شكل نموذج الامتحان</Form.Label>
                                <DropdownButton
                                    id="dropdown-basic-button"
                                    title={<div className='re'>{examFormat || "أختر شكل نموذج الامتحان"}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                                    onSelect={handleSelect}
                                    style={{border:"none"}}
                                >
                                    <Dropdown.Item className='text-white' eventKey="عربي">
                                        <span className="circle arabic"></span> عربي
                                    </Dropdown.Item>
                                    <Dropdown.Item className='text-white' eventKey="انجليزي">
                                        <span className="circle english"></span> انجليزي
                                    </Dropdown.Item>
                                </DropdownButton>
                                {errors.examFormat && <Form.Text className='text-danger'>{errors.examFormat}</Form.Text>}

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
                                {errors.institution && <Form.Text className='text-danger'>{errors.institution}</Form.Text>}
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

                                    type="text"
                                    value={examName}
                                    onChange={(e) => setExamName(e.target.value)}
                                    placeholder="أدخل اسم الامتحان (مثال: امتحان نهائي)"
                                />
                                {errors.examName && <Form.Text className='text-danger'>{errors.examName}</Form.Text>}
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
