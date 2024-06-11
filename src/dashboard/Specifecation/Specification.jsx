import React from 'react'
import "./Specification.css"
import SpecificationMain from "./../../assets/image/ph_table.svg"

export default function Specification() {
  return (
    <>
<div className="container  pb-4 " style={{ overflow: 'auto', marginTop: '18px', direction: 'rtl', height: 'auto', border: "2px solid purble", borderRadius: "10px", width: "90%", margin: "auto" }}>


             <div className='col-12  mt-3 d-flex bg-dark' style={{ alignItems: "center", }}>
                <div className="" style={{ width: "5.333333%" }}>
                    <img src={SpecificationMain} className="img-fluid rounded-circle" alt="صورة شخصية" />
                </div>
                <div className='col-6'>
                    <p style={{ margin: '0', padding: "0", color: "#FFFFFF", fontWeight: "700", fontSize: '24px' }}>جدول المواصفات </p>
                </div>
            </div>

            <div className="wraper_input_spesify bg-danger mt-4">

                <div className='col-12 ' style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>

                    <div className='col-5'>
                        <label htmlFor="">اسم المدرسه</label>
                        <input type="text" placeholder='أدخل اسم المدرسة' className='form-control' />
                    </div>


                    <div className='col-5'>
                        <label htmlFor="">اسم المبحث</label>
                        <input type="text" placeholder='أدخل اسم المدرسة' className='form-control' />
                    </div>
                </div>



                
                <div className='col-12 ' style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>

                    <div className='col-5'>
                        <label htmlFor="">العام الدراسي</label>
                        <input type="text" placeholder='أدخل اسم المدرسة' className='form-control' />
                    </div>


                    <div className='col-5'>
                        <label htmlFor="">اسم الصف</label>
                        <input type="text" placeholder='أدخل اسم المدرسة' className='form-control' />
                    </div>

                </div>

            </div>



            <div className='table_wrabber mt-3 col-12 bg-danger ' style={{textAlign:"center",overflowX:'auto',height:'100vh'}}>

<table className="table table-bordered mt-4 table-dark" >
        <thead className='table-info'>
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
                <td><input type="text" style={{width:"100%",border:"none",borderRadius:'none'}} className='form-control bg-info' /></td>
                <td>وحدة 1</td>
                <td>10</td>
                <td>10%</td>
                <td>10 علامات</td>
                <td>5</td>
                <td>3</td>
                <td>2</td>
            </tr>
            <tr>
                <td>2</td>
                <td>وحدة 2</td>
                <td>15</td>
                <td>15%</td>
                <td>15 علامات</td>
                <td>7.5</td>
                <td>4.5</td>
                <td>3</td>
            </tr>
        </tbody>
    </table>

            </div>



    
    </div>
    </>
  )
}
