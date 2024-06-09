import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import './HomeStyle.css'; // Import your CSS file if needed
// import douts from "../../assets/image/home/Group 54.svg";
import MyButton from "../../common/Button/Button";
import right from "../../assets/icons/Home/mdi_success-circle-outline.svg"
import fluent from "../../assets/icons/Home/fluent-mdl2_commitments.svg"
import lucide_git from "../../assets/icons/Home/lucide_git-pull-request-create-arrow.svg"
import ph_target from "../../assets/icons/Home/ph_target-bold.svg"
import park_check from "../../assets/icons/Home/icon-park_check-correct.svg"
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
                                        <Link className="nav-link active" href="#Section2">من نحن</Link>
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
                                <MyButton className="btn mx-2 py-0" style={{ height: "1.8rem", color: "white", backgroundColor: "#4941A6" }} to={"/Home"} content={"انشاء حساب"} />
                                <MyButton className="btn mx-2 py-0" style={{ height: "1.8rem", border: "2px solid #4941A6" }} to={"/Home"} content={"تسجيل الدخول"} />

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
            <Section2 className="Section2 " id="Section2">
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
                    <h3 className="Bold "><span style={{ color: "#4941A6" }}>هدفنا</span></h3><br />
                    <p className=" fs-5 pt-5  " dir="rtl">هدفنا في موقع <span>'Examero'</span> هو تقديم دعم شامل للمعلمين. نسعى جاهدين لتوفير أدوات وموارد تساعدهم</p>
                    <p className="fs-6" dir="rtl">نحن نؤمن بأهمية دور المعلمين في بناء مستقبل مشرق للتعليم ونسعى لدعمهم في تحقيق هذا الهدف.</p>
                    <div className="row cards pt-4 m-0 ">
                        <div className="card  col-md-2 p-0 m-3 shadow bg-white " >
                            <div className="parentCircleIcon  p-0">
                                <div className="circleicone">
                                    <img style={{ width: "25px", paddingRight: "4px" }} src={right} alt="right" />
                                </div>
                            </div>
                            <div className="p-3">
                                <p><span style={{ color: "#A63131" }}>غايتنا</span> هي تقديم مساعدة حقيقية للمعلمين وتحقيق النجاح في التعليم.</p>
                            </div>
                        </div>
                        <div className="card  col-md-2 p-0 m-3 shadow bg-white " >
                            <div className="parentCircleIcon  p-0">
                                <div className="circleicone">
                                    <img style={{ width: "25px", paddingRight: "4px" }} src={fluent} alt="right" />
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
                                    <img style={{ width: "25px", paddingRight: "4px" }} src={lucide_git} alt="right" />
                                </div>
                            </div>
                            <div className="p-3">
                                <p> <span style={{ color: "#A63131" }}>نسعى </span>لتوفير منصة تسهل عليك إنشاء أسئلة امتحانية بسرعة ودقة.</p>
                            </div>
                        </div>
                        <div className="card  col-md-2 p-0 m-3 shadow bg-white " >
                            <div className="parentCircleIcon  p-0">
                                <div className="circleicone">
                                    <img style={{ width: "25px", paddingRight: "4px" }} src={ph_target} alt="right" />
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
            {/* -----------section4--------- */}
            <Section4 className="Section4 mt-5" >
                <DivSection4 className="DivSection4 p-0 pb-4 text-center ">
                    <h3 className="Bold"><span style={{ color: "#4941A6" }}>لماذا نحن</span></h3><br />
                    <div className="row cards2 p-0 m-0 ">

                        <div className="card2 p-0  col-3   m-4  shadow  " >
                            <div className="boxmov">
                                <p className="m-0 py-1 ">توفير نماذج الإجابات</p>
                            </div>

                            <div className="boxcontent  p-3" style={{ fontSize: "14px", height: "11rem" }} align="end" >
                                بالإضافة إلى إعداد الامتحان، يمكنك تحميل نماذج للإجابات الصحيحة لتوجيه الطلاب ومساعدتهم على الاستعداد بفعالية.</div>
                            <div className="py-3">
                                <MyButton className="btn mx-2 py-0 rounded-4 mb-1" style={{ height: "1.8rem", border: "2px solid #4941A6" }} to={"/Home"} content={"تسجيل الدخول"} />
                                <MyButton className="btn mx-2 py-0 rounded-4 mb-1" style={{ height: "1.8rem", color: "white", backgroundColor: "#FF4C4C", color: "#ffff" }} to={"/Home"} content={"باقات الاشتراك"} />
                            </div>
                        </div>

                        <div className="card2 p-0  col-3 m-4  shadow  " >
                            <div className="boxmov">
                                <p className="m-0 py-1 ">تخصيص الأسئلة</p>
                            </div>
                            <div className="boxcontent p-3" style={{ fontSize: "14px", height: "11rem" }} align="end" >
                                يمكنك تحميل الأسئلة بتنسيقات متعددة مثل النص والصور وتنسيقها وترتيبها حسب الحاجة                       </div>
                            <div className="py-3">
                                <MyButton className="btn mx-2 py-0 rounded-4 mb-1" style={{ height: "1.8rem", border: "2px solid #4941A6" }} to={"/Home"} content={"تسجيل الدخول"} />
                                <MyButton className="btn mx-2 py-0 rounded-4 mb-1" style={{ height: "1.8rem", color: "white", backgroundColor: "#FF4C4C", color: "#ffff" }} to={"/Home"} content={"باقات الاشتراك"} />
                            </div>
                        </div>

                        <div className="card2 p-0  col-3 m-4  shadow " >
                            <div className="boxmov">
                                <p className="m-0 py-1 ">إنشاء امتحانات مخصصة</p>
                            </div>
                            <div className="boxcontent p-3" style={{ fontSize: "14px", height: "11rem" }} align="end" >
                                يمكن للمعلمين إنشاء امتحانات تتناسب مع المناهج الدراسية ومتطلبات الصفوف بكل سهولة. يمكنك تحديد عدد الأسئلة وأنواعها ودرجة صعوبتها ووقت الامتحان والمزيد.                       </div>
                            <div className="py-3">
                                <MyButton className="btn mx-2 py-0 rounded-4 mb-1" style={{ height: "1.8rem", border: "2px solid #4941A6" }} to={"/Home"} content={"تسجيل الدخول"} />
                                <MyButton className="btn mx-2 py-0 rounded-4 mb-1" style={{ height: "1.8rem", color: "white", backgroundColor: "#FF4C4C", color: "#ffff" }} to={"/Home"} content={"باقات الاشتراك"} />
                            </div>
                        </div>
                        <div className="card2 p-0  col-3 m-4 shadow " >
                            <div className="boxmov">
                                <p className="m-0 py-1 ">يمكن للمعلمين</p>
                            </div>
                            <div className="boxcontent p-3" style={{ fontSize: "14px", height: "11rem" }} align="end" >
                                تخصيص وإدارة الامتحانات بسهولة، وتوفير وسيلة فعالة لتقديم الاختبارات بشكل مهني وتنظيمي. يمكن للمعلمين أيضًا تحليل أداء الطلاب بسهولة لتحقيق أهداف التعليم بكفاءة أكبر. انضم إلينا اليوم لتجربة تسهيل عملية إعداد الامتحانات                                              </div>
                            <div className="py-3">
                                <MyButton className="btn mx-2 py-0 rounded-4 mb-1" style={{ height: "1.8rem", border: "2px solid #4941A6" }} to={"/Home"} content={"تسجيل الدخول"} />
                                <MyButton className="btn mx-2 py-0 rounded-4 mb-1" style={{ height: "1.8rem", color: "white", backgroundColor: "#FF4C4C", color: "#ffff" }} to={"/Home"} content={"باقات الاشتراك"} />
                            </div>
                        </div>
                        <div className="card2 p-0  col-3 m-4  shadow  " >
                            <div className="boxmov">
                                <p className="m-0 py-1 ">تصدير الامتحان إلى PDF</p>
                            </div>
                            <div className="boxcontent p-3" style={{ fontSize: "14px", height: "11rem" }} align="end" >
                                بمجرد الانتهاء من إعداد الامتحان، يمكنك تصديره إلى ملف PDF جاهز للتوزيع على الطلاب.                       </div>
                            <div className="py-3">
                                <MyButton className="btn mx-2 py-0 rounded-4 mb-1" style={{ height: "1.8rem", border: "2px solid #4941A6" }} to={"/Home"} content={"تسجيل الدخول"} />
                                <MyButton className="btn mx-2 py-0 rounded-4 mb-1" style={{ height: "1.8rem", color: "white", backgroundColor: "#FF4C4C", color: "#ffff" }} to={"/Home"} content={"باقات الاشتراك"} />
                            </div>
                        </div>

                        <div className="card2 p-0  col-3 m-4   shadow " >
                            <div className="boxmov">
                                <p className="m-0 py-1">تحديد درجة الصعوبة </p>
                            </div>
                            <div className="boxcontent p-3" style={{ fontSize: "14px", height: "11rem" }} align="end" >
                                بمجرد الانتهاء من إعداد الامتحان، يمكنك تصديره إلى ملف PDF جاهز للتوزيع على الطلاب.                       </div>
                            <div className="py-3">
                                <MyButton className="btn mx-2 py-0 rounded-4 mb-1" style={{ height: "1.8rem", border: "2px solid #4941A6" }} to={"/Home"} content={"تسجيل الدخول"} />
                                <MyButton className="btn mx-2 py-0 rounded-4 mb-1" style={{ height: "1.8rem", color: "white", backgroundColor: "#FF4C4C", color: "#ffff" }} to={"/Home"} content={"باقات الاشتراك"} />
                            </div>
                        </div>
                    </div>

                </DivSection4>
            </Section4>
            {/* -----------endsection--------- */}

            {/* -----------section6--------- */}
            <Section6 className="Section6 pt-4">
                <h3 className="Bold text-center"><span style={{ color: "#4941A6" }}>باقات الاشتراك</span></h3><br />
                <DivSection6 className=" container d-flex align-items-center justify-content-center flex-column">
                    <h4 className="teacherbox Bold " ><span style={{ color: "#FE4F60" }}> ( المعلمين ) </span></h4><br />
                    <div className="boxrow row  d-flex align-items-center justify-content-evenly">

                        <div className="boxpre p-2 col-sm-3 shadow  " style={{backgroundColor:"#8C57FB"}}>
                            <h3 className="Bold" style={{ color: "#FE4F60" }}><span>BASIC</span></h3>
                            <h3  style={{ color: "#FE4F60" }}><span className="fs-5">$ </span><span className="Bold" > 49</span></h3>
                            <div className="pt-5  text-white" dir="rtl">
                             <p><img className="checkicone" src={park_check} alt="check" />اسم الباقه</p>
                             <p><img className="checkicone" src={park_check} alt="check" />وصف الباقه</p>
                             <p><img className="checkicone" src={park_check} alt="check" />عدد الأسئلة</p>
                             <p><img className="checkicone" src={park_check} alt="check" />عدد الامتحانات</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                            <MyButton className="btn mx-2 py-0 rounded-3 " style={{ height: "1.6rem", color: "white", backgroundColor: "#4941A6", color: "#ffff" }} to={"/Home"} content={"اشترك الآن"} />
                            </div>
                             </div>

                        <div className="boxpre bac p-2 col-sm-3 shadow " style={{backgroundColor:"#4941A6"}}>
                            <h3 className="Bold" style={{ color: "#4941A6" }}><span>STANDARD</span></h3>
                            <h3  style={{ color: "#FE4F60" }}><span className="fs-5">$ </span><span className="Bold" > 49</span></h3>
                            <div className="pt-5  text-white" dir="rtl">
                             <p><img className="checkicone " src={park_check} alt="check" />اسم الباقه</p>
                             <p><img className="checkicone " src={park_check} alt="check" />وصف الباقه</p>
                             <p><img className="checkicone " src={park_check} alt="check" />عدد الأسئلة</p>
                             <p><img className="checkicone " src={park_check} alt="check" />عدد الامتحانات</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                            <MyButton className="btn mx-2 py-0 rounded-3 " style={{ height: "1.6rem", color: "white", backgroundColor: "#C01F59", color: "#ffff" }} to={"/Home"} content={"اشترك الآن"} />
                            </div>
                             </div>

                        <div className="boxpre  p-2 col-sm-3 shadow " style={{backgroundColor:"#C01F59"}}>
                            <h3 className="Bold" style={{ color: "#C01F59" }}><span>PREMIUM</span></h3>
                            <h3  style={{ color: "#FE4F60" }}><span className="fs-5">$ </span><span className="Bold" > 39</span></h3>
                            <div className="pt-5  text-white" dir="rtl">
                            <p><img className="checkicone " src={park_check} alt="check" />اسم الباقه</p>
                             <p><img className="checkicone " src={park_check} alt="check" />وصف الباقه</p>
                             <p><img className="checkicone " src={park_check} alt="check" />عدد الأسئلة</p>
                             <p><img className="checkicone " src={park_check} alt="check" />عددالامتحانات</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                            <MyButton className="btn mx-2 py-0 rounded-3 " style={{ height: "1.6rem", color: "white", backgroundColor: "#4941A6", color: "#ffff" }} to={"/Home"} content={"اشترك الآن"} />
                            </div>
                             </div>
                      
                    </div>
                </DivSection6>

                <DivSection6 className=" container d-flex align-items-center justify-content-center flex-column pt-4">
                    <h4 className="teacherbox Bold " ><span style={{ color: "#FE4F60" }}> ( الطلاب ) </span></h4><br />
                    <div className="boxrow row  d-flex align-items-center justify-content-evenly">

                        <div className="boxpre p-2 col-sm-3 shadow  " style={{backgroundColor:"#8C57FB"}}>
                            <h3 className="Bold" style={{ color: "#FE4F60" }}><span>BASIC</span></h3>
                            <h3  style={{ color: "#FE4F60" }}><span className="fs-5">$ </span><span className="Bold" > 49</span></h3>
                            <div className="pt-5  text-white" dir="rtl">
                             <p><img className="checkicone" src={park_check} alt="check" />اسم الباقه</p>
                             <p><img className="checkicone" src={park_check} alt="check" />وصف الباقه</p>
                             <p><img className="checkicone" src={park_check} alt="check" />عدد الأسئلة</p>
                             <p><img className="checkicone" src={park_check} alt="check" />عدد الامتحانات</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                            <MyButton className="btn mx-2 py-0 rounded-3 " style={{ height: "1.6rem", color: "white", backgroundColor: "#4941A6", color: "#ffff" }} to={"/Home"} content={"اشترك الآن"} />
                            </div>
                             </div>

                        <div className="boxpre bac p-2 col-sm-3 shadow " style={{backgroundColor:"#4941A6"}}>
                            <h3 className="Bold" style={{ color: "#4941A6" }}><span>STANDARD</span></h3>
                            <h3  style={{ color: "#FE4F60" }}><span className="fs-5">$ </span><span className="Bold" > 49</span></h3>
                            <div className="pt-5  text-white" dir="rtl">
                             <p><img className="checkicone " src={park_check} alt="check" />اسم الباقه</p>
                             <p><img className="checkicone " src={park_check} alt="check" />وصف الباقه</p>
                             <p><img className="checkicone " src={park_check} alt="check" />عدد الأسئلة</p>
                             <p><img className="checkicone " src={park_check} alt="check" />عدد الامتحانات</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                            <MyButton className="btn mx-2 py-0 rounded-3 " style={{ height: "1.6rem", color: "white", backgroundColor: "#C01F59", color: "#ffff" }} to={"/Home"} content={"اشترك الآن"} />
                            </div>
                             </div>

                        <div className="boxpre p-2 col-sm-3 shadow " style={{backgroundColor:"#C01F59"}}>
                            <h3 className="Bold" style={{ color: "#C01F59" }}><span>PREMIUM</span></h3>
                            <h3  style={{ color: "#FE4F60" }}><span className="fs-5">$ </span><span className="Bold" > 39</span></h3>
                            <div className="pt-5  text-white" dir="rtl">
                            <p><img className="checkicone " src={park_check} alt="check" />اسم الباقه</p>
                             <p><img className="checkicone " src={park_check} alt="check" />وصف الباقه</p>
                             <p><img className="checkicone " src={park_check} alt="check" />عدد الأسئلة</p>
                             <p><img className="checkicone " src={park_check} alt="check" />عددالامتحانات</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                            <MyButton className="btn mx-2 py-0 rounded-3 " style={{ height: "1.6rem", color: "white", backgroundColor: "#4941A6", color: "#ffff" }} to={"/Home"} content={"اشترك الآن"} />
                            </div>
                             </div>
                      
                    </div>
                </DivSection6>
             
            </Section6>

            {/* -----------endsection--------- */}
            {/* ----------Footer--------- */}

            <Footer className="footer" dir="rtl">
                <div className="row  footerrow  m-0">

                    <div className="col-md-4">
                        <h3><span className="" style={{ color: "#FFB419 " }} >Examero</span></h3>
                        <p style={{ color: "#ffff " }}>تقديم خدمات تعليمية وأكاديمية مميزة في مختلف المجالات لجميع الطلبة والباحثين في جميع المستويات التعليمية والأكاديمية</p>
                    </div>

                    <div className="colrow col-md-4"  >
                        <div className="cgg" style={{ display: "flex", justifyContent: "end", alignItems: "center", flexDirection: "column" }}>
                            <h3 className="p-0" style={{ display: "flex", justifyContent: "start", alignItems: "end" }}><span className="" style={{ color: "#FFB419" }} >روابط سريعة</span></h3>
                            <div className="" style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                <Link className="stylelink" to="/" >الرئيسية</Link>
                                <Link className="stylelink" to="/" >منصة الموظفين</Link>
                                <Link className="stylelink" to="/" >منصة تدريب المعلمين</Link>
                                <Link className="stylelink" to="/" >openeims منصة</Link>
                                <Link className="stylelink" to="/" >إنشاء حساب</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 py-3" style={{ display: "flex", flexDirection: "column" }} >
                        <h3><span className=" " style={{ color: "#FFB419", }}  >أرقامنا وعناوننا</span></h3>
                        <ul className="listfoter">
                            <li className="bulits">عنوان : في قلب كل معلم</li>
                            <li className="bulits">هاتف : 00962781466490</li>
                            <li className="bulits">الايميل : examero.123@Support.Com</li>

                        </ul>
                    </div>

                </div>
            </Footer>
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
const Section4 = styled.section``;
const DivSection4 = styled.div``;
const Section6 = styled.section``;
const DivSection6 = styled.div``;
const Footer = styled.section``;
export default Home;
