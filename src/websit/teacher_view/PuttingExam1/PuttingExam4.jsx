import React, { useState } from 'react';
import { Form, Button, Row, Col, ProgressBar } from 'react-bootstrap';
import putting from '../../../assets/icons/teacherview/wpf_create-new.svg';
import './PuttingExam1.css';

function PuttingExam4(props) {
  const [progress, setProgress] = useState(85);

  return (
    <>
      <div className='header-container1'>
        <img src={putting} alt="Icon" className='header1teacherview-icon' />
        <span className='header1_putting_exam1'> انشاء الامتحان </span>
      </div>
      <div className='header-container'>
        <span className='header_putting_exam1'> إدخال بيانات الامتحان</span>
        <div className='header-line'></div>
      </div>

      <Form className='form_putting_exam4'>
        <ProgressBar now={progress} />

        <div className='header-container'>
          <span className='header3_putting_exam1'> بيانات تزييل الامتحان</span>
        </div>
        
        <div className='text-center nn'>
          <span className='m-2 t1'>ماذا تريد أن تكتب اخر صفحة الامتحان </span>
          <div className='align-items-center m-2 t2'>
            <div className='d-inline-block text-center'>
              انتهت الاسئلة
              <br />
              تمنياتي لكم بالتوفيق والنجاح
            </div>
            <div className='d-flex justify-content-center'>
              <div className='teacher_name'>معلم المادة : هشام موسى </div>
            </div>
            <div className='d-flex justify-content-center'>
              <Button className='btn_edit_exam' type="button">
                تعديل
              </Button>
            </div>
          </div>
        </div>

        <Row>
          <Col className="text-start">
            <Button className='btn_putting_exam2_bfor' type="button">
              السابق
            </Button>
            <Button className='btn_putting_exam2_after' type="submit">
              التالي
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default PuttingExam4;
