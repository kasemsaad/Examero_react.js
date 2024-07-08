import React from "react";
import Header from "../../common/header/header";
import { Outlet } from "react-router-dom";
import AccountSetting from "../../dashboard/Account-settting/AccountSetting";
import Sidmedscreen from "../../common/sidebar/sidmedscreen";
import Navsmallscreen from "../../common/sidebar/navsmallscreen";
import "./style.css";
import { useSelector } from "react-redux";
import SidebarFullscreen from "../../common/sidebar/sidbarFullscreen";
import TawkToScript from "../../websit/chat/TawkToScript.jsx";

function LayoutComp() {
  const bachgroundTheme = useSelector((state) => state.dark.color);
  const layoutBackground = useSelector((state) => state.dark.lay);
  return (
    <>

      <section
        className="all_page "
        style={{
          backgroundColor: `${bachgroundTheme}`,
          position: "absolute",
          zIndex: -3333333333,
          height: "auto",
          minHeight:"100vh",
          width: "100%",
          border: "1px",
        }}
      >
        <Header />
        <Navsmallscreen />
        <TawkToScript />
        <div className="home">
          <div className="block row " dir="rtl">
            <div
              className="col-md-3 ff me-5"
              dir="rtl"
              style={{ paddingTop: "110px" }}
            >
              <SidebarFullscreen />
              <Sidmedscreen />
            </div>
            <div className="form col-md-9   ">
              <div
                style={{
                  maxWidth: "96%",
                  color: "white",
                  backgroundColor: `${layoutBackground}`,
                  borderRadius: "10px",
                  position: "relative",
                  // overflow: "auto",
                }}
              >
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LayoutComp;
