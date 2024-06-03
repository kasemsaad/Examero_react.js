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
    </>
  )
}

export default LayoutComp;
