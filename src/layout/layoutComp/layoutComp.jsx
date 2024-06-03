import React from 'react'
import Header from '../../common/header/header';
import { Outlet } from 'react-router-dom';
import AccountSetting from '../../dashboard/Account-settting/AccountSetting';
import SidebarFullscreen from '../../common/sidebar/structure';
import { useSelector } from 'react-redux';
// "#090631"
 function LayoutComp() {
  const bachgroundTheme = useSelector((state)=>state.dark.color)
  const layoutBackground = useSelector((state)=>state.dark.lay)

  return (
    <>
    <section className="all_page" style={{ backgroundColor:`${bachgroundTheme}` , position: "absolute",
zIndex: -3333333333, height: "auto", width: "100%",
        border: "1px",  }}>
         < Header/>

        <div className='container' style={{maxWidth: "65%", color:"white",
backgroundColor:`${layoutBackground}`, marginLeft: "64px", borderRadius: "10px", position: "relative",top: "20px",overflow:"auto",marginBottom:"115px"}}>
        <Outlet/>
        </div>

        {/* <div style={{position:"relative",right:"80px"}}>
  <SidebarFullscreen/>

  </div> */}
</section>
import SidebarFullscreen from '../../common/sidebar/sidbarFullscreen';
import Sidmedscreen from '../../common/sidebar/sidmedscreen';

import "./style.css"

function LayoutComp() {
  return (
    <>
      <section className="all_page " style={{
        backgroundColor: "#090631", position: "absolute",
        zIndex: -3333333333, height: "auto", width: "100%",
        border: "1px",
      }}>
        < Header />
        <div className='home'>
          <div className='block row ' dir='rtl' >
            <div className='col-md-3 me-5' dir="rtl"   style={{ paddingTop:"110px" }}>
              <SidebarFullscreen />
              <Sidmedscreen />
              </div>
                <div className='form col-md-9   '>
                   <div
                      style={{
                        maxWidth: "96%",
                        color: "white",
                        backgroundColor: "red",
                        height:"5000px",
                        borderRadius: "10px",
                        position: "relative",
                        overflow: "auto",
                        }}>
                      {/* <Outlet /> */}
                   </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default LayoutComp;
