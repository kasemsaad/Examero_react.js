import React, { useEffect, useState } from 'react'
import homeBank from "./../../assets/image/Vector (6).svg"
import Api_Dashboard from '../interceptor/interceptorDashboard'
import ModalDelete, { Notify, NotifyError } from '../Alert/alertToast';
import './Qbank.css'
import Confetti from 'react-confetti'

export default function Qbank() {


    const [groupAllData, SetgroupAllData] = useState([])

        const [showConfetti, setShowConfetti] = useState(false);
    // ---------------------------------------------------------------------
    const [inputs, setInputs] = useState([
        { option: "", is_correct: false, image: '' },
        { option: "", is_correct: false, image: '' },
        { option: "", is_correct: false, image: '' },
        { option: "", is_correct: false, image: '' }
    ]);


    const handleChange = (index, event) => {
        const { type, value, checked, files } = event.target;
        const newInputs = [...inputs];
        if (type === 'text') {
            newInputs[index].option = value;
        } else if (type === 'checkbox') {
            newInputs[index].is_correct = checked;
        } else if (type === 'file') {
            newInputs[index].image = files[0];
        }
        setInputs(newInputs);
    };
    const getValues = () => {
        console.log(inputs);
    };

    // end of multiple --> 4----------------------------------

    const [inputsTow, setinputsTow] = useState([
        { option: "", is_correct: false, image: '' },
        { option: "", is_correct: false, image: '' },

    ]);

    const handleChangeTowInput = (index, event) => {
        const { type, value, checked, files } = event.target;
        const newInputs = [...inputsTow];
        if (type === 'text') {
            newInputs[index].option = value;
        } else if (type === 'checkbox') {
            newInputs[index].is_correct = checked;
        } else if (type === 'file') {
            newInputs[index].image = files[0];
        }
        setinputsTow(newInputs);
    };

    const getValuesTOW = () => {
        console.log(inputsTow);
    };

    // -------------------------------one input ---------------

    const [inputsOne, setinputsOne] = useState([
        { option: "", is_correct: false, image: '' }
    ]);

    const handleChangeOneInput = (index, event) => {
        const { type, value, checked, files } = event.target;
        const newInputs = [...inputsOne];
        if (type === 'text') {
            newInputs[index].option = value;
        } else if (type === 'checkbox') {
            newInputs[index].is_correct = checked;
        } else if (type === 'file') {
            newInputs[index].image = files[0];
        }
        setinputsOne(newInputs);
    };


 
    // -----------------------------------------------------------------------------
    const [allDataFromAllSelection, SetallDataFromAllSelection] = useState({
        name: "",
        point: "",
        group_id: "",
        subject_id: "",
        unit_id: "",
        lesson_id: "",
        question_type_id: "",
        level: "",
        semster: "",
        for: "",
        has_branch: "",
        is_choose: "",
        image: "",
    })

    const resetForm = () => {
        setInputs([
            { option: "", is_correct: false, image: '' },
            { option: "", is_correct: false, image: '' },
            { option: "", is_correct: false, image: '' },
            { option: "", is_correct: false, image: '' }
        ]);
    
        setinputsTow([
            { option: "", is_correct: false, image: '' },
            { option: "", is_correct: false, image: '' },
        ]);
    
        setinputsOne([
            { option: "", is_correct: false, image: '' }
        ]);
    
    
        SetallDataFromAllSelection({
            name: "",
            point: "",
            group_id: "",
            subject_id: "",
            unit_id: "",
            lesson_id: "",
            question_type_id: "",
            level: "",
            semster: "",
            for: "",
            has_branch: "",
            is_choose: "",
            image: "",

        })
        SetshowQuistitionById({});
        SetsubjectAllData([]);
        SetunitAllData([]);
        SetallLesson([]);

        // console.log(showQuistitionById);
        

    };
    



    const getAllGroup = async () => {
        await Api_Dashboard.get('/groups/selection').then((response) => {
            // console.log(response);
            let allData = response.data.data
            SetgroupAllData(allData)
        }).catch((err) => {
            console.log(err);
        })
    }
    const [subjectAllData, SetsubjectAllData] = useState([])
    const getSubjectDependOnGroupId = async (idOfGroup) => {
        await Api_Dashboard.get(`subjects/selection/${idOfGroup}`).then((response) => {
            SetsubjectAllData(response.data.data)
        }).catch((err) => {
            console.log(err);
        })
    }


    const [idOfGroup, SetidOfGroup] = useState('')

    // const getAllSelection =  (e) => {
    //     const data = { ...allDataFromAllSelection }
    //     data[e.target.name] = e.target.value        
    //     SetallDataFromAllSelection(data)
    //     let idOfGroup = data.group_id
     
    //     if (data.group_id) {
    //          getSubjectDependOnGroupId(idOfGroup)
    //     }

    //     let subJectId = data.subject_id 
    //     if (data.subject_id) {
    //          getAllUnitsDependOnSubject(subJectId)

    //     }

    //     let unitId = data.unit_id
    //     if (data.unit_id) {
    //          getAllLessonsDependOnUnit(unitId)
    //     }

    //     let questionsIdType = data.question_type_id
    //     if(questionsIdType){
    //         getAllshowQuistitionById(questionsIdType)
    //     }
    // }
  


    const getAllSelection = (e) => {
        const data = { ...allDataFromAllSelection };
        data[e.target.name] = e.target.value;
        SetallDataFromAllSelection(data);
    
        let idOfGroup = data.group_id;
        if (idOfGroup && idOfGroup !== allDataFromAllSelection.group_id) {
            getSubjectDependOnGroupId(idOfGroup);
        }
    
        let subJectId = data.subject_id;
        if (subJectId && subJectId !== allDataFromAllSelection.subject_id) {
            getAllUnitsDependOnSubject(subJectId);
        }
    
        let unitId = data.unit_id;
        if (unitId && unitId !== allDataFromAllSelection.unit_id) {
            getAllLessonsDependOnUnit(unitId);
        }
    
        let questionsIdType = data.question_type_id;
        if (questionsIdType && questionsIdType !== allDataFromAllSelection.question_type_id) {
            getAllshowQuistitionById(questionsIdType);
        }
    }
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          SetallDataFromAllSelection({ ...allDataFromAllSelection, image: file });
        }
      }


    const [unitAllData, SetunitAllData] = useState([])
    const getAllUnitsDependOnSubject = async (idOfSubject) => {
        await Api_Dashboard.get(`units/selection/${idOfSubject}`).then((response) => {
            // console.log(response);
            SetunitAllData(response.data.data)
        }).catch((err) => {
            console.log(err);
        })

    }

const [allLesson,SetallLesson]=useState([])
    const getAllLessonsDependOnUnit = async (idOfUnit) => {
        await Api_Dashboard.get(`/lessons/selection/${idOfUnit}`).then((response) => {
            SetallLesson(response.data.data)
        }).catch((err) => {
            console.log(err);
        })
    }


    const [showQuistitionById,SetshowQuistitionById]=useState({})
    const getAllshowQuistitionById = async (idOfquesId) => {
        await Api_Dashboard.get(`/questions-type/${idOfquesId}`).then((response) => {
            // console.log(response.data.data);
            SetshowQuistitionById(response.data.data)
        }).catch((err) => {
            console.log(err);
        })
    }

    const [typeOfQuistition, SettypeOfQuistition] = useState([])
    const getTypeOfQustition = async () => {
        await Api_Dashboard.get('questions-type/selection').then((response) => {
            // console.log(response);
            SettypeOfQuistition(response.data.data)
        }).catch((err) => {
            console.log(err);
        })
    }






    useEffect(() => {
        getAllGroup()
        getTypeOfQustition()

    }, [])
    const [isLoading, setIsLoading] = useState(false);


    const handlaeSubmit = async (event)=>{
        event.preventDefault();
        const payload ={
            name: allDataFromAllSelection.name,
            point: allDataFromAllSelection.point,
            group_id: allDataFromAllSelection.group_id,
            subject_id: allDataFromAllSelection.subject_id,
            unit_id: allDataFromAllSelection.unit_id,
            lesson_id: allDataFromAllSelection.lesson_id ,
            question_type_id: allDataFromAllSelection.question_type_id,
            level: allDataFromAllSelection.level,
            semster: allDataFromAllSelection.semster,
            for: allDataFromAllSelection.for,
            has_branch: allDataFromAllSelection.has_branch,
            is_choose: allDataFromAllSelection.is_choose,
            image: allDataFromAllSelection.image,
        }

        if(payload.image == undefined || payload.image == null || payload.image == ""){
            delete payload.image
        }
        // --------------- 4  ---------------
        const newInputs = inputs.map((val) => {
            if (val.image === undefined || val.image === null || val.image === '') {
                const { image, ...rest } = val;
                val = rest;
            }
        
            if (val.is_correct !== undefined) {
                val.is_correct = val.is_correct ? 1 : 0;
            }
            return val;
        });
        

        if( showQuistitionById?.name == "متعدد الاختيارات"){
            payload.options = newInputs
        }

        // ------------------ end of 4----------------
        // start inputs 2------------------------------------
        const towInoutts = inputsTow.map((val) => {
            if (val.image === undefined || val.image === null || val.image === '') {
                const { image, ...rest } = val;
                val = rest;
            }
        
            if (val.is_correct !== undefined) {
                val.is_correct = val.is_correct ? 1 : 0;
            }
            return val;
        });
        

        if( showQuistitionById?.name == "صح/خطأ"){
            payload.options = towInoutts
        }
    //--------------------------------------------------------
    // start inputs 1------------------------------------
    const oneInputs = inputsOne.map((val) => {
        if (val.image === undefined || val.image === null || val.image === '') {
            const { image, ...rest } = val;
            val = rest;
        }
    
        if (val.is_correct !== undefined) {
            val.is_correct = val.is_correct ? 1 : 0;
        }
        return val;
    });

    if( showQuistitionById?.name == "سؤال انشائي"){
        payload.options = oneInputs
    }
// ------------------------------------------------


    await Api_Dashboard.post('/questions',payload,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response)=>{
        Notify(response.data.Message)
        console.log(response.data.Message);
        // clearNameField()
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
        }, 3000);
        resetForm(); 
    //    SetshowQuistitionById({});

      }).catch((err)=>{
        NotifyError(err.response.data.message)
        console.log(err);
      
      })    
}


//   console.log(showQuistitionById);
// console.log(allDataFromAllSelection);
          

    return (<>
    {showConfetti && (
                        <Confetti
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: 9999
                            }}
                        />
                    )}
    < ModalDelete/>
        <div className="container  pb-4 " style={{ overflow: 'auto', marginTop: '18px', direction: 'rtl', height: 'auto', border: "2px solid purble", borderRadius: "10px", width: "90%", margin: "auto" }}>

            <div className='col-12  mt-3 d-flex ' style={{ alignItems: "center", }}>
                <div className="" style={{ width: "5.333333%" }}>
                    <img src={homeBank} className="img-fluid rounded-circle" alt="صورة شخصية" />
                </div>
                <div className='col-6'>
                    <p style={{ margin: '0', padding: "0", color: "#FFFFFF", fontWeight: "700", fontSize: '24px' }}>وضع الأسئلة </p>
                </div>
            </div>
            <form onSubmit={handlaeSubmit}>
                <div className='wrapper_all_quistition' style={{ display: "flex" }}>

                    <div className='col-3 mt-4 ' style={{ height: "auto", borderRadius: "10px" }}>
                        <div className='wraber_elsf pt-3  pb-3'>
                        <div className='mt-2'>
                                <label htmlFor=" ">نوع السؤال</label>
                                <select
                                    id="dataSelect"
                                    className="form-select"
                                    onChange={getAllSelection}
                                    name='question_type_id'
                                    required
                                    value={allDataFromAllSelection.question_type_id}

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
                                <label htmlFor=" "> الفصل الدراسي</label>
                                <select id="dataSelect"
                                    className="form-select" 
                                    onChange={getAllSelection}
                                    required
                                    name='semster'
                                    value={allDataFromAllSelection.semster}



                                    >
                                    <option value="" disabled selected>اختر الفصل الدراسي</option>
                                    <option value="1">الفصل الدرسي الأول </option>
                                    <option value="2">الفصل الدرسي الثاني</option>
                                </select>
                            </div>

                            <div className='mt-2'>
                                <label htmlFor=" "> الصف</label>
                                <select
                                    id="dataSelect"
                                    className="form-select"
                                    name='group_id'
                                    onChange={getAllSelection}
                                    required
                                    value={allDataFromAllSelection.group_id}
                                >
                                    <option value="" disabled selected>اختر الصف</option>
                                    {groupAllData.map((item, index) => (
                                        <option key={index} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                          { allDataFromAllSelection.group_id? <div className='mt-2'>
                                <label htmlFor=" ">المبحث</label>
                                <select
                                    id="dataSelect"
                                    className="form-select"
                                    name='subject_id'
                                    onChange={getAllSelection}
                                    required
                                    value={allDataFromAllSelection.subject_id}

                                >
                                    <option value="" disabled selected>اختر المبحث</option>
                                    {subjectAllData.map((item, index) => (
                                        <option key={index} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>:""}

                          {  allDataFromAllSelection.subject_id?<div className='mt-2'>
                                <label htmlFor=" ">الوحده</label>
                                <select
                                    id="dataSelect"
                                    className="form-select"
                                    // value=""
                                    name='unit_id'
                                    onChange={getAllSelection}
                                    required
                                    value={allDataFromAllSelection.unit_id}

                                >
                                    <option value="" disabled selected>اختر الوحده</option>
                                    {unitAllData.map((item, index) => (
                                        <option key={index} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>:""}



                         {  allDataFromAllSelection.unit_id? <div className='mt-2'>
                                <label htmlFor=" ">اختر السؤال</label>
                                <select
                                    id="dataSelect"
                                    className="form-select"
                                    name='lesson_id'
                                    onChange={getAllSelection}
                                    required
                                    value={allDataFromAllSelection.lesson_id}

                                >
                                    <option value="" disabled selected> اسم الدرس </option>
                                    {allLesson.map((item, index) => (
                                        <option key={index} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>:""}



                            <div className='mt-2'>
                                <label htmlFor=" ">مستوي الأسئلة</label>
                                <select
                                    id="dataSelect"
                                    className="form-select"
                                    onChange={getAllSelection}
                                    name='level'
                                    required
                                    value={allDataFromAllSelection.level}

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



                        


                            <div className='mt-2'>
                                <label htmlFor=" "> صيغة السؤال</label>
                                <select
                                    id="dataSelect"
                                    className="form-select"
                                    name="for"
                                    onChange={getAllSelection}
                                    required
                                    value={allDataFromAllSelection.for}

                                >
                                    <option value="" disabled selected> اختر صيغة السؤال</option>
                                    <option value="2">مذكر</option>
                                    <option value="3"> مؤنث </option>
                                    <option value="1">كليهما</option>
                                </select>
                            </div>


                            <div className='mt-2'>
                                <label htmlFor=" ">لديه تفرعات</label>
                                <select
                                    id="dataSelect"
                                    className="form-select"
                                    name="has_branch"
                                    onChange={getAllSelection}
                                    required
                                    value={allDataFromAllSelection.has_branch}

                                >
                                    <option value="" disabled selected>اختر التفرع</option>
                                    <option value="0">رئيسي</option>
                                    <option value="1"> لديه تفرعات </option>
                                </select>
                            </div>

                            <div className='mt-2'>
                                <label htmlFor=" "> هل اختياري</label>
                                <select
                                    id="dataSelect"
                                    className="form-select"
                                    name="is_choose"
                                    onChange={getAllSelection}
                                    required
                                    value={allDataFromAllSelection.is_choose}

                                >
                                    <option value="" disabled selected> هل اختياري</option>
                                    <option value="1">نعم</option>
                                    <option value="0">  لا </option>
                                </select>
                            </div>


                            <div className='mt-2'>
                                <label htmlFor=" "> درجه السؤال </label>
                                <input min={1} onChange={getAllSelection} name='point' type="number" className="form-control" placeholder="درجه السؤال" required value={allDataFromAllSelection.point}
 />
                            </div>


                            <div className='mt-2'>
                                <label htmlFor=" ">اضافه صوره سؤال</label>
                                <input onChange={handleImageChange} name='image' type="file"  className="form-control" placeholder="" />
                            </div>


                        </div>



                    </div>


                    <div className=' col-8 mt-4 ' style={{ marginRight: '18px' }}>


                        <div className='col-12'>
                            <button className='btn' style={{ backgroundColor: "#FE4F60",color:"#ffff" }}>أضافه سؤال</button>
                        </div>

                        <div className='col-12 mt-2'>
                            <textarea onChange={getAllSelection} name='name' class="form-control" id="exampleFormControlTextarea1" rows="5.5" value={allDataFromAllSelection.name} />
                        </div>

                        {
                            showQuistitionById?.name == "متعدد الاختيارات" ?
                                <div>
                                    {inputs.map((item, index) => (
                                        <div key={index} className="wraper_input_and_checkbox">
                                            <div className="mt-4" style={{ display: "flex", alignItems: "center" }}>
                                                <div className="check" style={{ width: "20px", transform: "scale(2)", marginTop: "-18px" }}>
                                                    <input
                                                        type="checkbox"
                                                        // name="adminIds"
                                                        width={"100px"}
                                                        onChange={(e) => handleChange(index, e)}
                                                        checked={item.is_correct}
                                                    />
                                                </div>
                                                <div className="camera_and_input">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="inputField"
                                                        placeholder="Enter text"
                                                        onChange={(e) => handleChange(index, e)}
                                                        value={item.name}
                                                        required
                                                    />
                                                    <input
                                                        type="file"
                                                        className='imageInput_qbank'
                                                        id="imageInput"
                                                        accept="image/*"
                                                        name='image'
                                                        style={{ direction: "ltr" }}
                                                        onChange={(e) => handleChange(index, e)}
                                                    />
                                                    {/* {item.image && <img src={item.image} alt="Selected" style={{ width: "50px", height: "50px" }} />} */}

                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                : showQuistitionById?.name == "صح/خطأ" ?   
                                <div>
                                {inputsTow.map((item, index) => (
                                    <div key={index} className="wraper_input_and_checkbox">
                                        <div className="mt-4" style={{ display: "flex", alignItems: "center" }}>
                                            <div className="check" style={{ width: "20px", transform: "scale(2)", marginTop: "-18px" }}>
                                                <input
                                                    type="checkbox"
                                                    name="adminIds"
                                                    width={"100px"}
                                                    onChange={(e) => handleChangeTowInput(index, e)}
                                                    checked={item.is_correct}
                                                />
                                            </div>
                                            <div className="camera_and_input">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputField"
                                                    placeholder="Enter text"
                                                    onChange={(e) => handleChangeTowInput(index, e)}
                                                    value={item.name}
                                                    required

                                                />
                                                <input
                                                    type="file"
                                                    id="imageInput"
                                                    className='imageInput_qbank'

                                                    accept="image/*"
                                                    name='image'
                                                    style={{ direction: "ltr" }}
                                                    onChange={(e) => handleChangeTowInput(index, e)}
                                                />
                                                {/* {item.image && <img src={item.image} alt="Selected" style={{ width: "50px", height: "50px" }} />} */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>:  showQuistitionById?.name == "سؤال انشائي" ?   
                                <div>
                                {inputsOne.map((item, index) => (
                                    <div key={index} className="wraper_input_and_checkbox">
                                        <div className="mt-4" style={{ display: "flex", alignItems: "center" }}>
                                            <div className="check" style={{ width: "20px", transform: "scale(2)", marginTop: "-18px" }}>
                                                <input
                                                    type="checkbox"
                                                    name="adminIds"
                                                    width={"100px"}
                                                    onChange={(e) => handleChangeOneInput(index, e)}
                                                    checked={item.is_correct}
                                                />
                                            </div>
                                            <div className="camera_and_input">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputField"
                                                    placeholder="Enter text"
                                                    onChange={(e) => handleChangeOneInput(index, e)}
                                                    value={item.name}
                                                    required

                                                />
                                                <input
                                                    type="file"
                                                    id="imageInput"
                                                    accept="image/*"
                                                    className='imageInput_qbank'

                                                    name='image'
                                                    style={{ direction: "ltr" }}
                                                    onChange={(e) => handleChangeOneInput(index, e)}
                                                />
                                                {item.image && <img src={item.image} alt="Selected" style={{ width: "50px", height: "50px" }} />}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            :""}

                    </div>

                </div>
                <div className='col-12 mt-4' style={{ direction: "ltr" }}>
                    <div>
                        <button type='submit'        
                             disabled={isLoading} // تعطيل الزر أثناء التحميل
 className='btn' style={{ backgroundColor: "#C01F59" ,color:"#ffff"}}>حفظ</button>
                    </div>
                </div>
            </form>
        </div>
    </>
    )
}
