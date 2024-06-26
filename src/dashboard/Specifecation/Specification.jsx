import React, { useEffect, useState } from 'react'
import "./Specification.css"
import SpecificationMain from "./../../assets/image/ph_table.svg"
import Api_Dashboard from '../interceptor/interceptorDashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import html2pdf from 'html2pdf.js'; // استيراد مكتبة html2pdf.js

export default function Specification() {

    const [data, setData] = useState([]);
    const [selectedItem, SetSelected] = useState('')
    const [AlertPoint, SetAlertPoint] = useState('')
    const [AlertPointSuccess, SetAlertPointSuccess] = useState('')


    const notify = () => {
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

    
    const Errornotify = () => {
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

    useEffect(() => {
        getTeacher()

    }, [])

    const getTeacherInselection = (e) => {
        SetSelected(e.target.value)
    }

    const getTeacher = async () => {
        await Api_Dashboard.get('/teachers/selection').then((response) => {
            setData(response.data.data)
        }).catch((err) => {
        })
    }

    const SendSpecification = (e) => {
        e.preventDefault();
        Api_Dashboard.post('/specification', {
            teacher_id: selectedItem

        }).then((response) => {
            console.log(response.data.message);
            SetAlertPointSuccess(response.data.message)
            notify()
            downloadPDF()



        }).catch((err) => {
            // console.log(err);
            SetAlertPoint(err.response.data.message);
            Errornotify()
        })
    }
    const downloadPDF = () => {
        const element = document.getElementById('specificationContent');
        html2pdf().from(element).save('specification.pdf');
    }

    return (
        <>
            <ToastContainer position='top-center' />

            <div id="specificationContent" className="container  pb-4 " style={{ overflow: 'auto', marginTop: '18px', direction: 'rtl', height: 'auto', border: "2px solid purble", borderRadius: "10px", width: "90%", margin: "auto" }}>


                <div className='col-12  mt-3 d-flex ' style={{ alignItems: "center", }}>
                    <div className="" style={{ width: "5.333333%" }}>
                        <img src={SpecificationMain} className="img-fluid rounded-circle" alt="صورة شخصية" />
                    </div>
                    <div className='col-6'>
                        <p style={{ margin: '0', padding: "0", color: "#FFFFFF", fontWeight: "700", fontSize: '24px' }}>جدول المواصفات </p>
                    </div>
                </div>

                <div className="wraper_input_spesify x mt-4">

                    <div className='col-12 ' style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

                        <div className='col-5'>
                            <label htmlFor="">اسم المدرسه</label>
                            <input type="text" placeholder='أدخل اسم المدرسة' className='form-control' />
                        </div>


                        <div className='col-5'>
                            <label htmlFor="">اسم المبحث</label>
                            <input type="text" placeholder='أدخل اسم المدرسة' className='form-control' />
                        </div>
                    </div>




                    <div className='col-12 ' style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div className='col-5'>
                            <label htmlFor="">العام الدراسي</label>
                            <input type="text" placeholder='أدخل اسم المدرسة' className='form-control' />
                        </div>
                        <div className='col-5'>
                            <label htmlFor="">اسم الصف</label>
                            <input type="text" placeholder='أدخل اسم المدرسة' className='form-control' />
                        </div>
                    </div>
                    <form onSubmit={SendSpecification}>
                        <div>
                            <div className='col-12 mt-2' style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <div className='col-5'>
                                    <label htmlFor="">اسم المعلم</label>
                                    <select
                                        id="dataSelect"
                                        className="form-select"
                                        // value=""
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


                                <div className='col-5'>
                                    <label htmlFor="">اسم الباقه</label>
                                    <input type="text" placeholder='أدخل اسم المدرسة' className='form-control' />
                                </div>

                            </div>


                        </div>




                        <div className='table_wrabber mt-3 col-12  ' style={{ textAlign: "center", overflowX: 'auto' }}>

                            <table className="table table-bordered mt-4 " >
                                <thead className=''>
                                    <tr>
                                        <th rowspan="2">الرقم</th>
                                        <th rowspan="2">الوحدة</th>
                                        <th rowspan="2">عدد النتاجات</th>
                                        <th colspan="2">وزن الوحدة</th>
                                        <th colspan="3">القدرات العقلية</th>
                                    </tr>
                                    <tr>
                                        <th>عدد النتاجات للوحدة/ مجموع نتاجات الوحده %</th>
                                        <th>علامات الوحدة = وزن الوحده × علامة الامتحان الكلية</th>
                                        <th>معرفة 50%</th>
                                        <th>تطبيق 30%</th>
                                        <th>مهارات تفكير عليا 20%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="number" className='form-control' /> </td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="number" className='form-control' /> </td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                    </tr>


                                    <tr>
                                        <td><input type="number" className='form-control' /> </td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                    </tr>

                                    <tr>
                                        <td><input type="number" className='form-control' /> </td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                    </tr>

                                    <tr>
                                        <td><input type="number" className='form-control' /> </td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                        <td><input type="text" className='form-control' /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='' style={{ direction: 'ltr', textAlign: "left" }}>

                                <button  type='submit' style={{ backgroundColor: "#C01F59" }} className='btn '>تحميل الجدول</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}
