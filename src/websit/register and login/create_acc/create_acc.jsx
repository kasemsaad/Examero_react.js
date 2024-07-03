import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './create_acc.css';

function CreateAcc() {
    const navigate = useNavigate();

    const handleTeacherAccount = () => {
        navigate('/CreateTecherAccount'); 
    };

    const handleStudentAccount = () => {
        navigate('/createStudentAccount'); 
    };

    return (
        <Row className="acc">
            {/* <span className='s_1'>لا تمتلك حساب؟ <span className='s_2'>سجل معنا الآن</span></span> */}
            <Row className="justify-content-center">
                <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                    <Button type="button" className="btn tech_acc" onClick={handleTeacherAccount}>إنشاء حساب المعلم</Button>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                    <Button type="button" className="btn stud_acc" onClick={handleStudentAccount}>إنشاء حساب الطالب</Button>
                </Col>
            </Row>
        </Row>
    );
}

export default CreateAcc;
