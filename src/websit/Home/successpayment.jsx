import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import doneImage from '../../assets/icons/register and login icon/Done.png'; 
import Api_website from '../../utlis/axios_utils_websit';
const EmailVerificationStud = () => {
    const location = useLocation();
    const [verificationStatus, setVerificationStatus] = useState('Verifying...');

    useEffect(() => {
        const token = new URLSearchParams(location.search).get('token_user');
        if (token) {
            verifyEmail(token);
        }
    }, [location.search]);

    const verifyEmail = (token) => {
        Api_website.get(`/students/verify/${token}`)
            .then((response) => {
                console.log('تم التحقق من البريد الإلكتروني بنجاح', response.data);
                setVerificationStatus('تم التحقق من البريد الإلكتروني بنجاح');
            })
            .catch((error) => {
                console.error('فشل التحقق من البريد الإلكتروني:', error);
                setVerificationStatus('فشل التحقق من البريد الإلكتروني. يرجى المحاولة مرة أخرى');
            });
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
    
        }}>
            <div style={{
                textAlign: 'center',
                padding: '20px',
                backgroundColor: '#ffffff',
                boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
                borderRadius: '10px',
                maxWidth: '80%',
                margin: 'auto',
            }}>
                <img src={doneImage} alt="Done Icon" style={{ width: '150px', marginBottom: '20px' }} />
                <h2>تم شراء الباقة بنجاح</h2>
                <p>{}</p>
                <Link to="/" style={{ textDecoration: 'none', marginTop: '20px' }}>
                    <button style={{
                        padding: '12px 24px',
                        backgroundColor: '#ACEADF',
                        color: 'black',
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius: '30px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.2s ease-in-out',
                    }}>
                        الرجوع إلى الصفحة الرئيسية
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EmailVerificationStud;