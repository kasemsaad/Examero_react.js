import React, { useState } from 'react'
import "./Certificate.css"
import jsPDF from 'jspdf'
import img from "./../../assets/image/certificate-background.png"
import mainCertificate from "./../../assets/image/ph_certificate.svg"
import fowrword from "./../../assets/image/Forward.svg"


function CertificateGenerator() {
    const [user, setInput] = useState({
        firstName: ''
    })
    const getinput = (e) => {
        user[e.target.name] = e.target.value
        setInput(user);
    }

    const generateCertificate = (name, course) => {
        let f = "mostafa"
        course = f
        // Create a new jsPDF instance
        const doc = new jsPDF();



        // Add background image
        doc.addImage(img, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());

        doc.setFontSize(36);
        // doc.setFont('helvetica'); // Change the font family and style
        doc.text(user.firstName, 140, 160, { align: 'center' }); // put the nick name 

        // Add course name
        doc.setFontSize(20);
        doc.text(course, 105, 195, { align: 'center' }); // put the course name

        // Save the PDF
        doc.save(`${user.firstName}-${course}.pdf`);
    };
    return (
        <>
            <div className="container  pb-4" style={{ overflow: 'auto', marginTop: '18px', direction: 'rtl', height: 'auto', border: "2px solid purble", borderRadius: "10px", width: "90%", margin: "auto" }}>

                <div className='col-12  mt-3 d-flex ' style={{ alignItems: "center", }}>
                    <div className="" style={{ width: "4.333333%" }}>
                        <img src={mainCertificate} className="img-fluid rounded-circle" alt="صورة شخصية" style={{ width: '16px', height: '16px' }} />
                    </div>
                    <div className='col-6'>
                        <p style={{ margin: '0', padding: "0", color: "#FFFFFF", fontWeight: "700", fontSize: '24px' }}>شهادات التقدير
                        </p>
                    </div>
                </div>

                <div className='col-12 mt-4'>
                    <div style={{ width: "170px", height: "27px", backgroundColor: '#FF7380', borderRadius: '112px', display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div>
                            <p style={{ margin: "0", padding: "0", color: "#000000", fontSize: "14px" }}>استخراج شهادة</p>
                        </div>
                        <div style={{ marginRight: "20px" }}>
                            <img src={fowrword} alt="fowrword" />
                        </div>
                    </div>
                </div>

                <div className='wraber_input_certify mt-3' style={{ display: "flex" }}>

                    <div className='col-4 ' style={{ height: "" }}>
                        <label htmlFor="student">اسم الطالب</label>
                        <input type="text" name="student_name" id="" className='form-control' />
                        <div className='mt-3'>
                            <label htmlFor="student">اسم المعلم</label>
                            <input type="text" name="teacher_name" id="" className='form-control' />
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="student">اسم المعلم</label>
                            <input type="text" name="teacher_name" id="" className='form-control' />
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="student">اسم الباقة</label>
                            <input type="text" name="teacher_name" id="" className='form-control' />
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="student">اسم مدير المدرسة</label>
                            <input type="text" name="manger_school" id="" className='form-control' />
                        </div>
                    </div>


                    <div className='col-7' style={{ marginRight: "25px" }}>
                        <div className='col-12'>

                            <label for="exampleFormControlTextarea1">سبب منح الشهادة</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5.5"></textarea>
                        </div>

                        <div className='' style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                            <div className='col-5'>
                                <label className='label_logo_' htmlFor="student" style={{fontSize:"1vw"}}>تاريخ إصدار الشهادة</label>
                                <input type="date" name="manger_school" id="" className='form-control' />
                            </div>

                            <div className='col-5'>
                                <label className='label_logo_' htmlFor="student" style={{fontSize:"1vw"}}>شعار المدرسة ( إن وجد )</label>
                                <input type="file" name="manger_school" id="" className='form-control'  placeholder='تحميل شعار مدرستك'/>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='col-12 mt-5' style={{ direction: "ltr", display: "flex", justifyContent: "flex-start" }}>
                    <div>
                        {/* <input onChange={getinput} type="text" name='firstName'  /> */}
                        <button style={{ backgroundColor: "#C01F59" }} className='btn ' onClick={() => generateCertificate(user.firstName, "props.name", "props.course")}>تحميل الشهادة
                        </button>
                    </div>
                </div>
                
            </div>
        </>

    );
}


export default CertificateGenerator