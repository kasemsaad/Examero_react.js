import React from 'react'
import Header from '../../common/header/header';
import { Outlet } from 'react-router-dom';
import AccountSetting from '../../dashboard/Account-settting/AccountSetting';
import SidebarFullscreen from '../../common/sidebar/structure';
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
        <div className='home' style={{height: 800 }} >
          <div className='block row ' dir='rtl' >
            <div className='col-md-3 me-5' dir="rtl">
              <SidebarFullscreen />
              </div>
                <div className='form col-md-9 '>
                   <div
                      style={{
                        maxWidth: "100%",
                        color: "white",
                        backgroundColor: "#0E0A43",
                        borderRadius: "10px",
                        position: "relative",
                        top: "-15px",
                        overflow: "auto",
                        }}>
                      <Outlet />
                   </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default LayoutComp;
