import React from 'react'
import Header from '../../common/header/header';
import { Outlet } from 'react-router-dom';


 function LayoutComp() {
  return (
    <>
    <section className="all_page" style={{ backgroundColor: "#090631", position: "absolute",
zIndex: -3333333333, height: "100vh", width: "100%",
        border: "1px", }}>
         < Header/>

        <div style={{maxWidth: "60%", color:"white",
backgroundColor:"#0E0A43", marginLeft: "64px", borderRadius: "10px", position: "relative",top: "20px"}}>
        <Outlet/>
        </div>


</section>
    </>
  )
}

export default LayoutComp;
