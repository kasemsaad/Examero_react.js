import React from 'react'
import homeBank from "./../../assets/image/Vector (6).svg"

export default function Qbank() {
    return (<>
        <div className="container  pb-4 " style={{ overflow: 'auto', marginTop: '18px', direction: 'rtl', height: '100vh', border: "2px solid purble", borderRadius: "10px", width: "90%", margin: "auto" }}>

            <div className='col-12  mt-3 d-flex ' style={{ alignItems: "center", }}>
                <div className="" style={{ width: "5.333333%" }}>
                    <img src={homeBank} className="img-fluid rounded-circle" alt="صورة شخصية" />
                </div>
                <div className='col-6'>
                    <p style={{ margin: '0', padding: "0", color: "#FFFFFF", fontWeight: "700", fontSize: '24px' }}>وضع الأسئلة </p>
                </div>
            </div>
            <form action="">
                <div className='wrapper_all_quistition' style={{ display: "flex" }}>

                    <div className='col-3 mt-4 ' style={{ height: "auto", borderRadius: "10px" }}>
                        <div className='wraber_elsf pt-3  pb-3'>
                            <div>
                                <label htmlFor=" "> الفصل الدراسي</label>
                                <select class="form-control">
                                    <option>الفصل الدرسي الأول </option>
                                    <option>الفصل الدرسي الثاني</option>
                                </select>
                            </div>


                            <div>
                                <label htmlFor=" "> الصف</label>
                                <select class="form-control">
                                    <option>الفصل الدرسي الأول </option>
                                    <option>الفصل الدرسي الثاني</option>
                                </select>
                            </div>







                            <div>
                                <label htmlFor=" ">المبحث</label>
                                <select class="form-control">
                                    <option>الفصل الدرسي الأول </option>
                                    <option>الفصل الدرسي الثاني</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor=" ">الوحده</label>
                                <select class="form-control">
                                    <option>الفصل الدرسي الأول </option>
                                    <option>الفصل الدرسي الثاني</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor=" ">الدرس</label>
                                <select class="form-control">
                                    <option>الفصل الدرسي الأول </option>
                                    <option>الفصل الدرسي الثاني</option>
                                </select>
                            </div>



                            <div>
                                <label htmlFor=" ">مستوي السؤال</label>
                                <select class="form-control">
                                    <option>الفصل الدرسي الأول </option>
                                    <option>الفصل الدرسي الثاني</option>
                                </select>
                            </div>


                            <div>
                                <label htmlFor=" ">نوع السؤال</label>
                                <select class="form-control">
                                    <option>الفصل الدرسي الأول </option>
                                    <option>الفصل الدرسي الثاني</option>
                                </select>
                            </div>





                        </div>



                    </div>


                    <div className=' col-8 mt-4 ' style={{ marginRight: '18px' }}>


                        <div className='col-12'>
                            <button className='btn' style={{ backgroundColor: "#FE4F60" }}>أضافه سؤال</button>
                        </div>

                        <div className='col-12 mt-3'>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5.5"></textarea>
                        </div>

                        {/* section  i need make quistition to hesham */}
                    </div>

                </div>
                <div className='col-12 mt-4' style={{ direction: "ltr" }}>
                    <div>
                        <button className='btn' style={{ backgroundColor: "#C01F59" }}>حفظ</button>
                    </div>
                </div>
            </form>
        </div>
    </>
    )
}
