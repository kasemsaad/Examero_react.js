import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import './HomeStyle.css'; // Import your CSS file if needed
// import douts from "../../assets/image/home/Group 54.svg";
import MyButton from "../../common/Button/Button";
import right from"../../assets/icons/Home/mdi_success-circle-outline.svg"
import fluent from"../../assets/icons/Home/fluent-mdl2_commitments.svg"
import lucide_git from"../../assets/icons/Home/lucide_git-pull-request-create-arrow.svg"
import ph_target from"../../assets/icons/Home/ph_target-bold.svg"
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
            <nav className="navbar navbarsss navbar-expand-lg position-fixed" dir="rtl">
                <div className="container d-flex align-items-center" style={{ marginRight: "8.4vw" }}>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex align-items-center justify-content-between" style={{ width: "100vw" }}>
                        <div className="collapse navbar-collapse kasem" id="navbarNav" style={{ width: "80vw" }}>
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
                                <MyButton className="btn mx-2 py-0" style={{ height: "1.8rem", color: "white", backgroundColor: "#4941A6"  }} to={"/Home"} content={"انشاء حساب"}/>
                                <MyButton  className="btn mx-2 py-0" style={{ height: "1.8rem", border: "2px solid #4941A6" }} to={"/Home"} content={"تسجيل الدخول"}/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* -----------EndNavbar--------- */}
            {/* -----------section1--------- */}
            {/* <img className="d"  src={imgs1} alt="" /> */}
            <Section className="Section pt-5">
                <DivSection1 className="DivSection1 container row p-0 m-1">
                    <SectionImage1 className="SectionImage1 col-md-6 p-0">
                    </SectionImage1>
                    <Sectioncontent1 className="Sectioncontent col-md-6  p-0">
                        <div className="box p-2" dir="rtl">
                            <h3 className="Bold">امتحانك في متناول يدك</h3><br />
                            <div>
                                منصة <span style={{ color: "#B33E68" }}>Examero</span> هي منصة مخصصة لمساعدة المعلمين والطلاب على إعداد الامتحانات بكل أنواعها التشخيصية و الشهرية والنهائية بكل سهولة وفعالية .
                            </div>
                            <div className="py-4">
                                نحن نقدم منصة رائدة تساعد المعلمين والطلاب <span style={{ color: "#B33E68" }}>(  المدارس الحكومية و الخاصة و دروس  التقوية ) </span> على تصميم امتحانات مخصصة وتحمليها<span style={{ color: "#B33E68" }}> بصيغة pdf</span> مع خيار توفير نماذج الإجابة النموذجية وتحديد درجة صعوبة الامتحان اثناء إنشائه  .
                            </div>
                            <Link to="/" className="Button">اشترك الآن</Link>
                        </div>
                    </Sectioncontent1>
                </DivSection1>
            </Section>
            <Douts className="Douts "></Douts>

            {/* -----------endsection1--------- */}
            {/* -----------section2--------- */}
            <Section2 className="Section2 ">
                <DivSection2 className="DivSection2  row p-0 m-1">
                    <SectionImage2 className="SectionImage2 col-md-4 p-0">
                        {/* <img className="d"  src={imgs1} alt="" /> */}
                    </SectionImage2>
                    <Sectioncontent2 className="Sectioncontent2 col-md-7  flex-column -5 ">
                        <div className="p-2" dir="rtl">
                            <h3 className="Bold"><span style={{ color: "#4941A6" }}>من نحن </span></h3><br />
                            <h3>منصة متكاملة لمساعدة المعلمين والطلاب في إعداد الامتحانات بكل أنواعها</h3><br />
                            <div className="pb-5">
                                نحن في موقع  "Examero " ملتزمون بدعم المعلمين والطلاب في إعداد الامتحانات بسهولة وفعالية.
                                نقدم منصة سهلة الإستخدام تتيح لك إنشاء الامتحان بسرعة ودقة كمعلم أو طالب .  دعنا نساعدك في توفير الوقت والجهد في عملية إعداد امتحانك .                        </div>
                        </div>
                        <div className="blockButtons" dir="rtl">
                            <Link to="/" className="Button2">استكشف باقاتنا</Link>
                            <Link to="/" className="Button3 mx-2 ">تواصل عبر الواتساب</Link>
                        </div>
                    </Sectioncontent2>
                </DivSection2>
            </Section2>
            {/* -----------endsection2--------- */}
            {/* -----------section3--------- */}
            <Section3 className="Section3 mt-5" >
                <DivSection3 className="container DivSection3 p-0 pb-4 text-center ">
                <h3 className="Bold"><span style={{ color: "#4941A6" }}>هدفنا</span></h3><br />
                <p className=" fs-5 pt-3  " dir="rtl">هدفنا في موقع <span>'Examero'</span> هو تقديم دعم شامل للمعلمين. نسعى جاهدين لتوفير أدوات وموارد تساعدهم</p>
                <p className="fs-6" dir="rtl">نحن نؤمن بأهمية دور المعلمين في بناء مستقبل مشرق للتعليم ونسعى لدعمهم في تحقيق هذا الهدف.</p>                   
                <div className="row cards p-0 m-0 ">
                    <div className="card  col-md-2 p-0 m-3 shadow bg-white " >
                        <div className="parentCircleIcon  p-0">
                       <div className="circleicone">
                        <img style={{width:"25px", paddingRight:"4px"}} src={right} alt="right" />
                       </div>
                        </div>
                       <div className="p-3">
                        <p><span style={{ color: "#A63131" }}>غايتنا</span> هي تقديم مساعدة حقيقية للمعلمين وتحقيق النجاح في التعليم.</p>
                       </div>
                    </div>
                    <div className="card  col-md-2 p-0 m-3 shadow bg-white " >
                        <div className="parentCircleIcon  p-0">
                       <div className="circleicone">
                        <img style={{width:"25px", paddingRight:"4px"}} src={fluent} alt="right" />
                       </div>
                        </div>
                       <div className="p-3">
                        <p>نحن <span style={{ color: "#A63131" }}>ملتزمون</span> بتوفير أدوات مبتكرة لتقديم تجربة تعليمية 
                        ممتازة.</p>
                       </div>
                    </div>
                    <div className="card  col-md-2 p-0 m-3 shadow bg-white " >
                        <div className="parentCircleIcon  p-0">
                       <div className="circleicone">
                        <img style={{width:"25px", paddingRight:"4px"}} src={lucide_git} alt="right" />
                       </div>
                        </div>
                       <div className="p-3">
                        <p> <span style={{ color: "#A63131" }}>نسعى </span>لتوفير منصة تسهل عليك إنشاء أسئلة امتحانية بسرعة ودقة.</p>
                       </div>
                    </div>
                    <div className="card  col-md-2 p-0 m-3 shadow bg-white " >
                        <div className="parentCircleIcon  p-0">
                       <div className="circleicone">
                        <img style={{width:"25px", paddingRight:"4px"}} src={ph_target} alt="right" />
                       </div>
                        </div>
                       <div className="p-3">
                        <p><span style={{ color: "#A63131" }}>هدفنا </span> هو دعم المعلمين في إعداد الامتحانات بطريقة ميسرة ومؤثرة.</p>
                       </div>
                    </div>
                </div>
                </DivSection3>
            </Section3>
            {/* -----------endsection--------- */}
        </>
    );
}
const Section = styled.section``;
const DivSection1 = styled.div``;
const Sectioncontent1 = styled.div``;
const SectionImage1 = styled.div``;
const Button = styled.button``;
const Section2 = styled.section``;
const Douts = styled.div``;
const DivSection2 = styled.div``;
const Sectioncontent2 = styled.div``;
const SectionImage2 = styled.div``;
const Button2 = styled.button``;
const Section3 = styled.section``;
const DivSection3 = styled.div``;
export default Home;
