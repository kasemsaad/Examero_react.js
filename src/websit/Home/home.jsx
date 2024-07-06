import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import './HomeStyle.css';
import right from "../../assets/icons/Home/mdi_success-circle-outline.svg";
import fluent from "../../assets/icons/Home/fluent-mdl2_commitments.svg";
import lucide_git from "../../assets/icons/Home/lucide_git-pull-request-create-arrow.svg";
import ph_target from "../../assets/icons/Home/ph_target-bold.svg";
import park_check from "../../assets/icons/Home/icon-park_check-correct.svg";
import ImgProfile from "../../assets/image/home/Group 322.svg";
import ImgProfile2 from "../../assets/image/home/Group 323.svg";
import ImgProfile3 from "../../assets/image/home/Group 320.svg";
import ImgProfile4 from "../../assets/image/home/Group 323.svg";
import logoex from "../../assets/image/لوجو examero-01 1.svg";
import paypal from "../../assets/image/home/1655977977paypal-logo-transparent.png";
import mastercard from "../../assets/image/home/MasterCard_Logo.svg.png";
import Api_Website from "../../utlis/axios_utils_websit";
import { useNavigate } from 'react-router-dom';
import TawkToScript from '../chat/TawkToScript';

function Home() {
    const setId = (id) => {
        localStorage.setItem("sidbarId", JSON.stringify(id));
    };

    const sec1 = useRef();
    const sec2 = useRef();
    const sec3 = useRef();
    const sec4 = useRef();
    const sec5 = useRef();
    const sec6 = useRef();
    const scrollHandler = (elmRef) => {
        window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
    }
    const handleScroll = () => {
        const sections = document.querySelectorAll('.animationBoxltr, .animationBoxrtl, .animationBoxltrimg, .animationBoxrtlimg  ');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top + window.pageYOffset < scrollTop + window.innerHeight) {
                section.classList.add('visible');
            }
        });
    };

    const [student_data, setStudent_data] = useState(null);
    const [teacher_data, setTeacher_data] = useState(null);
    const [Data, setData] = useState("");
    const [baymentObj, setbaymentObj] = useState("");
    const [user, setuser] = useState("");
    const [UserPayment, setUserPayment] = useState("");
    const navigate = useNavigate();
    const logout = () => {
        if (user === "student") {

            Api_Website.post(`/students/logout`)
                .then(response => {
                    localStorage.removeItem("token_user");
                    navigate("/")

                })
                .catch(error => {

                    console.error("Error not logout ");
                });
        } else {
            Api_Website.post(`/teachers/logout`)
                .then(response => {
                    localStorage.removeItem("token_user");
                    navigate("/")
                })
                .catch(error => {

                    console.error("Error not logout ");
                });
        }

    }
    useEffect(() => {
        setuser(localStorage.getItem("user"))


        Api_Website.get(`/students/refresh`)
            .then(response => {
                setData(response.data.User);

            })
            .catch(error => {

                console.error("Error fetching subjects data:");
            });

        // Api_Website.get(`/teachers/refresh`)
        // .then(response => {
        //     setData(response.data);
        //   console.log(response.data);
        // })
        // .catch(error => {
        //   console.error("Error fetching subjects data:");
        // });

        Api_Website.get(`/teacher-plan`)
            .then(response => {
                setTeacher_data(response.data);
            })
            .catch(error => {
                console.error("Error fetching teacher data:", error);
            });

        Api_Website.get(`/student-plan`)
            .then(response => {
                setStudent_data(response.data);
            })
            .catch(error => {
                console.error("Error fetching student data:", error);
            });



        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (!student_data || !teacher_data) {
        return <>
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        </>;
    }

    const loading = () => {
        setTimeout(() => {
            const load = document.getElementById("reload");
            // const body = document.getElementsByTagName("body");
            load.style.display = "none"
            document.body.style.removeProperty('overflow');
            let backdrop = document.querySelector('.modal-backdrop.fade.show');
            if (backdrop) {
                backdrop.remove();
            }
        }, 4000)
    }

    setTimeout(() => {

        const token = localStorage.getItem("token_user")
        if (token) {
            const login = document.getElementById('login');
            login.style.display = "block";
            const buttonsz = document.getElementById('buttons');
            buttonsz.style.display = "none";
        }
        else {
            const login = document.getElementById('login');
            login.style.display = "none";
            const buttonsz = document.getElementById('buttons');
            buttonsz.style.display = "block";
        }
    }, 100);
    const mastercardStudentApi = (id) => {
        const data = {
            plan_id: id
        }
        Api_Website.post(`students/payments/pay-with-paymob`, data)

            .then(response => {
                console.log(response.data.redirect_url)
                window.open(response.data.redirect_url, '_blank');
                loading()
            })
            .catch(error => {
                console.error("Error fetching mastercard data:");
                loading()
                setTimeout(() => {
                    navigate("/login_student")
                }, 4000);
            });
    }
    const paypalStudentApi = (id) => {
        const data = {
            plan_id: id
        }
        Api_Website.post(`students/payments/pay-with-paypal`, data)
            .then(response => {
                window.open(response.data.redirect_url, '_blank');
                loading()
            })
            .catch(error => {
                console.error("Error fetching paypal data:");
                loading()
                setTimeout(() => {
                    navigate("/login_student")
                }, 4000);

            });
    }
    const mastercardTeacherApi = (id) => {
        const data = {
            plan_id: id
        }
        Api_Website.post(`/teachers/payments/pay-with-paymob`, data)
            .then(response => {
                window.open(response.data.redirect_url, '_blank');
                loading()
            })
            .catch(error => {
                console.error("Error fetching mastercard data:");
                loading()
                setTimeout(() => {
                    navigate("/login_teacher")
                }, 4000);

            });
    }
    const paypalTeacherApi = (id) => {
        const data = {
            plan_id: id
        }
        Api_Website.post(`/teachers/payments/pay-with-paypal`, data)
            .then(response => {
                window.open(response.data.redirect_url, '_blank');
                loading()

            })
            .catch(error => {
                console.error("Error fetching paypal data:");
                loading()
                setTimeout(() => {
                    navigate("/login_teacher")
                }, 4000);

            });
    }

    return (
        <>
            <TawkToScript />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
                crossOrigin="anonymous"
            />
            {/* -----------Navbar--------- */}
            <nav className="navbar navbarsss navbar-expand-lg position-fixed d-flex align-items-center justify-content-center p-0 shadow" dir="rtl">

                <div className="container p-0 navbarwidth d-flex align-items-center" style={{}}>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" d-flex align-items-center justify-content-between" style={{ width: "100%" }}>
                        <div className="collapse navbar-collapse kasem" id="navbarNav" style={{ width: "80vw" }}>
                            <div className="classnav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active " aria-current="page" onClick={() => scrollHandler(sec1)}>الرئيسية</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active px-3" onClick={() => scrollHandler(sec2)}>من نحن</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active px-3" onClick={() => scrollHandler(sec3)}>هدفنا</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active px-3" onClick={() => scrollHandler(sec4)}>لماذا نحن</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active px-3" onClick={() => scrollHandler(sec5)}>آراء العملاء</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active px-3" onClick={() => scrollHandler(sec6)}>باقات الإشتراك</Link>

                                    </li>
                                </ul>
                            </div>
                            <div id="login" >
                                <Link className="btn" onClick={() => { setId(1) }} style={{ height: "2.5rem", width: "8rem", color: "#4941A6", backgroundColor: "" }} to={"/student/homeStudentView"}>{Data.fullName}</Link>
                                <button onClick={() => { logout() }} className="btn  " style={{ height: "2.5rem", width: "8rem", border: "none" }} >تسجيل خروج</button>
                            </div>
                            <div id="buttons" >
                                <Link className="btn mx-3  " style={{ height: "2.5rem", width: "8rem", color: "white", backgroundColor: "#4941A6" }} to={"/CreateStudentAccount"}>انشاء حساب</Link>
                                <Link className="btn mx-3" type="button"
                                    style={{ height: "2.5rem", width: "8rem", border: "2px solid #4941A6" }}
                                    to="/Login_student"
                                >
                                    تسجيل الدخول
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* -----------EndNavbar--------- */}
            {/* -----------section1--------- */}
            <Section className="Section d-flex pt-5  justify-content-center pt-5" ref={sec1}>
                <DivSection1 className="DivSection1 mt-1 container row p-0 m-1">
                    <SectionImage1 className="SectionImage1 col-md-6 p-0">
                    </SectionImage1>
                    <Sectioncontent1 className="Sectioncontent col-md-6  p-0">
                        <div className="box p-2 " dir="rtl">
                            <h3 className="Bold">امتحانك في متناول يدك</h3><br />
                            <div className="fontSizeText ps-1">
                                منصة <span style={{ color: "#B33E68" }}>Examero</span> هي منصة مخصصة لمساعدة المعلمين والطلاب على إعداد الامتحانات بكل أنواعها التشخيصية و الشهرية والنهائية بكل سهولة وفعالية .
                            </div>
                            <div className="fontSizeText py-4 ps-1 mb-4">
                                نحن نقدم منصة رائدة تساعد المعلمين والطلاب <span style={{ color: "#B33E68" }}>(  المدارس الحكومية و الخاصة و دروس  التقوية ) </span> على تصميم امتحانات مخصصة وتحمليها<span style={{ color: "#B33E68" }}> بصيغة pdf</span> مع خيار توفير نماذج الإجابة النموذجية وتحديد درجة صعوبة الامتحان اثناء إنشائه  .
                            </div>
                            <Link onClick={() => scrollHandler(sec6)} className="Button py-2  px-5 rounded-5 ">اشترك الآن</Link>
                        </div>
                    </Sectioncontent1>
                </DivSection1>
            </Section>
            <Douts className="Douts "></Douts>
            {/* -----------endsection1--------- */}
            {/* -----------section2--------- */}
            <Section2 className="Section2 d-flex " id="Section2" ref={sec2}>
                <DivSection2 className="DivSection2  row p-0 m">
                    <SectionImage2 className="SectionImage2 col-md-4 p-0">
                        {/* <img className="d"  src={imgs1} alt="" /> */}
                    </SectionImage2>
                    <Sectioncontent2 className="Sectioncontent2 col-md-7  flex-column -5 ">
                        <div className="" dir="rtl">
                            <h3 className="Bold"><span style={{ color: "#4941A6" }}>من نحن </span></h3><br />
                            <h3>منصة متكاملة لمساعدة المعلمين والطلاب في إعداد الامتحانات بكل أنواعها</h3><br />
                            <div className="fontSizeText pb-5" style={{ lineHeight: '2' }}>
                                نحن في موقع  "Examero " ملتزمون بدعم المعلمين والطلاب في إعداد الامتحانات بسهولة وفعالية.
                                نقدم منصة سهلة الإستخدام تتيح لك إنشاء الامتحان بسرعة ودقة كمعلم أو طالب .  دعنا نساعدك في توفير الوقت والجهد في عملية إعداد امتحانك .   </div>
                        </div>
                        <div className="blockButtons" dir="rtl">
                            <Link to="/" className="Button2" onClick={() => scrollHandler(sec6)}>استكشف باقاتنا</Link>
                            <Link to="/" className="Button3 mx-2 ">تواصل عبر الواتساب</Link>
                        </div>
                    </Sectioncontent2>
                </DivSection2>
            </Section2>
            {/* -----------endsection2--------- */}
            {/* -----------section3--------- */}
            <Section3 className="Section3 mt-5" ref={sec3}>
                <DivSection3 className="container DivSection3 p-0 pb-4 text-center ">
                    <h3 className="Bold  "><span style={{ color: "#4941A6" }}>هدفنا</span></h3><br />
                    <p className=" fs-5 pt-5 fontSizeText " dir="rtl">هدفنا في موقع <span>'Examero'</span>هو تقديم دعم شامل للمعلمين.
                        <span style={{ backgroundColor: "#FFDC96" }}> نسعى جاهدين لتوفير أدوات وموارد تساعدهم
                        </span>
                    </p>
                    <p className="fs-6" dir="rtl">نحن نؤمن بأهمية دور المعلمين في بناء مستقبل مشرق للتعليم ونسعى لدعمهم في تحقيق هذا الهدف.</p>
                    <div className="row cards pt-5 m-0 ">

                        <div className="card card1  col-md-2 p-0 m-3 shadow bg-white " >
                            <div className="parentCircleIcon  p-0">
                                <div className="circleicone">
                                    <img style={{ width: "25px", paddingRight: "4px" }} src={right} alt="right" />
                                </div>
                            </div>
                            <div className="py-5 p-2">
                                <p><span style={{ color: "#A63131" }}>غايتنا</span> هي تقديم مساعدة حقيقية للمعلمين وتحقيق النجاح في التعليم.</p>
                            </div>
                        </div>

                        <div className="card card1 col-md-2 p-0 m-3 shadow bg-white " >
                            <div className="parentCircleIcon  p-0">
                                <div className="circleicone">
                                    <img style={{ width: "25px", paddingRight: "4px" }} src={fluent} alt="right" />
                                </div>
                            </div>
                            <div className="py-5  p-2">
                                <p>نحن <span style={{ color: "#A63131" }}>ملتزمون</span> بتوفير أدوات مبتكرة لتقديم تجربة تعليمية
                                    ممتازة.</p>
                            </div>
                        </div>

                        <div className="card card1 col-md-2 p-0 m-3 shadow bg-white " >
                            <div className="parentCircleIcon  p-0">
                                <div className="circleicone">
                                    <img style={{ width: "25px", paddingRight: "4px" }} src={lucide_git} alt="right" />
                                </div>
                            </div>
                            <div className="py-5  p-2">
                                <p> <span style={{ color: "#A63131" }}>نسعى </span>لتوفير منصة تسهل عليك إنشاء أسئلة امتحانية بسرعة ودقة.</p>
                            </div>
                        </div>
                        <div className="card card1 col-md-2 p-0 m-3 shadow bg-white " >
                            <div className="parentCircleIcon  p-0">
                                <div className="circleicone">
                                    <img style={{ width: "25px", paddingRight: "4px" }} src={ph_target} alt="right" />
                                </div>
                            </div>
                            <div className="py-5  p-2">
                                <p><span style={{ color: "#A63131" }}>هدفنا </span> هو دعم المعلمين في إعداد الامتحانات بطريقة ميسرة ومؤثرة.</p>
                            </div>
                        </div>
                    </div>
                </DivSection3>
            </Section3>
            {/* -----------endsection--------- */}
            {/* -----------section4--------- */}
            <Section4 className="Section4 mt-5" ref={sec4}>
                <DivSection4 className="DivSection4 p-0 pb-4 text-center d-flex align-items-center justify-content-center  flex-column ">

                    <h3 className="Bold"><span style={{ color: "#4941A6" }}>لماذا نحن</span></h3><br />
                    <div className="row cards2 p-0 m-0  ">

                        <div className="card2 p-0  col-3  m-4  shadow  " >
                            <div className="boxmov ">
                                <p className="m-0 py-1 ">توفير نماذج الإجابات</p>
                            </div>

                            <div className="boxcontent  p-3"  >
                                بالإضافة إلى إعداد الامتحان، يمكنك تحميل نماذج للإجابات الصحيحة لتوجيه الطلاب ومساعدتهم على الاستعداد بفعالية.</div>
                            <div className="py-3">
                                <Link className="btn mx-2 py-0 my-2   rounded-5 px-3" style={{ height: "1.8rem", border: "2px solid #4941A6" }} to={"/login_teacher"} >تسجيل الدخول</Link>
                                <Link className="btn mx-2 py-0  rounded-5 px-3" style={{ height: "1.8rem", backgroundColor: "#FF4C4C", color: "#ffff" }} onClick={() => scrollHandler(sec6)} >باقات الاشتراك</Link>
                            </div>
                        </div>

                        <div className="card2 p-0  col-3 m-4  shadow  " >
                            <div className="boxmov">
                                <p className="m-0 py-1 ">تخصيص الأسئلة</p>
                            </div>
                            <div className="boxcontent p-3"  >
                                يمكنك تحميل الأسئلة بتنسيقات متعددة مثل النص والصور وتنسيقها وترتيبها حسب الحاجة                       </div>
                            <div className="py-3">
                                <Link className="btn mx-2 py-0 my-2   rounded-5 px-3" style={{ height: "1.8rem", border: "2px solid #4941A6" }} to={"/login_teacher"} >تسجيل الدخول</Link>
                                <Link className="btn mx-2 py-0  rounded-5 px-3" style={{ height: "1.8rem", backgroundColor: "#FF4C4C", color: "#ffff" }} onClick={() => scrollHandler(sec6)} >باقات الاشتراك</Link>
                            </div>
                        </div>

                        <div className="card2 p-0  col-3 m-4  shadow " >
                            <div className="boxmov">
                                <p className="m-0 py-1 ">إنشاء امتحانات مخصصة</p>
                            </div>
                            <div className="boxcontent p-3"  >
                                يمكن للمعلمين إنشاء امتحانات تتناسب مع المناهج الدراسية ومتطلبات الصفوف بكل سهولة. يمكنك تحديد عدد الأسئلة وأنواعها ودرجة صعوبتها ووقت الامتحان والمزيد.                       </div>
                            <div className="py-3">
                                <Link className="btn mx-2 py-0 my-2   rounded-5 px-3" style={{ height: "1.8rem", border: "2px solid #4941A6" }} to={"/login_teacher"} >تسجيل الدخول</Link>
                                <Link className="btn mx-2 py-0  rounded-5 px-3" style={{ height: "1.8rem", backgroundColor: "#FF4C4C", color: "#ffff" }} onClick={() => scrollHandler(sec6)} >باقات الاشتراك</Link>
                            </div>
                        </div>
                        <div className="card2 p-0  col-3 m-4 shadow " >
                            <div className="boxmov">
                                <p className="m-0 py-1 ">يمكن للمعلمين</p>
                            </div>
                            <div className="boxcontent p-3"  >
                                تخصيص وإدارة الامتحانات بسهولة، وتوفير وسيلة فعالة لتقديم الاختبارات بشكل مهني وتنظيمي. يمكن للمعلمين أيضًا تحليل أداء الطلاب بسهولة لتحقيق أهداف التعليم بكفاءة أكبر. انضم إلينا اليوم لتجربة تسهيل عملية إعداد الامتحانات                                              </div>
                            <div className="py-3">
                                <Link className="btn mx-2 py-0 my-2   rounded-5 px-3" style={{ height: "1.8rem", border: "2px solid #4941A6" }} to={"/login_teacher"} >تسجيل الدخول</Link>
                                <Link className="btn mx-2 py-0  rounded-5 px-3" style={{ height: "1.8rem", backgroundColor: "#FF4C4C", color: "#ffff" }} onClick={() => scrollHandler(sec6)} >باقات الاشتراك</Link>

                            </div>
                        </div>
                        <div className="card2 p-0  col-3 m-4  shadow  " >
                            <div className="boxmov">
                                <p className="m-0 py-1 ">تصدير الامتحان إلى PDF</p>
                            </div>
                            <div className="boxcontent p-3"  >
                                بمجرد الانتهاء من إعداد الامتحان، يمكنك تصديره إلى ملف PDF جاهز للتوزيع على الطلاب.                       </div>
                            <div className="py-3">
                                <Link className="btn mx-2 py-0 my-2   rounded-5 px-3" style={{ height: "1.8rem", border: "2px solid #4941A6" }} to={"/login_teacher"} >تسجيل الدخول</Link>
                                <Link className="btn mx-2 py-0  rounded-5 px-3" style={{ height: "1.8rem", backgroundColor: "#FF4C4C", color: "#ffff" }} onClick={() => scrollHandler(sec6)} >باقات الاشتراك</Link>
                            </div>
                        </div>

                        <div className="card2 p-0  col-3 m-4   shadow " >
                            <div className="boxmov">
                                <p className="m-0 py-1">تحديد درجة الصعوبة </p>
                            </div>
                            <div className="boxcontent p-3" >
                                بمجرد الانتهاء من إعداد الامتحان، يمكنك تصديره إلى ملف PDF جاهز للتوزيع على الطلاب.                       </div>
                            <div className="py-3">
                                <Link className="btn mx-2 py-0 my-2   rounded-5 px-3" style={{ height: "1.8rem", border: "2px solid #4941A6" }} to={"/login_teacher"} >تسجيل الدخول</Link>
                                <Link className="btn mx-2 py-0  rounded-5 px-3" style={{ height: "1.8rem", backgroundColor: "#FF4C4C", color: "#ffff" }} onClick={() => scrollHandler(sec6)} >باقات الاشتراك</Link>
                            </div>
                        </div>
                    </div>

                </DivSection4>
            </Section4>
            {/* -----------endsection--------- */}
            {/* -----------section5--------- */}
            <Section5 className="Section5 py-5 d-flex align-items-center justify-content-center flex-column" ref={sec5}>
                <h3 className="Bold"><span style={{ color: "#4941A6" }}>آراء العملاء</span></h3><br />
                <h6 className="Bold"><span style={{ color: "black" }}>اراء مهمه نعتز بها وتدفعنا للامام والابداع </span></h6><br />

                <DivSection5 className="container containerbox ">
                    <div className="d-flex align-items-center justify-content-center text-white">
                        <div className="animationBoxltr" style={{ backgroundImage: "none" }}><h3 className="animationBox2 animationBoxltr px-3 flex-column" dir="rtl">
                            " لقد ساعدني منصة  Examero
                            على توفير الوقت والجهد في إنشاء الامتحانات .
                            إنه يوفر مجموعة متنوعة من الميزات التي تجعل من السهل إنشاء امتحانات عالية الجودة. " <span style={{ color: "#FFC03F" }}>محمد كساسبه </span>
                        </h3> <img className="animationBoxltrimg animationBoximg1" style={{ marginTop: "5vw", marginLeft: "-74vw", width: "4vw" }} src={ImgProfile3} alt="img1" /></div>
                        <div className="animationBoxltr" style={{ backgroundImage: "none" }}><h3 className="animationBoxltr animationBox4 px-3 flex-column" dir="rtl">" لقد ساعدني منصة  Examero  على توفير الوقت والجهد في إنشاء االختبارات.   إنه يوفر مجموعة متنوعة من الميزات التي تجعل من السهل إنشاء اختبارات عالية الجودة. "<span style={{ color: "#FFC03F" }}>محمد كساسبه </span></h3><img className="animationBoxltrimg animationBoximg2" style={{ marginTop: "16vw", marginLeft: "-48vw", width: "3vw" }} src={ImgProfile2} alt="img1" /></div>
                        <div className="animationBoxrtl" style={{ backgroundImage: "none" }}><h3 className="animationBoxrtl animationBox1 px-3 flex-column" dir="rtl">” لقد استخدمت منصة  Examero  لانشاء الامتحانات لطلابي. إنه سهل الاستخدام للغاية ويوفّر مجموعة متنوعة من أنواع الاسئله التي تلبي احتياجاتي. أنا أوصي به بشدة لجميع معلمي المملكة  "<span style={{ color: "#FFC03F" }}>كريم العليان </span></h3><img className="animationBoxltrimg animationBoximg3" style={{ marginTop: "14vw", marginLeft: "74vw", width: "5vw" }} src={ImgProfile} alt="img1" /></div>
                        <div className="animationBoxrtl" style={{ backgroundImage: "none" }}><h3 className="animationBoxrtl animationBox3 px-3 flex-column" dir="rtl">" لقد ساعدني منصة  Examero  على توفير الوقت والجهد في إنشاء االختبارات.   إنه يوفر مجموعة متنوعة من الميزات التي تجعل من السهل إنشاء اختبارات عالية الجودة. "<span style={{ color: "#FFC03F" }}>دانا درابسة</span></h3><img className="animationBoxltrimg animationBoximg4" style={{ marginBottom: "-25vw", marginLeft: "59vw", width: "3.5vw" }} src={ImgProfile4} alt="img1" /></div>
                    </div>
                </DivSection5>
            </Section5>
            {/* -----------endsection--------- */}

            {/* -----------section6--------- */}
            <Section6 className="Section6 pt-4" ref={sec6}>
                <h3 className="Bold text-center"><span style={{ color: "#4941A6" }}>باقات الاشتراك</span></h3><br />
                <DivSection6 className=" container d-flex align-items-center  justify-content-  flex-column">
                    <h4 className="teacherbox Bold " ><span style={{ color: "#FE4F60" }}> ( المعلمين ) </span></h4><br />
                    <div className="boxrow row  d-flex align-items-start justify-content-evenly">

                        <div className="boxpre p-2 col-sm-3 shadow  " style={{ backgroundColor: "#8C57FB" }}>
                            <h3 className="Bold" style={{ color: "#FE4F60" }}><span>{teacher_data.data[0].name}</span></h3>
                            <h3 style={{ color: "black" }}><span className="fs-5">$ </span><span className="Bold" > {teacher_data.data[0].price}</span></h3>
                            <div className="boxchil text-white" dir="rtl">
                                <div className="d-flex align-items-start">
                                    <img className="checkicone" src={park_check} alt="check" />
                                    <p>{teacher_data.data[0].description}</p>
                                </div>

                                <p><img className="checkicone" src={park_check} alt="check" />عدد الأسئلة : {teacher_data.data[0].allow_question} </p>
                                <p><img className="checkicone" src={park_check} alt="check" /> عدد الامتحانات : {teacher_data.data[0].allow_exam}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <button
                                    className="btn mx-2 py-0 rounded-3 "
                                    style={{ height: "3rem", width: "100%", backgroundColor: "#4941A6", color: "#ffff" }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#bayment"
                                    onClick={() => {
                                        setbaymentObj(teacher_data.data[0])
                                        setUserPayment("teacher")
                                    }}
                                >
                                    اشترك الآن
                                </button>                            </div>
                        </div>

                        <div className="boxpre  bac p-2 col-sm-3 shadow  " style={{ backgroundColor: "#4941A6" }}>
                            <h3 className="Bold" style={{ color: "#4941A6" }}><span>{teacher_data.data[1].name}</span></h3>
                            <h3 style={{ color: "black" }}><span className="fs-5">$ </span><span className="Bold" > {teacher_data.data[1].price}</span></h3>
                            <div className="boxchil text-white" dir="rtl">
                                <div className="d-flex align-items-start">
                                    <img className="checkicone" src={park_check} alt="check" />
                                    <p>{teacher_data.data[1].description}</p>
                                </div>

                                <p><img className="checkicone" src={park_check} alt="check" />عدد الأسئلة : {teacher_data.data[1].allow_question} </p>
                                <p><img className="checkicone" src={park_check} alt="check" /> عدد الامتحانات : {teacher_data.data[1].allow_exam}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <button className="btn mx-2 py-0 rounded-3 " style={{ height: "3rem", width: "100%", backgroundColor: "#C01F59", color: "#ffff" }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#bayment"
                                    onClick={() => {
                                        setbaymentObj(teacher_data.data[1])
                                        setUserPayment("teacher")
                                    }}

                                >
                                    اشترك الآن
                                </button>
                            </div>
                        </div>

                        <div className="boxpre p-2 col-sm-3 shadow  " style={{ backgroundColor: "#C01F59" }}>
                            <h3 className="Bold" style={{ color: "#FE4F60" }}><span>{teacher_data.data[2].name}</span></h3>
                            <h3 style={{ color: "black" }}><span className="fs-5">$ </span><span className="Bold" > {teacher_data.data[2].price}</span></h3>
                            <div className="boxchil text-white" dir="rtl">
                                <div className="d-flex align-items-start">
                                    <img className="checkicone" src={park_check} alt="check" />
                                    <p>{teacher_data.data[2].description}</p>
                                </div>

                                <p><img className="checkicone" src={park_check} alt="check" />عدد الأسئلة : {teacher_data.data[2].allow_question} </p>
                                <p><img className="checkicone" src={park_check} alt="check" /> عدد الامتحانات : {teacher_data.data[2].allow_exam}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <button className="btn mx-2 py-0 rounded-3 " style={{ height: "3rem", width: "100%", backgroundColor: "#4941A6", color: "#ffff" }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#bayment"
                                    onClick={() => {
                                        setbaymentObj(teacher_data.data[2])
                                        setUserPayment("teacher")
                                    }}                                >
                                    اشترك الآن
                                </button>

                            </div>
                        </div>

                    </div>
                </DivSection6>

                <DivSection6 className=" container mt-3 d-flex align-items-center justify-content-center flex-column pt-4">
                    <h4 className="teacherbox Bold " ><span style={{ color: "#FE4F60" }}> ( الطلاب ) </span></h4><br />
                    <div className="boxrow row  d-flex align-items-start justify-content-evenly">
                        <div className="boxpre  p-2 col-sm-3 shadow  " style={{ backgroundColor: "#8C57FB" }}>
                            <h3 className="Bold" style={{ color: "#FE4F60" }}><span>{student_data.data[0].name}</span></h3>
                            <h3 style={{ color: "black" }}><span className="fs-5">$ </span><span className="Bold" > {student_data.data[0].price}</span></h3>
                            <div className="boxchil text-white" dir="rtl">
                                <div className="d-flex align-items-start">
                                    <img className="checkicone" src={park_check} alt="check" />
                                    <p>{student_data.data[0].description}</p>
                                </div>

                                <p><img className="checkicone" src={park_check} alt="check" />عدد الأسئلة : {student_data.data[0].allow_question} </p>
                                <p><img className="checkicone" src={park_check} alt="check" /> عدد الامتحانات : {student_data.data[0].allow_exam}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <button className="btn mx-2 py-0 rounded-3 " style={{ height: "3rem", width: "100%", backgroundColor: "#4941A6", color: "#ffff" }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#bayment"
                                    onClick={() => {
                                        setbaymentObj(student_data.data[0])
                                        setUserPayment("student")
                                    }}                                >
                                    اشترك الآن
                                </button>
                            </div>
                        </div>

                        <div className="boxpre  bac p-2 col-sm-3 shadow  " style={{ backgroundColor: "#4941A6" }}>
                            <h3 className="Bold" style={{ color: "#4941A6" }}><span>{student_data.data[1].name}</span></h3>
                            <h3 style={{ color: "black" }}><span className="fs-5">$ </span><span className="Bold" > {student_data.data[1].price}</span></h3>
                            <div className="boxchil text-white" dir="rtl">
                                <div className="d-flex align-items-start">
                                    <img className="checkicone" src={park_check} alt="check" />
                                    <p>{student_data.data[1].description}</p>
                                </div>

                                <p><img className="checkicone" src={park_check} alt="check" />عدد الأسئلة : {student_data.data[1].allow_question} </p>
                                <p><img className="checkicone" src={park_check} alt="check" /> عدد الامتحانات : {student_data.data[1].allow_exam}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <button className="btn mx-2 py-0 rounded-3 " style={{ height: "3rem", width: "100%", backgroundColor: "#C01F59", color: "#ffff" }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#bayment"
                                    onClick={() => {
                                        setbaymentObj(student_data.data[1])
                                        setUserPayment("student")
                                    }}                                  >
                                    اشترك الآن
                                </button>
                            </div>
                        </div>

                        <div className="boxpre  p-2 col-sm-3 shadow  " style={{ backgroundColor: "#C01F59" }}>
                            <h3 className="Bold" style={{ color: "#FE4F60" }}><span>{student_data.data[2].name}</span></h3>
                            <h3 style={{ color: "black" }}><span className="fs-5">$ </span><span className="Bold" > {student_data.data[2].price}</span></h3>
                            <div className="boxchil text-white" dir="rtl">
                                <div className="d-flex align-items-start">
                                    <img className="checkicone" src={park_check} alt="check" />
                                    <p>{student_data.data[0].description}</p>
                                </div>

                                <p><img className="checkicone" src={park_check} alt="check" />عدد الأسئلة : {student_data.data[2].allow_question} </p>
                                <p><img className="checkicone" src={park_check} alt="check" /> عدد الامتحانات : {student_data.data[2].allow_exam}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <button className="btn mx-2 py-0 rounded-3  " style={{ height: "3rem", width: "100%", backgroundColor: "#4941A6", color: "#ffff" }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#bayment"
                                    onClick={() => {
                                        setbaymentObj(student_data.data[2])
                                        setUserPayment("student")
                                    }}                                  >
                                    اشترك الآن
                                </button>
                            </div>
                        </div>
                    </div>
                </DivSection6>

            </Section6>
            {/* -----------endsection--------- */}

            {/* ----------Footer--------- */}

            <Footer className="footer" dir="rtl">
                <div className="row  footerrow d-flex  justify-content-center m-0">
                    <div className="col-md-4">
                        <h3><span className=" cgg" style={{ color: "#FFB419 " }} >Examero</span></h3>
                        <p className="cgg" style={{ color: "#ffff " }}>تقديم خدمات تعليمية وأكاديمية مميزة في مختلف المجالات لجميع الطلبة والباحثين في جميع المستويات التعليمية والأكاديمية</p>
                    </div>

                    <div className="colrow col-md-4"  >
                        <div className="cgg" style={{ display: "flex", justifyContent: "end", alignItems: "center", flexDirection: "column" }}>
                            <h3 className="p-0" style={{ display: "flex", justifyContent: "start", alignItems: "end" }}><span className="" style={{ color: "#FFB419" }} >روابط سريعة</span></h3>
                            <div className="" style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                <Link className="stylelink" to="/" >الرئيسية</Link>
                                <Link className="stylelink" to="/" >منصة الموظفين</Link>
                                <Link className="stylelink" to="/" >منصة تدريب المعلمين</Link>
                                <Link className="stylelink" to="/" >openeims منصة</Link>
                                <Link className="stylelink" to="/CreateTecherAccount" >إنشاء حساب</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 py-3 " style={{ display: "flex", flexDirection: "column" }} >
                        <h3><span className="cgg" style={{ color: "#FFB419", }}  >أرقامنا وعناوننا</span></h3>
                        <ul className="listfoter cgg">
                            <li className="bulits">عنوان : في قلب كل معلم</li>
                            <li className="bulits">هاتف : 00962781466490</li>
                            <li className="bulits">الايميل : examero.123@Support.Com</li>

                        </ul>
                    </div>
                </div>
            </Footer>
            {/* <div className=" d-flex align-items-center justify-content-between"  style={{ backgroundColor:"#4941A6"}}> */}

            <div className="px-4 pt-1 " style={{ borderTop: "2px solid #ffff", backgroundColor: "#4941A6", color: "white" }} >
                <div className="row p-0  m-0 d-flex align-items-center justify-content-center" dir="rtl" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div className="col-md-4 text-end"   >
                        <p>© 2024 Examero. All Rights Reserved</p>
                    </div>
                    <div className="col-md-4 text-center"  >
                        <p>© 2024 Examero. All Rights Reserved</p>
                    </div>
                    <div className="col-md-4 text-start"  >
                        <p>© 2024 Examero. All Rights Reserved</p>

                    </div>

                </div>
            </div>
            {/* </div> */}
            {/* -----------endsection--------- */}
            <div className="modal fade managerFade" id="bayment" tabIndex="-1" aria-labelledby="addManagerModalLabel" aria-hidden="true" style={{ zIndex: "999999999999999999999999999999999999999999999999999" }} >
                <div className="modal-dialog modal-dialog-centered managergDialog">
                    <div className="modal-content managerContent">
                        <div className="modal-header managerHeader d-flex  justify-content-center">
                            <h5 className="modal-title managerTitle text-center ">{baymentObj.name}</h5>
                            <button type="button" className="btn-close kh" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body managerBody">
                            <h4 className="modal-title managerTitle text-center ">الدفع عن طريق</h4>
                            <div className="parent1 py-4">
                                {
                                    UserPayment === "student" ? (
                                        <>
                                            <button className="btn btn-light mx-2"
                                                onClick={() => {
                                                    paypalStudentApi(baymentObj.id)
                                                    console.log(baymentObj)

                                                }}
                                                data-bs-toggle="modal"
                                                data-bs-target="#reload"
                                            >
                                                <img
                                                    className="m-4"
                                                    src={paypal}
                                                    alt="paypal"

                                                    style={{ width: "60px", height: "70px" }}

                                                />
                                            </button>
                                            <button className="btn btn-light mx-2"

                                                onClick={() => {
                                                    mastercardStudentApi(baymentObj.id)
                                                }}
                                                data-bs-toggle="modal"
                                                data-bs-target="#reload"
                                            >

                                                <img
                                                    className="m-4"
                                                    src={mastercard}
                                                    alt="mastercard"

                                                    style={{ width: "60px", height: "70px" }}

                                                />
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button className="btn btn-light mx-2"
                                                onClick={() => {
                                                    paypalTeacherApi(baymentObj.id)

                                                }}
                                                data-bs-toggle="modal"
                                                data-bs-target="#reload"
                                            >
                                                <img
                                                    className="m-4"
                                                    src={paypal}
                                                    alt="paypal"
                                                    style={{ width: "60px", height: "70px" }}

                                                />
                                            </button>
                                            <button className="btn btn-light mx-2"
                                                onClick={() => {
                                                    mastercardTeacherApi(baymentObj.id)
                                                }}
                                                data-bs-toggle="modal"
                                                data-bs-target="#reload"
                                            >
                                                <img
                                                    className="m-4"
                                                    src={mastercard}
                                                    alt="mastercard"
                                                    style={{ width: "60px", height: "70px" }}

                                                />
                                            </button>

                                        </>
                                    )
                                }

                            </div>
                            <h3 className="modal-title managerTitle text-center ">${baymentObj.price}</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade managerFade" style={{ backgroundColor: "#00000032", border: "none" }} id="reload" tabIndex="-1" aria-labelledby="addManagerModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered managergDialog " >
                    <div className="modal-content managerContent " style={{ backgroundColor: "transparent", border: "none" }}>
                        <div className="spinner" data-bs-dismiss="modal" >
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
const Section = styled.section``;
const DivSection1 = styled.div``;
const Sectioncontent1 = styled.div``;
const SectionImage1 = styled.div``;
// const Button = styled.button``;
const Section2 = styled.section``;
const Douts = styled.div``;
const DivSection2 = styled.div``;
const Sectioncontent2 = styled.div``;
const SectionImage2 = styled.div``;
// const Button2 = styled.button``;
const Section3 = styled.section``;
const DivSection3 = styled.div``;
const Section4 = styled.section``;
const DivSection4 = styled.div``;
const Section5 = styled.section``;
const DivSection5 = styled.div``;
const Section6 = styled.section``;
const DivSection6 = styled.div``;
const Footer = styled.section``;
export default Home;
