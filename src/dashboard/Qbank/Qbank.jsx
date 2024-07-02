import React, { useEffect, useState } from 'react'
import homeBank from "./../../assets/image/Vector (6).svg"
import Api_Dashboard from '../interceptor/interceptorDashboard'

export default function Qbank() {


    const [groupAllData,SetgroupAllData]=useState([])

    const [allDataFromAllSelection,SetallDataFromAllSelection]=useState({
        name:"",
        point:"",
        group_id:"",
        subject_id:"",
        unit_id:"",
        lesson_id:"",
        question_type_id:"",
        level:"",
        semster:"",
        for:"",
        has_branch:"",
        is_choose:"",
        image:"",
    })

    const [data, setData] = useState([]);

  const handleCheckboxChange = (index) => (event) => {
    const newData = [...data];
    newData[index] = {
      ...newData[index],
      isCorrected: event.target.checked ? 1 : 0, // تغيير القيمة بناءً على حالة الـ CheckBox
    };
    setData(newData);
  };

  const handleInputChange = (index) => (event) => {
    const newData = [...data];
    newData[index] = {
      ...newData[index],
      name: event.target.value,
    };
    setData(newData);
  };


    const getAllGroup= async ()=> {
       await Api_Dashboard.get('/groups/selection').then((response)=>{
            console.log(response);
            let allData=response.data.data
            SetgroupAllData(allData)
        }).catch((err)=>{
            console.log(err);
        })
    }
    const [subjectAllData,SetsubjectAllData]=useState([])
    const getSubjectDependOnGroupId= async (idOfGroup)=>{
        await Api_Dashboard.get(`subjects/selection/${idOfGroup}`).then((response)=>{
            SetsubjectAllData(response.data.data)
        }).catch((err)=>{
            console.log(err);
        })
    }

    const [idOfGroup,SetidOfGroup]=useState('')

    const getAllSelection= async (e)=>{
        const data = {...allDataFromAllSelection}
        data[e.target.name]=e.target.value
        SetallDataFromAllSelection(data)
        let idOfGroup=data.group_id 
        // let level=data.level
        // console.log(level);
        let forId = data.for
        console.log(forId);
        if(data.group_id){
            await getSubjectDependOnGroupId(idOfGroup)
        }

        let subJectId =data.subject_id
        if(data.subject_id){
            await getAllUnitsDependOnSubject(subJectId)
        }
    }

    const [unitAllData,SetunitAllData]=useState([])
    const getAllUnitsDependOnSubject =async (idOfSubject)=>{
      await  Api_Dashboard.get(`units/selection/${idOfSubject}`).then((response)=>{
        console.log(response);
        SetunitAllData(response.data.data)
        }).catch((err)=>{
            console.log(err);
        })

    }
 
    const [typeOfQuistition,SettypeOfQuistition]=useState([])
    const getTypeOfQustition =async ()=>{
        await  Api_Dashboard.get('questions-type/selection').then((response)=>{
          console.log(response);
          SettypeOfQuistition(response.data.data)
          }).catch((err)=>{
              console.log(err);
          })
      }

      {
        allDataFromAllSelection.for? console.log("mdm"):console.log("ddddddddd");

        console.log(allDataFromAllSelection.for);
      }




   
    useEffect(()=>{
        getAllGroup()
        getTypeOfQustition()

    },[])









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
                                    <option value="1">الفصل الدرسي الأول </option>
                                    <option value="2">الفصل الدرسي الثاني</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor=" "> الصف</label>
                                <select
                                        id="dataSelect"
                                        className="form-select"
                                        name='group_id'
                                        onChange={getAllSelection}
                                        required
                                    >
                                        <option value="" disabled selected>اختر الصف</option>
                                        {groupAllData.map((item, index) => (
                                            <option  key={index} value={item.id}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>
                            </div>

                             <div>
                                <label htmlFor=" ">المبحث</label>
                                 <select
                                        id="dataSelect"
                                        className="form-select"
                                        name='subject_id'
                                        onChange={getAllSelection}
                                        required
                                    >
                                        <option value="" disabled selected>اختر المبحث</option>
                                        {subjectAllData.map((item, index) => (
                                            <option key={index} value={item.id}>
                                           {  item.name}
                                            </option>
                                        ))}
                                    </select>
                            </div>

                            <div>
                                <label htmlFor=" ">الوحده</label>
                                <select
                                        id="dataSelect"
                                        className="form-select"
                                        // value=""
                                        name='unit_id'
                                        onChange={getAllSelection}
                                        required
                                    >
                                        <option value="" disabled selected>اختر الوحده</option>
                                        {unitAllData.map((item, index) => (
                                            <option key={index} value={item.id}>
                                             {item.name}
                                            </option>
                                        ))}
                                    </select>
                            </div>

                            <div>
                                <label htmlFor=" ">مستوي الأسئلة</label>
                                <select
                                        id="dataSelect"
                                        className="form-select"
                                        onChange={getAllSelection}
                                        name='level'
                                        required
                                    >
                                        <option value="" disabled selected> مستوي السؤال</option>
                                        
                                            <option value="1">
                                                سهل
                                            </option>

                                            <option value="2">
                                                متوسط
                                            </option>
                                            <option value="3">
                                                صعب
                                            </option>
                                            <option value="4">
                                                مهارات تفكير عليا
                                            </option>
                                            <option value="5">
                                               اسئلة خارجية
                                            </option>
                                       
                                    </select>
                            </div>



                            <div>
                                <label htmlFor=" ">نوع السؤال</label>
                                <select
                                        id="dataSelect"
                                        className="form-select"
                                        onChange={getAllSelection}
                                        name='question_type_id'
                                        required
                                    >
                                        <option value="" disabled selected>اختر نوع السؤال</option>
                                        {typeOfQuistition.map((item, index) => (
                                            <option key={index} value={item.id}>
                                             {item.name}
                                            </option>
                                        ))}
                                    </select>
                            </div> 


                             <div>
                                <label htmlFor=" "> صيغة السؤال</label>
                                <select
                                        id="dataSelect"
                                        className="form-select"
                                        name="for"
                                        onChange={getAllSelection}
                                        required
                                    >
                                        <option value="" disabled selected> اختر صيغة السؤال</option>
                                            <option value="2">مذكر</option>                                                
                                            <option value="3"> مؤنث </option>
                                            <option value="1">كليهما</option>
                                    </select>
                            </div> 


                            <div>
                                <label htmlFor=" ">لديه تفرعات</label>
                                <select
                                        id="dataSelect"
                                        className="form-select"
                                        name="has_branch"
                                        onChange={getAllSelection}
                                        required
                                    >
                                        <option value="" disabled selected>اختر التفرع</option>
                                            <option value="0">رئيسي</option>                                                
                                            <option value="1"> لديه تفرعات </option>
                                    </select>
                            </div> 

                            <div>
                                <label htmlFor=" "> هل اختياري</label>
                                <select
                                        id="dataSelect"
                                        className="form-select"
                                        name="is_choice"
                                        onChange={getAllSelection}
                                        required
                                    >
                                        <option value="" disabled selected> هل اختياري</option>
                                            <option value="1">نعم</option>                                                
                                            <option value="0">  لا </option>
                                    </select>
                            </div> 


                            <div>
                                <label htmlFor=" "> درجه السؤال </label>
                                <input onChange={getAllSelection} name='point' type="number" className="form-control" placeholder="درجه السؤال" required />
                            </div> 


                        </div>



                    </div>


                    <div className=' col-8 mt-4 ' style={{ marginRight: '18px' }}>


                        <div className='col-12'>
                            <button className='btn' style={{ backgroundColor: "#FE4F60" }}>أضافه سؤال</button>
                        </div>

                        <div className='col-12 mt-3'>
                            <textarea name='name' class="form-control" id="exampleFormControlTextarea1" rows="5.5"></textarea>
                        </div>

{
     allDataFromAllSelection.for == 1 ?


                        <div className="wraper_input_and_checkbox">

                            <div className="mt-4" style={{ display: "flex", alignItems: "center" }} >
                                <div className='check' style={{ width: "20px", transform: "scale(2)", marginTop: "-18px" }}>
                                    <input type="checkbox" name="adminIds" width={"100px"} />
                                </div>
                                <div className='camera_and_input '>
                                    <input type="text" className="form-control" id="inputField" placeholder="Enter text" />
                                    {/* <i className="fas fa-image fa-2x" aria-hidden="true" style={{direction:"ltr"}}></i> */}
                                    <input type="file" id="imageInput" accept="image/*" style={{ direction: "ltr" }} />
                                </div>
                            </div>


                        </div>
                        :""}




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
