import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import './HomeStyle.css'; // Import your CSS file if needed

const BackSection = styled.div`
  width: 100%;
  background-color: aqua;
  
  
`;

function Home() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
                crossOrigin="anonymous"
            />
            {/* -----------Navbar--------- */}
            <nav className="navbar navbar-expand-lg" dir="rtl">
                <div className="container d-flex align-items-center justify-content-space-center" style={{ width: "100vw" }}>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex align-items-center justify-content-space-center" style={{ width: "100vw" }}>
                        <div className="collapse navbar-collapse" id="navbarNav" style={{ width: "80vw" }}>
                            <div className="classnav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active actives" aria-current="page" to="/">الرئيسية</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/features">من نحن</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/pricing">هدفنا</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/pricing">لماذا نحن</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/pricing">آراء العملاء</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/pricing">باقات الإشتراك</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <button className="btn mx-2 py-0" style={{ height: "1.8rem", color: "white", backgroundColor: "#4941A6" }} to="/Home">إنشاء حساب</button>
                                <button className="btn mx-2 py-0" style={{ height: "1.8rem", border: "2px solid #4941A6" }} to="/Home">تسجيل الدخول</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* -----------EndNavbar--------- */}
            {/* -----------section1--------- */}
            <h1>asdsad</h1>   
            <h1>asdsad</h1>   
            <h1>asdsad</h1>   
            <h1>asdsad</h1>   
            <h1>asdsad</h1>   
            <h1>asdsad</h1>   
            <h1>asdsad</h1>
            <span>dsfsdf</span>   
            <BackSection>

         </BackSection>
            {/* -----------endsection1--------- */}
        </>
    );
}

export default Home;
