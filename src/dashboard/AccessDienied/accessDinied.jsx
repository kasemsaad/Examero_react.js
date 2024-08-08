import React from 'react'
import ErrorPage from '../Error/errorPage'
import FirstTriangle from '../components/FirstTriangle/FirstTriangle'
import { Link, useLocation } from 'react-router-dom'

export default function AccessDinied() {
  
  let location =useLocation()
  const {id} = location.state || {}  
  return (
    <>
      {/* {id ? (
        <Link to='/dashboard/supervisors'>
          <FirstTriangle stylep={{ color: "black" }} content={"المشرفين"} style={{ backgroundColor: "#CDCDCD" ,marginRight:"10px",color:'black'}} />
        </Link>
      ) : null}

      <ErrorPage /> */}


      {
        id ? <div>

         <Link to='/dashboard/supervisors'>
        <FirstTriangle stylep={{ color: "black" }} content={"المشرفين"} style={{ backgroundColor: "#CDCDCD" ,marginRight:"10px",color:'black'}} />
      </Link>
      <ErrorPage content={true}/>
      </div> :
      <ErrorPage/>

      }



    </>
  );
}