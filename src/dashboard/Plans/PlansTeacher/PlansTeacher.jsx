import React, { useEffect, useState } from 'react'
import Api_Dashboard from '../../interceptor/interceptorDashboard'
import Plans from '../Plans'

export default function PlansTeacher() {
    const [allTeacherPlanData,SetallTeacherPlanData]=useState([])

    useEffect(()=>{
        getAllTeacherPlan()
    },[])
    const getAllTeacherPlan= async ()=>{
      await Api_Dashboard.get('/plans/teacher').then((response)=>{
        SetallTeacherPlanData(response.data.data)
            console.log(response.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <>
        <Plans dataRender={allTeacherPlanData} dataConnect={"البيانات الباقات المعلمين"}/>


    
    
    
    </>
  )
}
