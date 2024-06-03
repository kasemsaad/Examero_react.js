import React from 'react'
import Header from '../../common/header/header';
import { Outlet } from 'react-router-dom';
import AccountSetting from '../../dashboard/Account-settting/AccountSetting';
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
