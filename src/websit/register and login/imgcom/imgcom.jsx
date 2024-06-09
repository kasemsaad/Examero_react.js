import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './imgcom.css';
import yourImage from '../../../assets/image/register and login image/6310507 1.png'
function Imgcom() {
    

    return (
       
<Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6} className="image-container_l ">
                    <div className='image-container2_l '>
                        <img src={yourImage} alt="description" />
                        <p className="image-text_l overlay-text">مرحبا بك في منصة Examero</p>
                        <p className="image-text2_l overlay-text">أفضل منصة تعليمية لإنشاء الامتحانات في الوطن العربي</p>
                    </div>
                </Col>
    );
}
export default Imgcom;
