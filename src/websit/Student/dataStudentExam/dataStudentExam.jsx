import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import createNew from '../../../assets/icons/sidebar/wpf_create-new copy.svg';
import plus from '../../../assets/image/+.svg';
import '../dataStudentExam/dataStudentExam.css';
import Api_Website from '../../../utlis/axios_utils_websit.jsx';

function DataStudentExam(props) {
    const [z, setZ] = useState(1); // Start with page 1
    const [data, setInfo] = useState([]);
    const layoutBackground = useSelector((state) => state.dark.lay);

    useEffect(() => {
        getDataStudentExam();
    }, [z]); // Fetch data on mount and when `z` changes

    const getDataStudentExam = () => {
        Api_Website.get(`students/exams?page=${z}`)
            .then(response => {
                if (response.data && response.data.data) {
                    setInfo(response.data.data);
                } else {
                    setInfo([]);
                    console.error("No valid data returned");
                }
            })
            .catch(error => {
                setInfo([]);
                console.error("Error fetching exam data:", error);
            });
    }

    return (
        <>
            <div className="container py-5 mb-2 d-flex align-items-center justify-content-center flex-column">
                <div style={{ width: "85%", paddingTop: "4.25px" }}>
                    <img src={createNew} alt="Create New Exam" style={{ backgroundColor: "transparent" }} />
                    <Link
                        className="btn"
                        to="#"
                        style={{
                            backgroundColor: "transparent",
                            color: layoutBackground === "#0E0A43" ? "white" : "#0E0A43",
                            fontSize: "18px"
                        }}
                    >
                        إنشاء الامتحان للطالب
                    </Link>
                </div>
            </div>
            <div className="container mb-2 d-flex align-items-center justify-content-center flex-column">
                <div style={{ width: "85%", paddingTop: "4.25px" }}>
                    <div className="d-flex align-items-center justify-content-between">
                        <button className="rounded-5 p-0 p-1 px-2 my-2" type="button"
                            style={{ backgroundColor: "#FE4F60", color: "black", border: "none" }}>
                            بيانات إمتحان الطالب
                        </button>
                        <Link className="rounded-5 p-0 p-1 px-4 my-2" to={"/student/createExam"}
                            style={{ backgroundColor: "#C01F59", color: "white", border: "none", textDecoration: "none" }}>
                            <img className="p-1 ms-2" src={plus} alt='Add Exam' style={{ backgroundColor: "black", borderRadius: "50%" }} />
                            إضافة امتحان
                        </Link>
                    </div>

                    <table className='tabelstudent' style={{ width: "100%" }}>
                        <thead>
                            <tr style={{
                                color: layoutBackground === "#0E0A43" ? "#FE4F60" : "black",
                            }}>
                                <th>#</th>
                                <th>الفصل الدراسي</th>
                                <th>اسم الصف</th>
                                <th>اسم المبحث</th>
                                <th>نتيجة الامتحان</th>
                            </tr>
                        </thead>
                        <tbody style={{
                                color: layoutBackground === "#0E0A43" ? "white" : "black"}}>
                            {Array.isArray(data) && data.length > 0 ? data.map(({ id, semster, group, status, subject }, index) => (
                                <tr key={index} style={{ 
                                    backgroundColor: index % 2 === 0 ? (layoutBackground === "#0E0A43" ? "#1d195d" : "#FCFCFC") : (layoutBackground === "#0E0A43" ? "#090631" : "#DADADA")
                                }}>
                                    <td >{index + 1}</td>
                                    <td>{semster[1]}</td>
                                    <td>{group.name}</td>
                                    <td>{subject.name}</td>
                                    <td style={{ color: status === "راسب" ? "#FF3A3A" : "#24FF00" }}>
                                    {status}</td>                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="5">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <div className="d-flex justify-content- mt-3" dir="ltr">
                        <button className='btn btn-outline-light mx-2' style={{backgroundColor:"#4941A6"}} onClick={() => setZ(z + 1)}>Next</button>
                        <button className='btn btn-outline-light' style={{backgroundColor:"#4941A6"}} onClick={() => setZ(z - 1)} disabled={z <= 1}>Previous</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DataStudentExam;
