import React from 'react'
import Header from '../../common/header/header';
import { Outlet } from 'react-router-dom';


 function LayoutComp() {
  return (
    <>
    <section className="all_page" style={{ backgroundColor: "#090631", position: "absolute",
zIndex: -3333333333, height: "auto", width: "100%",
        border: "1px",  }}>
         < Header/>

        <div className='container' style={{maxWidth: "65%", color:"white",
backgroundColor:"#0E0A43", marginLeft: "64px", borderRadius: "10px", position: "relative",top: "20px",overflow:"auto",marginBottom:"115px"}}>

        <Outlet/>
        </div>


</section>
    </>
  )
}

export default LayoutComp;
