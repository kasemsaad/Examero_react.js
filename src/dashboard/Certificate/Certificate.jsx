import React, { useEffect, useState } from 'react';
import './Certificate.css';
import jsPDF from 'jspdf';
import img from './../../assets/image/02-01 1.png';
import mainCertificate from './../../assets/image/ph_certificate.svg';
import fowrword from './../../assets/image/Forward.svg';
import Api_Dashboard from '../interceptor/interceptorDashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import chains from '../font/chain.js'; 
import image_ from './../../assets/image/02-01 1 (1).png';
import image_2 from './../../assets/image/04-01 1.png';
import image_3 from './../../assets/image/05-01 1.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

    

function CertificateGenerator() {

    const navigate= useNavigate()
    const role = useSelector((state) => state.RoleAccess.role); 
    const acccessDenied = ()=>{
        if (role != "owner"){
            navigate('/dashboard/accessDenied')
        }
    }

    const [user, setInput] = useState({
        firstName: '',
        teacher_name:"",
        manger_school:"",
        techerName:""

    })
    const getinput = (e) => {
        user[e.target.name] = e.target.value
        setInput(user);
    }

    const [logoSchool,SetlogoSchool]=useState(null)
    const getLogoSchool = (e)=>{
        if (e.target.name === 'logo_school'){
            const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                SetlogoSchool(reader.result); 
            };
            reader.readAsDataURL(file);

        }}
    }
    const [data, setData] = useState([]);
    const [activePlanData, SetactivePlanData] = useState([]);
    const [selectedItem, SetSelected] = useState('');
    const [AlertPoint, SetAlertPoint] = useState('');
    const [AlertPointSuccess, SetAlertPointSuccess] = useState('');
    const [idOfPointSelected, SetidOfPointSelected] = useState('');


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
        });
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
        });
    };

    const getTeacherInselection = async (e) => {
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
            payload.plan_id = idOfPointSelected;
        }
        console.log(payload);
        if(!c){
            Errornotify("اختار شهاده اولا")
                
            return;
        }

        await Api_Dashboard.post('/certificate', payload).then((response) => {

          

            let x = response.data.message;
            SetAlertPointSuccess(x);
            notify(x);
            generateCertificate();

        }).catch((err) => {
            console.log(err);
            let x = err.response.data.message;
            SetAlertPoint(x);
            Errornotify(x);
        });
    }

    const getConnect = async (selectedItem) => {
        await Api_Dashboard.get(`/plans/${selectedItem}/teacher`).then((response) => {
            SetactivePlanData(response.data.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    const getTeacher = async () => {
        await Api_Dashboard.get('/teachers/selection').then((response) => {
            setData(response.data.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    const getPoint = (e) => {
        const selectedValue = e.target.value;
        console.log(selectedValue);
        SetidOfPointSelected(selectedValue);
    }

    useEffect(() => {
        getTeacher();
        acccessDenied()

    }, [])

    const x = image_3;
    console.log(x);
    let [c, setC] = useState("");

    const onImg = (v) => {
        notify("تم اختيار الشهاده بنجاح")
        setC(v);
    }

    const generateCertificate = (name, course) => {
        let f = "خالد";
        course = f;

        let d = "مصطفي";

        let x = "";

    
        const doc = new jsPDF();
        // Add background image مهمه 
        doc.addImage(c, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());

        doc.addFileToVFS('Amiri-Regular.ttf', chains);
        doc.addFont('Amiri-Regular.ttf', 'Amiri', 'normal');
        doc.setFont('Amiri');

        if (logoSchool) {
            doc.addImage(logoSchool, 'PNG', 150, 30, 40, 50);  
        }

        doc.setFontSize(20);
        doc.text(user.firstName, 97, 135, { align: 'right' }); 
        doc.setFontSize(20);
        doc.text(user.teacher_name, 153, 135, { align: 'right' }); 

        doc.setFontSize(20);
        doc.text(user.manger_school, 156, 233, { align: 'right' });

        doc.setFontSize(20);
        doc.text(x, 68, 233, { align: 'right' }); 

        // Save the PDF
        doc.save(`${user.firstName}-${user.teacher_name}-${user.manger_school}-${x}.pdf`);
    };

    return (
        <>
            <ToastContainer position='top-center' />
           {/* {
           logoSchool? <img src={logoSchool} alt="" />:""
           }  */}
            <form onSubmit={SendSpecification}>
                <div className="container pb-4" style={{ overflow: 'auto', marginTop: '18px', direction: 'rtl', height: 'auto', border: "2px solid purble", borderRadius: "10px", width: "90%", margin: "auto" }}>
                    <div className='col-12 mt-3 d-flex' style={{ alignItems: "center" }}>
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
                        <div className='col-4'>
                            <label htmlFor="student">اسم الطالب</label>
                            <input type="text" name="firstName" id="" className='form-control' onChange={getinput} />
                            <div className='mt-3'>
                                <label htmlFor="student"> اسم المعلم في (الشهاده)</label>
                                <input type="text" name="teacher_name" id="" className='form-control' onChange={getinput}  />
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="student"> اختر اسم المعلم</label>
                                <select
                                    id="dataSelect"
                                    className="form-select"
                                    onChange={getTeacherInselection}
                                    required
                                >
                                    <option value="" disabled selected>اختر اسم المعلم</option>
                                    {data.map((item, index) => (
                                        <option key={index} value={item.id}>
                                            {item.email}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="student">اسم الباقة</label>
                                <select
                                    id="dataSelect"
                                    className="form-select"
                                    onChange={getPoint}
                                >
                                    <option value="" disabled selected>اختر اسم الباقه</option>
                                    {activePlanData.map((item, index) => (
                                        <option key={index} value={item.plan.id}>
                                            {item.plan.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="student">اسم مدير المدرسة</label>
                                <input type="text" name="manger_school" id="" className='form-control' onChange={getinput} />
                            </div>


                            <div className='mt-3'>
                                <label htmlFor="student">  شعار المدرسه ان وجد</label>
                                <input type="file" name="logo_school" id="" className='form-control' onChange={getLogoSchool} />
                            </div>
                        </div>
                        <div className='col-7' style={{ marginRight: "25px" }}>
                            <div className='col-12'>
                                <label htmlFor="exampleFormControlTextarea1">سبب منح الشهادة</label>
                                <textarea  className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className='wrapper_certificate_image mt-4 ' style={{display:"flex" ,justifyContent:"space-between"}}>

                        <div style={{width:"200px",height:"200px"}}>
                            <img src={image_} alt="" width={"100%"}  onClick={()=>onImg("/static/media/02-01 1 (1).5019271e0f6ebea64cc9.png")}/>
                        </div>

                        <div style={{width:"200px",height:"200px"}}>
                            <img src={image_2} alt="" width={"100%"} onClick={()=>onImg("/static/media/04-01 1.1dc51bbe2d441071e5d1.png")} />
                        </div>
                         <div style={{width:"200px",height:"200px"}}>
                            <img src={image_3} alt="" width={"100%"} onClick={()=>onImg("/static/media/05-01 1.5b4235e1d15175fbd180.png")} />
                        </div>  

                    </div>
                    <div className='col-12 mt-4 d-flex ' style={{direction:"ltr"}}>
                        <button  className='btn ' type='submit' style={{backgroundColor:"#C01F59",color:"#ffff"}}>استخراج الشهادة</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default CertificateGenerator;
