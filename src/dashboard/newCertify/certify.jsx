import React, { useEffect, useState } from 'react'
import jsPDF from 'jspdf'
import img from "./../../assets/image/certificate-background.png"
import mainCertificate from "./../../assets/image/ph_certificate.svg"
import fowrword from "./../../assets/image/Forward.svg"
import { ToastContainer, toast } from 'react-toastify'
import Api_Dashboard from '../interceptor/interceptorDashboard'


function Certify() {

    const notify = (AlertPointSuccess) => {
        toast.success(AlertPointSuccess, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    };

    
    const Errornotify = (AlertPoint) => {
        toast.error(AlertPoint, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    };

    const [data, setData] = useState([]);
    const [activePlanData, SetactivePlanData] = useState([]);

    const [selectedItem, SetSelected] = useState('')
    const [AlertPoint, SetAlertPoint] = useState('')
    const [AlertPointSuccess, SetAlertPointSuccess] = useState('')
    const [idOfPointSelected, SetidOfPointSelected] = useState('')
    const [user, setInput] = useState({
        firstName: '',
        last_name:"",
        address:"",
        techerName:""

    })
    const getinput = (e) => {
        user[e.target.name] = e.target.value
        setInput(user);
    }
    const getTeacherInselection =async (e) => {
        const selectedValue = e.target.value;
        SetSelected(selectedValue);
        if (selectedValue) {
            await getConnect(selectedValue);
        }
    }
const SendSpecification = async (e) => {
    e.preventDefault();
    const payload = {
        teacher_id: selectedItem
    }
    if(idOfPointSelected){
        payload.plan_id=idOfPointSelected  
    }
    console.log(payload);

  await  Api_Dashboard.post('/specification', payload).then((response) => {
    // if(!c){
    //     console.log("mostafa youn nedd select e");
    //     return
    // };

        let x=response.data.message
        SetAlertPointSuccess(x)
        notify(x)
        generateCertificate("name")

    }).catch((err) => {
        console.log(err);
        let x=err.response.data.message
        SetAlertPoint(x);
        Errornotify(x)
    })
}
const getConnect = async (selectedItem) => {
    await Api_Dashboard.get(`/plans/${selectedItem}/teacher`).then((response) => {
        SetactivePlanData(response.data.data)
    }).catch((err) => {
        console.log(err);
    })
}

const getTeacher = async () => {
    await Api_Dashboard.get('/teachers/selection').then((response) => {
        setData(response.data.data)
    }).catch((err) => {
        console.log(err);
    })
}

const getPoint = (e) => {
    const selectedValue = e.target.value;
    console.log(selectedValue);
    SetidOfPointSelected(selectedValue);
}

useEffect(() => {
    getTeacher()
}, [])

    const generateCertificate = (name, course) => {
        let f = "mostafa"
        course = f
        // Create a new jsPDF instance
        const doc = new jsPDF();



        // Add background image
        doc.addImage(img, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());

        doc.setFontSize(36);
        // doc.setFont('helvetica'); // Change the font family and style
        doc.text(user.firstName,  105, 160, { align: 'center' }); // put the nick name 

        // Add course name
        doc.setFontSize(20);
        doc.text(user.last_name, 105, 195, { align: 'center' }); // put the course name


        doc.setFontSize(20);
        doc.text(user.address, 160, 230, { align: 'center' }); // put the course name

        
        doc.setFontSize(20);
        doc.text(user.techerName, 50, 230, { align: 'center' }); // put the course name

        // Save the PDF
        doc.save(`${user.firstName}-${user.last_name}-${user.address}-${user.techerName}.pdf`);
    };
    return (
        <>
                            <ToastContainer position='top-center' />

        <form onSubmit={SendSpecification}>
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
                        <input type="text" name="firstName" id="" className='form-control' onChange={getinput} />
                        <div className='mt-3'>
                            <label htmlFor="student">اسم المادة</label>
                            <input type="text" name="last_name" id="" className='form-control'  onChange={getinput}/>
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="student">اسم مدير المدرسة</label>
                            <input type="text" name="address" id="" className='form-control'  onChange={getinput}/>
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="student"> اختر اسم المعلم</label>
                            <select
                                        id="dataSelect"
                                        className="form-select"
                                        // value=""
                                        onChange={getTeacherInselection}
                                        required
                                    >
                                        <option value="" disabled selected>اختر اسم المعلم</option>
                                        {data.map((item, index) => (
                                            <option onClick={()=>getConnect()} key={index} value={item.id}>
                                                {item.email}
                                            </option>
                                        ))}
                                    </select>                        </div>
                        <div className='mt-3'>
                            <label htmlFor="student">اسم الباقة</label>
                            <select
                                        id="dataSelect"
                                        className="form-select"
                                        // value=""
                                        onChange={getPoint}
                                        
                                    >
                                        <option value="" disabled selected>اختر اسم الباقه</option>
                                        {activePlanData.map((item, index) => (
                                            <option  key={index} value={item.plan.id}>
                                                {item.plan.name}
                                            </option>
                                        ))}
                                    </select>                  
                                                            </div>
                    </div>


                    <div className='col-7' style={{ marginRight: "25px" }}>
                        <div className='col-12'>

                            <label for="exampleFormControlTextarea1">اسم المعلم</label>
                            <input class="form-control" id="exampleFormControlTextarea1" rows="5.5" name='techerName'  onChange={getinput}/>
                        </div>

                        <div className='' style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                            {/* <div className='col-5'>
                                <label className='label_logo_' htmlFor="student" style={{fontSize:"1vw"}}>تاريخ إصدار الشهادة</label>
                                <input type="date" name="manger_school" id="" className='form-control' />
                            </div> */}

                            {/* <div className='col-5'>
                                <label className='label_logo_' htmlFor="student" style={{fontSize:"1vw"}}>شعار المدرسة ( إن وجد )</label>
                                <input type="file" name="manger_school" id="" className='form-control'  placeholder='تحميل شعار مدرستك'/>
                            </div> */}
                        </div>

                    </div>
                </div>

                <div className='col-12 mt-5' style={{ direction: "ltr", display: "flex", justifyContent: "flex-start" }}>
                    <div>
                        {/* <input onChange={getinput} type="text" name='firstName'  /> */}
                        <button style={{ backgroundColor: "#C01F59" }} className='btn '>تحميل الشهادة
                        </button>
                    </div>
                </div>
                
            </div>
            </form>
        </>

    );
}


export default Certify