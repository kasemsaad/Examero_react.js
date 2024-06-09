// import React from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import './create_acc.css';

// function Create_acc() {
    

//     return (
       
//             <div className="Row acc">
//                  <p className='line8'></p>  <p className='line9'></p>
//                     <p className="card-text">أدخل معلومات تسجيل الدخول لتحصل على جميع الخدمات</p>

//                 <span className='s_1'>لا تمتلك حساب ؟<span className='s_2'>سجل معنا الأن</span></span>
//             <Button type="submit" className="btn tech_acc">إنشاء حساب المعلم </Button>
// <Button type="submit" className="btn stud_acc">إنشاء حساب الطالب
// </Button>
//             </div>
//     );
// }
// export default Create_acc;


import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './create_acc.css';

function Create_acc() {
    

    return (
       
        <Row className="acc">
        <span className='s_1'>لا تمتلك حساب؟ <span className='s_2'>سجل معنا الآن</span></span>
        <Row className="justify-content-center">
            <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                <Button type="button" className="btn tech_acc ">إنشاء حساب المعلم</Button>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                <Button type="button" className="btn stud_acc">إنشاء حساب الطالب</Button>
            </Col>
        </Row>
    </Row>
    );
}
export default Create_acc;
