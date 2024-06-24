import React, { useEffect, useState } from 'react'
import Plans from '../Plans'
import Api_Dashboard from '../../interceptor/interceptorDashboard'

export default function PlansStudent() {
    const [allStudentPlanData,SetallStudentPlanData]=useState([])

    useEffect(()=>{
        getAllTeacherPlan()
    },[])
    const getAllTeacherPlan= async ()=>{
      await Api_Dashboard.get('/plans/student').then((response)=>{
            SetallStudentPlanData(response.data.data)
            console.log(response.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <>
    <Plans dataRender={allStudentPlanData} dataConnect={"البيانات الباقات الطلاب"}/>
    </>
  )
}
